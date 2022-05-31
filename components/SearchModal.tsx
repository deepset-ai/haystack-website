import { Dispatch, KeyboardEvent, SetStateAction, useEffect, useState } from "react";
import { ISearchResult } from "pages/api/search";
import { SearchIcon } from "./SearchIcon";
import styles from "./SearchModal.module.css";


interface IProcessedSearchResult extends ISearchResult {
  groupName: string;
  documentName: string;
  navPath: string;
}

interface IGroupedSearchResult {
  name: string;
  values: IProcessedSearchResult[];
}

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    }
  }, [value, delay]);
  return debouncedValue;
}

const replaceWhitespaceLink = (text: string): string => text.replace('_', '-').replace(' ', '-');
const replaceWhitespaceText = (text: string): string => text.replace('_', ' ');
const replaceUnderscore = (text: string): string => text.replace('_', ' ');
const removeMdxFileEnding = (text: string): string => text.replace('.mdx', '');
const capitalizeWords = (text: string): string => text.replace(/(?:^|\s)\S/g, (a) => { return a.toUpperCase(); });

const cleanPathSegment = (segment: string): string => {
  return removeMdxFileEnding(
    replaceWhitespaceText(
      replaceUnderscore(segment)
    )
  );
}

const getNavPath = (result: ISearchResult): string => {
	const segments = result.meta.filepath.split('/');
	[segments[0], segments[1], segments[2]] = [segments[1], segments[0], replaceWhitespaceLink(segments[2])];
	const path = removeMdxFileEnding(segments.join('/')).replace('latest/', '');
	return `${window.location.origin}/${path}`;
}

const getNavNames = (result: ISearchResult): [string, string] => {
  const segments = result.meta.filepath.split('/');
  return [capitalizeWords(cleanPathSegment(segments[1])), capitalizeWords(cleanPathSegment(segments[2]))];
}

const isLatestVersion = (result: ISearchResult): number => {
  return result.meta.docs_version === 'latest' ? 1 : 0;
}

const parseSearchResults = (results: ISearchResult[]): IProcessedSearchResult[] => {
  return results.map((result) => {
    const [groupName, documentName] = getNavNames(result);
    return {
      ...result,
      groupName,
      documentName,
      navPath: getNavPath(result),
    }
  })
}

const groupResults = (results: IProcessedSearchResult[]): IGroupedSearchResult[] => {
  const groups = results.reduce((pv: any, cv) => {
    return {
      ...pv,
      [cv.groupName]: [
        ...(pv[cv.groupName] || []),
        cv,
      ]
    }
  }, {});
  return Object.keys(groups).map(groupKey => ({
    name: groupKey,
    values: groups[groupKey],
  }))
}

const sortGroups = (results: IGroupedSearchResult[]): IGroupedSearchResult[] => {
  const scored = results.map(result => ({
    ...result,
    maxScore: result.values.reduce((a, b) => Math.max(a, b.score), 0),
  }));
  return scored.sort((a, b) => b.maxScore - a.maxScore);
}

export function VersionPill(props: { version: string }) {
  return (
    <span className="px-2 py-1 mb-1 rounded-full bg-black/20 text-gray-400 text-center text-sm">{props.version}</span>
  )
}

export function SearchResult(props: { result: IProcessedSearchResult }) {
  const previewMaxLength = 250;
  return (
    <>
      <a href={props.result.navPath}>
        <div className="flex flex-col px-6 py-3 border-t border-gray-100/20">
            <div className="flex flex-row flex-grow justify-between">
              <span className="text-lg font-bold">{props.result.documentName}</span>
              <VersionPill version={props.result.meta.docs_version} />
            </div>
            <span>{props.result.content.substring(0, previewMaxLength)}...</span>
        </div>
      </a>
    </>
  )
}

export function SearchResultGroup(props: { group: IGroupedSearchResult }) {
  return (
    <>
      <div className="flex flex-col bg-blue-900/30 text-gray-100 rounded-md py-2">
        <span className="text-xl font-bold text-gray-100 mb-2 px-5 py-2">{props.group.name}</span>
        {
          props.group.values.map(result => (
            <SearchResult key={result.result_id} result={result} />
          ))
        }
      </div>
    </>
  )
}

export function Spinner() {
  return (
    <>
      <div className={styles['loading-spinner']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export function SearchModal(props: {
  searchModal: boolean,
  setSearchModal: Dispatch<SetStateAction<boolean>>,
}) {
	const [searchResults, setSearchResults] = useState<IGroupedSearchResult[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isDirty, setIsDirty] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 400);

  const search = async () => {
    if (searchTerm === "") return;
    const search = async (term: string) => {
      const result = await fetch(`${window.location.origin}/api/search`, {
        method: 'POST',
        body: JSON.stringify({ term }),
      });
      if (result.status != 200) return [] as ISearchResult[];
      const data = await result.json();
      
      return data as ISearchResult[];
    }
    setIsLoading(true);
    const data = await search(searchTerm);
    setSearchResults(
      sortGroups(
        groupResults(
          parseSearchResults(data.sort((a,b) => isLatestVersion(b) - isLatestVersion(a)))
        )
      )
    );
    setIsDirty(true);
    setIsLoading(false);
  };

  const closeModal = () => {
    props.setSearchModal(false);
    setSearchTerm("");
    setSearchResults([]);
    setIsDirty(false);
  }

  const inputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter': search(); break;
      case 'Escape': closeModal(); break;
      case 'Esc': closeModal(); break;
    }
  }

  const showNoResults = () => searchResults.length === 0 && isDirty;
  const showResults = () => searchResults.length > 0;
  const showContent = () => showNoResults() || showResults();

  useEffect(() => {
    if (debouncedSearchTerm !== '') search();
  }, [debouncedSearchTerm]);  // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
    {
      props.searchModal && (
        <div className="relative z-10">
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-all"></div>
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div
              className="flex items-center justify-center min-h-screen"
              onClick={closeModal}
            >
              <div
                className="relative inline-block bg-dark-blue rounded-lg transition-all w-[80vw] max-h-[80vh] overflow-y-auto no-scrollbar drop-shadow-xl shadow-inner-light"
                onClick={(e => e.stopPropagation())}
              >
                <div className={`flex flex-row justify-center items-center h-20 px-5 ${showContent() ? 'border-b' : ''} border-white/20`}>
                  <SearchIcon />
                  <input
                    id="search-input"
                    autoFocus
                    className="h-full flex-grow px-5 no-focus-border bg-transparent text-xl text-white/90"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setSearchResults([]);
                        setIsDirty(false);
                      }
                    }
                    type="text"
                    placeholder="Search documentation"
                    onKeyDown={inputKeyPress}
                  />
                  {
                    isLoading && <Spinner />
                  }
                </div>

                <div className={`px-10 ${showContent() ? 'pb-10' : ''}`}>                
                  {
                    showNoResults() && (
                      <>
                        <div className="flex flex-row justify-center mt-12 text-2xl">
                          <span className="text-gray-400">No results for &quot;<span className="text-gray-300">{searchTerm}</span>&quot;</span>
                        </div>
                      </>
                    )
                  }
                  {
                    showResults() && (
                      <>
                        <ul className="mt-8 overflow-y-auto">
                          {
                            searchResults.map(group => (
                              <li className="mb-4" key={group.name}>
                                <SearchResultGroup group={group} />
                              </li>
                            ))
                          }
                        </ul>
                      </>
                    )
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
      )
    }
		</>
	)
}

import { Dispatch, KeyboardEvent, SetStateAction, useState } from "react";
import { ISearchResult } from "pages/api/search";
import { SearchIcon } from "./SearchIcon";


const replaceWhitespaceLink = (text: string): string => text.replace('_', '-');
const replaceWhitespaceText = (text: string): string => text.replace('_', ' ');
const replaceUnderscore = (text: string): string => text.replace('_', '-');
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
	[segments[0], segments[1]] = [segments[1], segments[0]];
	const path = removeMdxFileEnding(
    replaceUnderscore(
      replaceWhitespaceLink(segments.join('/'))
    )
  ).replace('latest/', '');
	return `${window.location.origin}/${path}`;
}

const getNavName = (result: ISearchResult): string => {
  const segments = result.meta.filepath.split('/');
  return capitalizeWords(cleanPathSegment(segments[1])) + " - " + capitalizeWords(cleanPathSegment(segments[2]));
}

const isLatestVersion = (result: ISearchResult): number => {
  return result.meta.docs_version === 'latest' ? 1 : 0;
}

export function VersionPill(props: { version: string }) {
  return (
    <span className="text-gray-400 bg-black/20 px-2 py-1 text-center rounded-full">{props.version}</span>
  )
}

export function SearchResult(props: { result: ISearchResult }) {
  return (
    <>
      <a href={getNavPath(props.result)}>
        <div className="flex flex-col bg-blue-900/20 text-gray-100 rounded-md px-3 py-2">
            <div className="flex flex-row flex-grow justify-between">
              <span className="text-lg font-bold">{getNavName(props.result)}</span>
              <VersionPill version={props.result.meta.docs_version} />
            </div>
            <span>{props.result.content}</span>
        </div>
      </a>
    </>
  )
}

export function SearchModal(props: {
  searchModal: boolean,
  setSearchModal: Dispatch<SetStateAction<boolean>>,
}) {
	const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isDirty, setIsDirty] = useState<boolean>(false);

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
    const data = await search(searchTerm);
    setSearchResults(data.sort((a,b) => isLatestVersion(b) - isLatestVersion(a)));
    setIsDirty(true);
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
                className="relative inline-block bg-dark-blue rounded-lg transition-all w-[80vw] max-h-[80vh] overflow-y-auto no-scrollbar"
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
                        <ul className="mt-12 overflow-y-auto">
                          {
                            searchResults.map(result => (
                              <li className="mb-4" key={result.result_id}>
                                <SearchResult result={result} />
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

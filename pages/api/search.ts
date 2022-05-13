import type { NextApiRequest, NextApiResponse } from 'next';

export interface ISearchResultFile {
	[key: string]: string;
}

export interface ISearchResultMeta {
	[key: string]: string;
	filepath: string;
	docs_version: string;
}

export interface ISearchResult {
	content: string;
	content_type: string;
	file: ISearchResultFile;
	meta: ISearchResultMeta;
	result_id: string;
	score: number;
}

export interface ISearchRequest {
  term: string;
}

export interface ISearchErrorResponse {
  message: string;
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

const validateSearchRequest = (requestBody: string): ISearchRequest => { 
  const data = JSON.parse(requestBody);
  Object.keys(data).forEach(key => {
    if (key != 'term') throw new ValidationError(`Provided illegal key: ${key}`);
  });
  return data as ISearchRequest;
}

const searchEndpoint = process.env.HAYSTACK_ENDPOINT || "";
const searchToken = process.env.HAYSTACK_TOKEN || "";
const searchHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${searchToken}`,
};

const search = async (term: string) => {
  const result = await fetch(searchEndpoint, {
    method: 'POST',
    headers: searchHeaders,
    body: JSON.stringify({ "queries": [ term ] }),
  });
  const data = await result.json();
  return data.results[0].documents as ISearchResult[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ISearchResult[] | ISearchErrorResponse>) {
  try {
    const request = validateSearchRequest(req.body);
    const data = await search(request.term);
    return res.status(200).json(data);
  } catch (e) {
    if (e instanceof ValidationError) return res.status(400).json({ message: e.message })
    return res.status(500).json({ message: 'unexpected error' });
  }
}

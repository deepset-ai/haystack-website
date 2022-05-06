export const getAnchorFromText = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}

import { getAnchorFromText } from "lib/clientsideUtils";

export default function H3({ children }: { children: string }) {
  const anchor = getAnchorFromText(children);
  const link = `#${anchor}`;
  return (
    <h3 id={anchor}>
      { children }
      <a href={link}><div /></a>
    </h3>
  );
}

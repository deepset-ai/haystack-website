import { getAnchorFromText } from "lib/clientsideUtils";

export default function H2({ children }: { children: string }) {
  const anchor = getAnchorFromText(children);
  const link = `#${anchor}`;
  return (
    <h2 id={anchor}>
      { children }
      <a href={link}><div /></a>
    </h2>
  );
}

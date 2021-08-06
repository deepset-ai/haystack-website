import dynamic from "next/dynamic";
import { Pre } from "components/Pre";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
export const components = {
  Disclosures: dynamic(() => import("components/Disclosures")),
  Tabs: dynamic(() => import("components/Tabs")),
  pre: Pre,
};

import semver from "semver";
import { getDocsVersions } from "../markdown";

test("docs/ should only contain semver version directories", () => {
  const versions = getDocsVersions();
  versions.forEach((version) => {
    expect(semver.valid(version)).not.toBeNull();
  });
});

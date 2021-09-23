## Development

### Getting Started

First, install Next.js (if needed):

```bash
npm install next react react-dom
# or
yarn install next 
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

If you're editing mdx files, run the following command to see your changes update automatically:

```bash
npm run dev:watch
# or
yarn dev:watch
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Environment Variables

If you have permission issues when starting up, get a [personal access token from GitHub](https://github.com/settings/tokens/new). The `public_repo` scope is sufficient.

Create a `.env.local` file and add your token as an env variable:

```bash
GITHUB_PERSONAL_ACCESS_TOKEN="youraccesstoken"
```

### Required Reading

This project makes heavy use of Next.js's [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) and [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) functions, to fetch markdown files at build time (locally from the `docs` directory as well as from GitHub using the GitHub API) and generate html pages for each of these files. Before working on the project, it's vital that you understand how these functions work and how they apply to this project. [This example](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript) and [this example](https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote) may be used as simple demonstrations of these functions to solidify your understanding.

## Docs Publishing Process

### Overview & Usage Docs

These docs live in the `docs` directory, in the given version directory. The docs are written in .mdx, which allows us to include JSX inside these files. This allows us to add [Headless UI](http://headlessui.dev/) components, a React component library based on Tailwind.css. See the `components/Disclosures` and `components/Tabs` components as examples and how these are used inside of .mdx files such as `docs/v0.9.0/overview/get-started.mdx`. Whenever you want edit or create new documentation, simply do so by adding .mdx files to a given version directory or by editing existing .mdx files. For new files one additional step is required, please add the new page to the `menu.json` file which is located in the folder `docs/vX.X.X`. When you push a branch with your changes to GitHub, Vercel will automatically generate a preview environment for you (check the Vercel Dashboard to find the preview URL).

### Tutorial & Reference Docs

These docs live in the [Haystack repository](https://github.com/deepset-ai/haystack/tree/master/docs), in the given version directory. The docs are generated markdown files and we fetch these **at build time** using the GitHub API. Thanks to Vercel's [Incremental Static Regeneration](https://vercel.com/docs/next.js/incremental-static-regeneration), the static pages we create for these docs are always up-to-date. This means that if existing tutorials or references are changed, the changes will be visible on the docs website automatically.

#### Preview from non-master branches

To preview docs that are on a non-master branch of the Haystack repo, you run this project locally and navigate to `lib/github.ts`, where you have to add a `ref` parameter to the `octokit.rest.repos.getContent` function call with the value of the branch name that you would like to preview. You also need to add the tutorials/references you would like to preview to `docs/{GIVEN_VERSION}/menu.json` and `lib/constants.ts`.

### Updating docs after a release

When there's a new Haystack release, we need to create a directory for the new version within the local `/docs` directory. In this directory, we can write new overview and usage docs in .mdx (or manually copy over the ones from the previous version directory). Once this is done, the project will automatically fetch the reference and tutorial docs for the new version from GitHub. Bear in mind that a `menu.json` file needs to exist in every new version directory so that our Menu components know which page links to display. Moreover, we need to point the links, which are pointing to the latest to version, to the new version. Currently, we do not have a script for this process. Therefore, you need to use the search function of your IDE. Additionally, the `referenceFiles` and `tutorialFiles` constants in `lib/constants` need to be updated with any new reference or tutorial docs that get created as part of a new release. In the [haystack](https://github.com/deepset-ai/haystack) repo, we have to release the api and tutorial docs by copying them to a new version folder as well. If you want to include here files from another brnach than master follwo **Preview from non-master branches**. **Lastly**, we have to update the constant specified in the `components/VersionSelect` component, so that we default to the new version when navigating between pages.
After releasing the docs, we need to release the benchmarks. Create a new version folder in the folder `benchmarks` and copy all folders from `latest` to the new folder.
If you know start the local sever and go to the new version, you will see the 404 page. We pull the version from the haystack release tags. Most likely, the newest version is not released yet. Therefore, you have to add it manually to the array `tagNames` in the function `getDocsVersions` by adding the command `tagNames.push('v0.10.0');`.


## Styling

We use [Tailwind](https://tailwindcss.com) for CSS. It's a CSS utility library, which allows us to write barely any CSS ourselves. The `tailwind.config.js` file contains configuration to provide classes that match deepset.ai's new style guide. Additionally, there is a `styles/global.css` file, which loads our custom font provided by the style guide. Lastly, we have two css module files within the `components` directory (markdown.module.css and tutorial.module.css), wich are applied on the `components/Layout` component. These files allow us to provide some defaults for certain HTML elements, which get applied to the HTML tags generated when we convert markdown to html at build time. We also use a React component library authored by the Tailwind team, called [Headless UI](http://headlessui.dev/). This allows us to easily create React components such as the `components/Tabs` and `components/Disclosures` components.

## Deployment

This application gets deployed on [Vercel](https://vercel.com). In the dashboard, connect the `haystack-website` repo to a new project and it should handle builds, preview environments (all branches other than master), and production environments (master branch) automatically.

## Future Work

Convert the remote markdown files for references and tutorials to .mdx, so that we can inject React components into these. This would also allow for more code sharing between the overview+usage pages and tutorial+reference pages.

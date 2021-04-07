*******************************************************
# Haystack — Documentation
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdeepset-ai%2Fhaystack-website.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdeepset-ai%2Fhaystack-website?ref=badge_shield)

*******************************************************


Setup Gatsby
============

Requirements:
- Node.js
- Git

The Gatsby CLI is available via npm and should be installed globally by running:

npm install -g gatsby-cli

Clone master branch and run it locally:

```
git clone https://github.com/deepset-ai/haystack-io.git
cd haystack-io
npm install
gatsby develop
```

Open up a new tab in your browser and navigate to `http://localhost:8000/`


Edit documentation
============

Go to the docs direcotry:

```
cd ./src/pages/docs/site/en
```

Currently, the documentation is splitted into three parts:
- **Usage:** How to use Haystack
- **Tutorials:** Collection of different use cases for Haystack
- **API:** Python docstrings

In order to add a new Markdown file to this structure, you need choose the right directory and copy the file to it. Add the following information on top of the file so that it can be loaded automatically:

```
---
title: "<title>"
metaTitle: "<metatitle>"
metaDescription: ""
slug: "/docs/<filename>"
date: "<date>"
id: "<filename>"
---
```

Last but not least, you need to include the file into the menu structure which is defined in the file `./src/pages/docs/site/en/menuStructure/menu.json`. Here you need to add a json object to the structure:

```json
{
    "id": "<IdFromFile>",
    "title": "<NameInMenu>",
    "label1": "<LabelOfParent>",
    "label2": "",
    "label3": "",
    "order": <NumberInMenu>
},
``` 

Deployment
============

1. Push changes to branch **source**
2. Merge changes to branch **gh-pages**
3. Option 1 without updating the documentation files: Run `npm run deploy`<br>
   Option 2 with updating the documentation files: Run `npm run update_deploy` (need to be run from the directory **haystack-website**)
4. Documentation gets deployed to **haystack.deepset.ai**


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdeepset-ai%2Fhaystack-website.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdeepset-ai%2Fhaystack-website?ref=badge_large)
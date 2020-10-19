#!/bin/bash

# Master data
versions=("" "latest/" "v0.4.0/")  

for i in "${versions[@]}"
do
    j=$i
    if [ "$i" = "latest/" ]; then
        j=''
    fi

    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/api/api/document_store.md -O ./src/pages/docs/versions/master/${i}site/en/api/api/document_store.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/api/api/file_converter.md -O ./src/pages/docs/versions/master/${i}site/en/api/api/file_converter.md
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/api/api/preprocessor.md -O ./src/pages/docs/versions/master/${i}site/en/api/api/preprocessor.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/api/api/reader.md -O ./src/pages/docs/versions/master/${i}site/en/api/api/reader.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/api/api/retriever.md  -O ./src/pages/docs/versions/master/${i}site/en/api/api/retriever.md

    echo -e "---\ntitle: \"Document Store\"\nmetaTitle: \"Database\"\nmetaDescription: \"\"\nslug: \"/docs/apidatabase\"\ndate: \"2020-09-03\"\nid: \"apidatabasemd\"\n---\n\n# Document Store\n\n$(cat ./src/pages/docs/versions/master/site/en/api/api/document_store.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/document_store.md 
    echo -e "---\ntitle: \"File Converters\"\nmetaTitle: \"File Converters\"\nmetaDescription: \"\"\nslug: \"/docs/file_converters\"\ndate: \"2020-09-03\"\nid: \"file_convertersmd\"\n---\n\n# File Converters\n\n$(cat ./src/pages/docs/versions/master/site/en/api/api/file_converter.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/file_converter.md  
    echo -e "---\ntitle: \"Preprocessor\"\nmetaTitle: \"Preprocessor\"\nmetaDescription: \"\"\nslug: \"/docs/apiindexing\"\ndate: \"2020-09-03\"\nid: \"apiindexingmd\"\n---\n\n# Preprocessor\n\n$(cat ./src/pages/docs/versions/master/site/en/api/api/preprocessor.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/preprocessor.md
    echo -e "---\ntitle: \"Reader\"\nmetaTitle: \"Reader\"\nmetaDescription: \"\"\nslug: \"/docs/apireadermd\"\ndate: \"2020-09-03\"\nid: \"apireadermd\"\n---\n\n# Reader\n\n$(cat ./src/pages/docs/versions/master/site/en/api/api/reader.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/reader.md
    echo -e "---\ntitle: \"Retriever\"\nmetaTitle: \"Retriever\"\nmetaDescription: \"\"\nslug: \"/docs/apiretrievermd\"\ndate: \"2020-09-03\"\nid: \"apiretrievermd\"\n---\n\n# Retriever\n\n$(cat ./src/pages/docs/versions/master/site/en/api/api/retriever.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/retriever.md
done
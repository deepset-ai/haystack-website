#!/bin/bash

# Used branch
echo "Haystack branch: $1"

# Master data
versionstxt=$(cat src/pages/docs/versions/master/versions.txt)
versions=("" $versionstxt)  

for i in "${versions[@]}"
do
    rm ./src/pages/docs/versions/master/${i}site/en/api/api/*
done

if [ ! -d "./src/pages/docs/versions/master/${i}site/en/api/api/" ]; then
    mkdir -p ./src/pages/docs/versions/master/${i}site/en/api/api
fi

for i in "${versions[@]}"
do
    j=$i
    if [ "$i" = "latest/" ]; then
        j=''
    fi

    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/api/api/document_store.md -O ./src/pages/docs/versions/master/${i}site/en/api/api/document_store.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/api/api/file_converter.md -O ./src/pages/docs/versions/master/${i}site/en/api/api/file_converter.md
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/api/api/preprocessor.md -O ./src/pages/docs/versions/master/${i}site/en/api/api/preprocessor.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/api/api/reader.md -O ./src/pages/docs/versions/master/${i}site/en/api/api/reader.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/api/api/retriever.md  -O ./src/pages/docs/versions/master/${i}site/en/api/api/retriever.md
    if [[ `wget -S --spider https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/api/api/generator.md  2>&1 | grep 'HTTP/1.1 200 OK'` ]]; then 
        wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/api/api/generator.md  -O ./src/pages/docs/versions/master/${i}site/en/api/api/generator.md
    fi
    if [[ `wget -S --spider https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/api/api/pipelines.md  2>&1 | grep 'HTTP/1.1 200 OK'` ]]; then 
        wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/api/api/pipelines.md  -O ./src/pages/docs/versions/master/${i}site/en/api/api/pipelines.md
    fi

    echo -e "---\ntitle: \"Document Store\"\nmetaTitle: \"Database\"\nmetaDescription: \"\"\nslug: \"/docs/apidatabase\"\ndate: \"2020-09-03\"\nid: \"apidatabasemd\"\n---\n\n# Document Store\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/api/api/document_store.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/document_store.md 
    sed -i 's/# Module /# Module: /g' ./src/pages/docs/versions/master/${i}site/en/api/api/document_store.md 
    sed -i 's/## \(.*\) Objects/## Class: \1/g' ./src/pages/docs/versions/master/${i}site/en/api/api/document_store.md 
    echo -e "---\ntitle: \"File Converters\"\nmetaTitle: \"File Converters\"\nmetaDescription: \"\"\nslug: \"/docs/file_converters\"\ndate: \"2020-09-03\"\nid: \"file_convertersmd\"\n---\n\n# File Converters\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/api/api/file_converter.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/file_converter.md  
    sed -i 's/# Module /# Module: /g' ./src/pages/docs/versions/master/${i}site/en/api/api/file_converter.md 
    sed -i 's/## \(.*\) Objects/## Class: \1/g' ./src/pages/docs/versions/master/${i}site/en/api/api/file_converter.md 
    echo -e "---\ntitle: \"Preprocessor\"\nmetaTitle: \"Preprocessor\"\nmetaDescription: \"\"\nslug: \"/docs/apiindexing\"\ndate: \"2020-09-03\"\nid: \"apiindexingmd\"\n---\n\n# Preprocessor\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/api/api/preprocessor.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/preprocessor.md
    sed -i 's/# Module /# Module: /g' ./src/pages/docs/versions/master/${i}site/en/api/api/preprocessor.md
    sed -i 's/## \(.*\) Objects/## Class: \1/g' ./src/pages/docs/versions/master/${i}site/en/api/api/preprocessor.md  
    echo -e "---\ntitle: \"Reader\"\nmetaTitle: \"Reader\"\nmetaDescription: \"\"\nslug: \"/docs/apireadermd\"\ndate: \"2020-09-03\"\nid: \"apireadermd\"\n---\n\n# Reader\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/api/api/reader.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/reader.md
    sed -i 's/# Module /# Module: /g' ./src/pages/docs/versions/master/${i}site/en/api/api/reader.md 
    sed -i 's/## \(.*\) Objects/## Class: \1/g' ./src/pages/docs/versions/master/${i}site/en/api/api/reader.md 
    echo -e "---\ntitle: \"Retriever\"\nmetaTitle: \"Retriever\"\nmetaDescription: \"\"\nslug: \"/docs/apiretrievermd\"\ndate: \"2020-09-03\"\nid: \"apiretrievermd\"\n---\n\n# Retriever\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/api/api/retriever.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/retriever.md
    sed -i 's/# Module /# Module: /g' ./src/pages/docs/versions/master/${i}site/en/api/api/retriever.md 
    sed -i 's/## \(.*\) Objects/## Class: \1/g' ./src/pages/docs/versions/master/${i}site/en/api/api/retriever.md 
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/api/api/generator.md" ]]; then
        echo -e "---\ntitle: \"Generator\"\nmetaTitle: \"Generator\"\nmetaDescription: \"\"\nslug: \"/docs/apigeneratormd\"\ndate: \"2020-09-03\"\nid: \"apigeneratormd\"\n---\n\n# Generator\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/api/api/generator.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/generator.md
        sed -i 's/# Module /# Module: /g' ./src/pages/docs/versions/master/${i}site/en/api/api/generator.md
        sed -i 's/## \(.*\) Objects/## Class: \1/g' ./src/pages/docs/versions/master/${i}site/en/api/api/generator.md
    fi
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/api/api/pipelines.md" ]]; then
        echo -e "---\ntitle: \"Pipelines\"\nmetaTitle: \"Pipelines\"\nmetaDescription: \"\"\nslug: \"/docs/apipipelinesmd\"\ndate: \"2020-09-03\"\nid: \"apipipelinesmd\"\n---\n\n# Pipelines\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/api/api/pipelines.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/pipelines.md
        sed -i 's/# Module /# Module: /g' ./src/pages/docs/versions/master/${i}site/en/api/api/pipelines.md
        sed -i 's/## \(.*\) Objects/## Class: \1/g' ./src/pages/docs/versions/master/${i}site/en/api/api/pipelines.md
    fi
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/api/api/translator.md" ]]; then
        echo -e "---\ntitle: \"Pipelines\"\nmetaTitle: \"Pipelines\"\nmetaDescription: \"\"\nslug: \"/docs/translatormd\"\ndate: \"2020-09-03\"\nid: \"translatormd\"\n---\n\n# Translator\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/api/api/translator.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/translator.md
        sed -i 's/# Module /# Module: /g' ./src/pages/docs/versions/master/${i}site/en/api/api/translator.md
        sed -i 's/## \(.*\) Objects/## Class: \1/g' ./src/pages/docs/versions/master/${i}site/en/api/api/translator.md
    fi
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/api/api/summarizer.md" ]]; then
        echo -e "---\ntitle: \"Pipelines\"\nmetaTitle: \"Pipelines\"\nmetaDescription: \"\"\nslug: \"/docs/summarizermd\"\ndate: \"2020-09-03\"\nid: \"summarizermd\"\n---\n\n# Summarizer\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/api/api/summarizer.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/summarizer.md
        sed -i 's/# Module /# Module: /g' ./src/pages/docs/versions/master/${i}site/en/api/api/summarizer.md
        sed -i 's/## \(.*\) Objects/## Class: \1/g' ./src/pages/docs/versions/master/${i}site/en/api/api/summarizer.md
    fi
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/api/api/crawler.md" ]]; then
        echo -e "---\ntitle: \"Pipelines\"\nmetaTitle: \"Pipelines\"\nmetaDescription: \"\"\nslug: \"/docs/crawlermd\"\ndate: \"2020-09-03\"\nid: \"crawlermd\"\n---\n\n# Pipelines\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/api/api/crawler.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/crawler.md
        sed -i 's/# Module /# Module: /g' ./src/pages/docs/versions/master/${i}site/en/api/api/crawler.md
        sed -i 's/## \(.*\) Objects/## Class: \1/g' ./src/pages/docs/versions/master/${i}site/en/api/api/crawler.md
    fi
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/api/api/evaluation.md" ]]; then
        echo -e "---\ntitle: \"Pipelines\"\nmetaTitle: \"Pipelines\"\nmetaDescription: \"\"\nslug: \"/docs/evaluationmd\"\ndate: \"2020-09-03\"\nid: \"evaluationmd\"\n---\n\n# Pipelines\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/api/api/evaluation.md)" > ./src/pages/docs/versions/master/${i}site/en/api/api/evaluation.md
        sed -i 's/# Module /# Module: /g' ./src/pages/docs/versions/master/${i}site/en/api/api/evaluation.md
        sed -i 's/## \(.*\) Objects/## Class: \1/g' ./src/pages/docs/versions/master/${i}site/en/api/api/evaluation.md
    fi
done
#!/bin/bash

# Master data
versions=("" "latest/" "v0.4.0/" "v0.5.0/")  

for i in "${versions[@]}"
do

    j=$i
    if [ "$i" = "latest/" ]; then
        j=''
    fi

    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/roadmap.md -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/roadmap.md 
    if [[ `wget -S --spider https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/database.md  2>&1 | grep 'HTTP/1.1 200 OK'` ]]; then 
        wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/database.md -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/database.md 
    fi
    if [[ `wget -S --spider https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/document_store.md  2>&1 | grep 'HTTP/1.1 200 OK'` ]]; then 
        wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/document_store.md -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/document_store.md 
    fi
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/domain_adaptation.md -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/domain_adaptation.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/intro.md -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/intro.md 
    if [[ `wget -S --spider https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/languages.md  2>&1 | grep 'HTTP/1.1 200 OK'` ]]; then 
        wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/languages.md -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/languages.md 
    fi
    if [[ `wget -S --spider https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/preprocessing.md  2>&1 | grep 'HTTP/1.1 200 OK'` ]]; then 
        wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/preprocessing.md -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/preprocessing.md 
    fi
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/reader.md -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/reader.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/retriever.md  -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/retriever.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/terms.md  -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/terms.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/tutorials.md  -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/tutorials.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/get_started.md  -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/get_started.md
    if [[ `wget -S --spider https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/annotation.md  2>&1 | grep 'HTTP/1.1 200 OK'` ]]; then 
        wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/usage/usage/annotation.md  -O ./src/pages/docs/versions/master/${i}site/en/usage/usage/annotation.md
    fi

    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/roadmap.md
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/roadmap.md 
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/usage/usage/database.md" ]]; then
        sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/database.md 
        sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/database.md 
    fi
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/usage/usage/document_store.md" ]]; then
        sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/document_store.md 
        sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/document_store.md 
    fi
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/domain_adaptation.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/domain_adaptation.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/intro.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/intro.md 
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/usage/usage/languages.md" ]]; then
        sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/languages.md 
        sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/languages.md 
    fi
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/usage/usage/preprocessing.md" ]]; then
        sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/preprocessing.md 
        sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/preprocessing.md 
    fi
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/reader.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/reader.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/retriever.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/retriever.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/terms.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/terms.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/tutorials.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/tutorials.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/get_started.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/get_started.md
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/usage/usage/annotation.md" ]]; then
        echo -e "---\ntitle: \"Annotation Tool\"\nmetaTitle: \"Annotation Tool\"\nmetaDescription: \"\"\nslug: \"/docs/annotation\"\ndate: \"2020-09-03\"\nid: \"annotationmd\"\n---\n\n$(cat ./src/pages/docs/versions/master/${i}site/en/usage/usage/annotation.md )" > ./src/pages/docs/versions/master/${i}site/en/usage/usage/annotation.md 
    fi
done
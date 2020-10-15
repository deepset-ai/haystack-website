#!/bin/bash

# Master data
versions=('', 'latest/', 'v0.4.0/')  

for i in "${versions[@]}"
do

    j=$i
    if [ "$i" = "latest/" ]; then
        j=''
    fi

    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${i}_src/usage/usage/roadmap.md -O ./src/pages/docs/versions/master/${j}site/en/usage/usage/roadmap.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${i}_src/usage/usage/database.md -O ./src/pages/docs/versions/master/${j}site/en/usage/usage/database.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${i}_src/usage/usage/domain_adaptation.md -O ./src/pages/docs/versions/master/${j}site/en/usage/usage/domain_adaptation.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${i}_src/usage/usage/intro.md -O ./src/pages/docs/versions/master/${j}site/en/usage/usage/intro.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${i}_src/usage/usage/reader.md -O ./src/pages/docs/versions/master/${j}site/en/usage/usage/reader.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${i}_src/usage/usage/retriever.md  -O ./src/pages/docs/versions/master/${j}site/en/usage/usage/retriever.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${i}_src/usage/usage/terms.md  -O ./src/pages/docs/versions/master/${j}site/en/usage/usage/terms.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${i}_src/usage/usage/tutorials.md  -O ./src/pages/docs/versions/master/${j}site/en/usage/usage/tutorials.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${i}_src/usage/usage/get_started.md  -O ./src/pages/docs/versions/master/${j}site/en/usage/usage/get_started.md

    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/roadmap.md
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/roadmap.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/database.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/database.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/domain_adaptation.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/domain_adaptation.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/intro.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/usage/usage/intro.md 
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
done
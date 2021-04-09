#!/bin/bash

# Used branch
echo "Haystack branch: $1"

# Used branch
echo "Haystack branch: $1"

# Master data
versionstxt=$(cat src/pages/docs/versions/master/versions.txt)
versions=("" $versionstxt)  

for i in "${versions[@]}"
do
    rm ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/*
done

if [ ! -d "./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/" ]; then
    mkdir -p ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials
fi

for i in "${versions[@]}"
do
    j=$i
    if [ "$i" = "latest/" ]; then
        j=''
    fi

    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/1.md -O ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/1.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/2.md -O ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/2.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/3.md -O ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/3.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/4.md -O ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/4.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/5.md -O ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/5.md 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/6.md -O ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/6.md
    if [[ `wget -S --spider https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/7.md  2>&1 | grep 'HTTP/1.1 200 OK'` ]]; then 
        wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/7.md -O ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/7.md
    fi
    if [[ `wget -S --spider https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/8.md  2>&1 | grep 'HTTP/1.1 200 OK'` ]]; then
        wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/8.md -O ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/8.md
    fi
    if [[ `wget -S --spider https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/9.md  2>&1 | grep 'HTTP/1.1 200 OK'` ]]; then
        wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/9.md -O ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/9.md
    fi
    if [[ `wget -S --spider https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/10.md  2>&1 | grep 'HTTP/1.1 200 OK'` ]]; then
        wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/tutorials/tutorials/10.md -O ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/10.md
    fi

    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/1.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/1.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/2.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/2.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/3.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/3.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/4.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/4.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/5.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/5.md 
    sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/6.md 
    sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/6.md
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/7.md" ]]; then
        sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/7.md 
        sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/7.md
    fi
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/8.md" ]]; then
        sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/8.md
        sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/8.md
    fi
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/9.md" ]]; then
        sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/9.md
        sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/9.md
    fi
    if [[ -f "./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/10.md" ]]; then
        sed -i 's/<!---/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/10.md
        sed -i 's/--->/---/' ./src/pages/docs/versions/master/${i}site/en/tutorials/tutorials/10.md
    fi
done
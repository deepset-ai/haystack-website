#!/bin/bash

# Used branch
echo "Haystack branch: $1"

# Master data
versionstxt=$(cat ./src/pages/docs/versions/master/versions.txt)
versions=($versionstxt)  

for i in "${versions[@]}"
do
    if [ -d "./src/pages/benchmarks/versions/${i}" ]; then
        rm ./src/pages/benchmarks/versions/${i}site/en/performance/*
        rm ./src/pages/benchmarks/versions/${i}site/en/map/*
        rm ./src/pages/benchmarks/versions/${i}site/en/speed/*
    fi
done

if [ ! -d "./src/pages/benchmarks/versions/${i}" ]; then
    mkdir -p ./src/pages/benchmarks/versions/${i}site/en/performance
    mkdir -p ./src/pages/benchmarks/versions/${i}site/en/map
    mkdir -p ./src/pages/benchmarks/versions/${i}site/en/speed
fi

for i in "${versions[@]}"
do
    j=$i
    if [ "$i" = "latest/" ]; then
        j=''
    fi

    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/benchmarks/reader_performance.json -O ./src/pages/benchmarks/versions/${i}site/en/performance/reader_performance.json 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/benchmarks/retriever_performance.json -O ./src/pages/benchmarks/versions/${i}site/en/performance/retriever_performance.json 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/benchmarks/retriever_map.json -O ./src/pages/benchmarks/versions/${i}site/en/map/retriever_map.json 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/${1}/docs/${j}_src/benchmarks/retriever_speed.json -O ./src/pages/benchmarks/versions/${i}site/en/speed/retriever_speed.json
done

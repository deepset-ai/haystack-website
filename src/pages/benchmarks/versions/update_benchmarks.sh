#!/bin/bash

# Master data
versions=("latest/" "v0.4.0/") 

for i in "${versions[@]}"
do
    j=$i
    if [ "$i" = "latest/" ]; then
        j=''
    fi

    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/benchmarks/reader_performance.json -O ./src/pages/benchmarks/versions/${i}site/en/performance/reader_performance.json 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/benchmarks/retriever_performance.json -O ./src/pages/benchmarks/versions/${i}site/en/performance/retriever_performance.json 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/benchmarks/retriever_map.json -O ./src/pages/benchmarks/versions/${i}site/en/map/retriever_map.json 
    wget https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${j}_src/benchmarks/retriever_speed.json -O ./src/pages/benchmarks/versions/${i}site/en/speed/retriever_speed.json
done

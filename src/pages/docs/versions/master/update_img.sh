#!/bin/bash

# Master data
versions=('', 'latest/', 'v0.4.0/') 

for i in "${versions[@]}"
do

    j=$i
    if [ "$i" = "latest/" ]; then
        j=''
    fi

    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/annotation_tool.png -O ./src/pages/docs/versions/master/${j}site/en/img/annotation_tool.png 
    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/code_snippet_usage.png -O ./src/pages/docs/versions/master/${j}site/en/img/code_snippet_usage.png 
    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/colab_gpu_runtime.jpg -O ./src/pages/docs/versions/master/${j}site/en/img/colab_gpu_runtime.jpg 
    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/haystack_logo_blue_banner.png -O ./src/pages/docs/versions/master/${j}site/en/img/haystack_logo_blue_banner.png 
    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/haystack_logo_blue_banner_social_media.png -O ./src/pages/docs/versions/master/${j}site/en/img/haystack_logo_blue_banner_social_media.png 
    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/logo.png -O ./src/pages/docs/versions/master/${j}site/en/img/logo.png 
    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/retriever_reader.png -O ./src/pages/docs/versions/master/${j}site/en/img/retriever_reader.png 
    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/search.png -O ./src/pages/docs/versions/master/${j}site/en/img/search.png 
    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/sketched_concepts_white.png -O ./src/pages/docs/versions/master/${j}site/en/img/sketched_concepts_white.png 
    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/zenhub_board.png -O ./src/pages/docs/versions/master/${j}site/en/img/zenhub_board.png 
    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/zenhub_issue.png -O ./src/pages/docs/versions/master/${j}site/en/img/zenhub_issue.png 
    wget https://github.com/deepset-ai/haystack/raw/roadmap/docs/${i}_src/img/zenhub_roadmap.png -O ./src/pages/docs/versions/master/${j}site/en/img/zenhub_roadmap.png
done




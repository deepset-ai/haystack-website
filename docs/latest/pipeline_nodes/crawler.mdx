
# Crawler

The Crawler scrapes the text from a website, creates a Haystack Document object out of it, and saves it to a JSON file. 
For example, you can use the Crawler if you want to add the contents of a website to your files to use them for search.

|||
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|__Position in a Pipeline__| At the very beginning of an indexing Pipeline |
|__Input__       | Files                                                                                                                                                                  |
|__Output__      | [Documents](/components/documents-answers-labels#document)                                                                                                             |
|__Classes__     | Crawler                                                                                                          |
|||

## Usage

To use a Crawler on its own, run:
```python
from haystack.nodes import Crawler

crawler = Crawler(output_dir="crawled_files") # This tells the Crawler where to store the crawled files
docs = crawler.crawl(
    urls=["https://haystack.deepset.ai/overview/get-started"], # This tells the Crawler which URLs to crawl
    filter_urls=["haystack"], # Here, you can pass regular expressions that the crawled URLs must comply with
    crawler_depth=1 # This tells the Crawler to follow only the links that it finds on the initial URLs
)
```

## Example Script

This script shows you how to use a Crawler in a pipeline.

```python
################################################################################
#                                                                              #
#             An Example of a Pipeline Using Crawler                           #
#                                                                              #
#  NOTE: You need a running Elasticsearch container for this to work.          #
#  If you don't have one, exchange ElasticsearchDocumentStore for another      #
#  document store, like SQLDocumentStore or InMemoryDocumentStore. Bear in     #
#  mind thoug that the code wasn't tested on them and you might encounter      #
#  with bugs.                                                                  #
#                                                                              #
################################################################################

from haystack.pipelines import Pipeline
from haystack.nodes import Crawler, PreProcessor, ElasticsearchRetriever, FARMReader
from haystack.document_stores import ElasticsearchDocumentStore


# Create the document store. You need it to:
#  1. Store the documents you crawled and preprocessed (with an indexing pipeline).
#  2. Extract the documents that contain the answer to your question (with a query pipeline).
document_store = ElasticsearchDocumentStore(host="localhost", username="", password="", index="document")


#
# Step 1: Get the data, clean it, and store it.
#

# NOTE: You need to run this code just once, every time you create a new Elasticsearch container. Comment it out afterwards.

# Let's create the indexing pipeline. It will contain:
#  1. A Crawler node that fetches text from a website.
#  2. A PreProcessor that makes the documents friendly to the Retriever.
#  3. The Document Store at the end, that receives the documents and stores them.
crawler = Crawler(
    urls=["https://haystack.deepset.ai"],   # Websites to crawl
    crawler_depth=1,    # How many links to follow
    output_dir="crawled_files",  # The directory to store the crawled files, not very important, we don't use the files in this example
)
preprocessor = PreProcessor(
    clean_empty_lines=True,
    clean_whitespace=True,
    clean_header_footer=False,
    split_by="word",
    split_length=500,
    split_respect_sentence_boundary=True,
)
indexing_pipeline = Pipeline()
indexing_pipeline.add_node(component=crawler, name="crawler", inputs=['File'])
indexing_pipeline.add_node(component=preprocessor, name="preprocessor", inputs=['crawler'])
indexing_pipeline.add_node(component=document_store, name="document_store", inputs=['preprocessor'])

indexing_pipeline.run(params={"crawler": {'return_documents': True}})


#
# Step 2: Use the data to answer questions.
#

# NOTE: You can run this code as many times as you like.

# Let's create a query pipeline. It will contain:
#  1. A Retriever that gets the relevant documents from the document store.
#  2. A Reader that locates the answers inside the documents.
retriever = ElasticsearchRetriever(document_store=document_store)
reader =  FARMReader(model_name_or_path="deepset/roberta-base-squad2-distilled")

query_pipeline = Pipeline()
query_pipeline.add_node(component=retriever, name="retriever", inputs=["Query"])
query_pipeline.add_node(component=reader, name="reader", inputs=["retriever"])

results = query_pipeline.run(query="What can I use Haystack for?")

print("\nQuestion: ", results["query"])
print("\nAnswers:")
for answer in results["answers"]:
    print("- ", answer.answer)
print("\n\n")
```

<div style={{ marginBottom: "3rem" }} />


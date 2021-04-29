---
title: "Graph Retriever"
metaTitle: "Graph Retriever"
metaDescription: ""
slug: "/docs/graph_retrievermd"
date: "2020-09-03"
id: "apigraphretrievermd"
---

# Graph Retriever

<a name="base"></a>
# Module: base

<a name="text_to_sparql"></a>
# Module: text\_to\_sparql

<a name="text_to_sparql.Text2SparqlRetriever"></a>
## Class: Text2SparqlRetriever

```python
class Text2SparqlRetriever(BaseGraphRetriever)
```

Graph retriever that uses a pre-trained Bart model to translate natural language questions given in text form to queries in SPARQL format.
The generated SPARQL query is executed on a knowledge graph.

<a name="text_to_sparql.Text2SparqlRetriever.format_result"></a>
#### format\_result

```python
 | format_result(result)
```

Generate formatted dictionary output with text answer and additional info

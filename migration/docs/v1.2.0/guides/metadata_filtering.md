# Metadata Filtering

Metadata can be attached to the documents which you index into your DocumentStore (see the input data format [here](/components/retriever)).
At query time, you can apply filters based on this metadata to limit the scope of your search and ensure your answers
come from a specific slice of your data.

For example, if you have a set of annual reports from various companies,
you may want to perform a search on just a specific year, or on a small selection of companies.
This can reduce the work load of the retriever and also ensure that you get more relevant results.

## Basic Filters

Filters are applied via the `filters` argument of the `Retriever` class.
When working with a Pipeline, the filter supplied to `Pipeline.run()`,
which will then route it on to the `Retriever` class
(see our the Arguments on the [Pipelines page](/components/pipelines) for an explanation).
Basic filtering is supported by the `ElasticsearchDocumentStore`, `OpenSearchDocumentStore` and `WeaviateDocumentStore`.


```python
pipeline.run(
    query="Why did the revenue increase?",
    params={
        "filters": {
            "years": ["2019"],
            "companies": ["BMW", "Mercedes"]
        }
    },
)
```

## Filtering Logic

Technically spoken, filters are defined as nested dictionaries.
The keys of the dictionaries can be a logical operator ("$and", "$or", "$not"),
a comparison operator ("$eq", "$in", "$gt", "$gte", "$lt", "$lte")
or a metadata field name.

Logical operator keys take a dictionary of metadata field names and/or logical operators as value.
Metadata field names take a dictionary of comparison operators as value.
Comparison operator keys take a single value or (in case of "$in") a list of values as value.

If no logical operator is provided, "$and" is used as default operation.
If no comparison operator is provided, "$eq" (or "$in" if the comparison value is a list) is used as default operation.

```python
filters = {
    "$and": {
        "type": {"$eq": "article"},
        "date": {"$gte": "2015-01-01", "$lt": "2021-01-01"},
        "rating": {"$gte": 3},
        "$or": {
            "genre": {"$in": ["economy", "politics"]},
            "publisher": {"$eq": "nytimes"}
        }
    }
}
# or simpler using default operators
filters = {
    "type": "article",
    "date": {"$gte": "2015-01-01", "$lt": "2021-01-01"},
    "rating": {"$gte": 3},
    "$or": {
        "genre": ["economy", "politics"],
        "publisher": "nytimes"
    }
}
```
<div className="max-w-xl bg-yellow-light-theme border-l-8 border-yellow-dark-theme px-6 pt-6 pb-4 my-4 rounded-md dark:bg-yellow-900">

**Logical Operators on the Same Level**

It is not possible to use logical operators twice on the same level since dictionary keys have to be unique.
For example, the following filter is not valid

```
{"$or":
    {"$and": {
         "Type": "News Paper",
         "Date": {"$lt": "2019-01-01"},
     "$and": {      # repeated key in dictionary
         "Type": "Blog post",
         "Date": {"$gte": "2019-01-01"}
    }
}
```

To get around this, we allow logical operators to take a list of dictionaries as values.
This is what the above filter would look like in this style.

```
{"$or": [
    {"$and": {
        "Type": "News Paper",
        "Date": {"$lt": "2019-01-01"}
        }
    },
    "$and": {
        "Type": "Blog post",
        "Date": {"$gte": "2019-01-01"}
        }
    }]
}
```

</div>

Filtering with logical operators is supported by the `ElasticsearchDocumentStore` and `OpenSearchDocumentStore`.
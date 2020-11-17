---
title: "Upload Documents"
metaTitle: "Upload Documents"
metaDescription: ""
slug: "/docs/upload_documents"
date: "2020-09-03"
id: "upload_documentsmd"
---

# Upload Documents

In Haystack Hub, the user can upload documents which he would like to search. If you click in the menu on the left **Documents** or on the dashboard **Go to Documents** in the **Getting Started** section, you will be redirected to the following page. This page will be empty if you enter it the first time. 

![image](../img/HaystackHub_documentsempty.png)

In order to start your search, you need to upload documents. You can start the workflow by clicking on **+ Upload files**. It will forward you to next view. You can drag and drop files here or open a new window to load them from you file system. Haystack Hub supports the **pdf** and **txt** formats.

![image](../img/HaystackHub_documentsstep1.png)

After uploading the files, you can review them and upload even more files by clicking **Add files**. Select **Next** to start with the configuration of your preprocessing.

![image](../img/HaystackHub_documentsstep2.png)

The preprocessing is separated into two parts **Splitting** and **Basic cleaning**. Please check the section [preprocessing](/docs_hub/upload_documentsmd#Preprocessing) for more details. Select **Upload** for uploading your documents.

![image](../img/HaystackHub_documentspreprocessing.png)

After you uploaded your documents and refreshed the page, you will see the uploaded documents. If you select one file, you will see a preview of the cleaned file on the right side. In order to delete files, you need to select them via the checkbox. A button **Delete X files** will appear. If you click the button, Haystack Hub will delete the selected files.

![image](../img/HaystackHub_documents.png)


## Preprocessing

The preprocessing is separated into two parts **Splitting** and **Basic cleaning**. 

**Splitting**

* **Split by** determines what unit the document is split by: **word**, **sentence** or **passage**. 
* **Split length** sets a maximum number of **word**, **sentence** or **passage** units per output document.
* **Split respect sentence boundary** ensures that document boundaries do not fall in the middle of sentences.

The Splitting of documents has impact on the Haystack Hub performance. Please check [here](/docs/latest/preprocessingmd#Impact-of-Document-Splitting) for more details.

**Basic cleaning**

* **Remove talbes** will remove tables from the documents.
* **Remove haeder footer** will remove any long header or footer texts that are repeated on each page.
* **Remove whitespaces** will remove any whitespace at the beginning or end of each line in the text.
* **Remove empty lines** will normalize 3 or more consecutive empty lines to be just a two empty lines.

On the right side of the preprocessing view you will find a preview in order to check the impact of your changes. You can change between your uploaded file via the dropdown above the preview.

![image](../img/HaystackHub_documentspreprocessing.png)

## Warnings

You can configure one or multiple languages for your workspace ([more details](/docs_hub/conf_workspacemd#Workspace-Languages)). Haystack Hub will check for each file, if the language match to your configuration. For all files, which do not have these languages, Haystack Hub will show a warning. 

![image](../img/HaystackHub_documentswarning.png)


# How to upload the docs

You can use the script in this folder to upload the documents to deepset-cloud.

You need to specify the API Token, and the workspace to upload to as environment variables: 
  - DC_API_TOKEN
  - DC_WORKSPACE

To run the script you need the following dependencies:
  - tqdm
  - httpx

  To upload the docs

  ```
  DC_API_TOKEN=your-api-token DC_WORKSPACE=desired-workspace python upload_files.py
  ```

  This will first prepare and upload all of the documentation contained within this repository, and then delete the old files.

  Next steps: 
    - Create a github action to run this on merge to master
    - pretty progress bar when deleting files

NOTE: This (README) file will not be uploaded as it has the extension `.md`, only files with the extension `.mdx` will be uploaded.
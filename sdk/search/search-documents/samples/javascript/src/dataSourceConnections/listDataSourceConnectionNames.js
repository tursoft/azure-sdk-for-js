// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const {
  SearchIndexerClient,
  AzureKeyCredential
} = require("@azure/search-documents");

require("dotenv").config();

const endpoint = process.env.SEARCH_API_ENDPOINT || "";
const apiKey = process.env.SEARCH_API_KEY || "";

async function main() {
  console.log(`Running List Datasource Connection Names Sample....`);
  if (!endpoint || !apiKey) {
    console.log("Make sure to set valid values for endpoint and apiKey with proper authorization.");
    return;
  }
  const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
  const listOfDataSourceConnectionNames = await client.listDataSourceConnectionsNames();

  console.log(`Names of Data Source Connections`);
  console.log(`*******************************`);
  for(const ds of listOfDataSourceConnectionNames) {
    console.log(ds);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

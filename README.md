# ChartFactor Node

ChartFactor Node (CFN) is a thin server wrapper to enable the server-side execution of ChartFactor Toolkit (CFT) data providers.  This allows you to apply custom logic such as filters on the server side before executing the actual queries on the data engine.  This is useful in multi-tenant scenarios where data from multiple accounts reside on the same table and you need to ensure end users only see data related to their account.

It currently supports the Elasticsearch, BigQuery, and Redshift data providers.

## Getting ready

Make sure you are running Node v16.5.0 or later.

To set up dependencies, please run: `npm install`

## Executing ChartFactor Node

To run ChartFactor Node execute: `npm start`.  The server will be listening on port 3123.

## Debugging ChartFactor Node

To debug the `./src/routes.js` file, create a new `launch.json` in `.vscode\` path with the following configuration.

```js
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Node: Nodemon",
            "runtimeExecutable": "npm",
            "runtimeArgs": ["start"],
            "outputCapture": "std",
        }
    ]
}
```

After that, run this `npm run debug` command in a terminal, and finally, go to `Run and Debug` tab in VSCode, select `Node: Nodemon` in the combobox and press the play button.

## Setting up your providers

To set up your data providers, go to the `etc` folder in this project and open the `providers.json` file. You will find sample provider definitions for elasticsearch, redshift, and google-bigquery.

Note that to set up your google-bigquery provider, you need to provide the following:

* `projectId` - a valid project ID
* `file`  - a valid private key

You will find this information using the Google Cloud Platform console for your project.

## Adding static filters

You may want to apply filters to users requests so that they can only see a portion of the available data. In the `etc/staticFilters.json` file you will find an example of a static filter applied to all your requests. Specify the provider name and source with the "::" separator and then the desired filter. The `routes.js` script will inject this filter to users requests. You can add as many filters as needed.

## Adding metadata constraints

You may want to hide table columns from users. This project provides an example of how to do that. In the `etc/metadataConstraints.json` file you will find an example of a metadata constraint applied to your requests. Specify the provider name and source with the "::" separator and then column name to remove. The `routes.js` script will remove this column from the available columns of a table.
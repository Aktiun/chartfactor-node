# ChartFactor Node

This project is a reference implementation of a ChartFactor Node server running ChartFactor data providers on the server-side to power lightweight visual analytics. Refer to the [ChartFactor Node documentation](https://chartfactor.com/doc/latest/data_providers/cfnode/) to connect your web data applications to a ChartFactor Node server. 

Running data providers on the server-side allows you to apply custom logic such as filters before executing the actual queries on the data engine. It currently supports the Elasticsearch, BigQuery, and Redshift data providers.

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

## Chart factor logging level
You can set the logging level of your providers or Aktive objects with the environment variables `CF_LOG_LEVEL_PROVIDERS` and `CF_LOG_LEVEL_AKTIVE`. The available levels are `error`, `warn`, `info`, `debug`, and `trace`. For example, to set the logging level to debug, create a `.env` file in the root of the project with the following content:

```
# ChartFactor providers logging level
CF_LOG_LEVEL_PROVIDERS=debug

# ChartFactor Aktive logging level
CF_LOG_LEVEL_AKTIVE=debug
```

## ChartFactor logging outputs
You can set the logging outputs to a specific file using the environment variable `CF_LOG_PATH`. For example, to set the logging output to a file named `cf.log`, create a `.env` file in the root of the project with the following content:

```
# ChartFactor logging output file
CF_LOG_PATH=/some/path/to/cf.log
```

# ChartFactor Node

ChartFactor Node (CFN) is a thin server wrapper to enable the server-side execution of ChartFactor Toolkit (CFT) data providers.  This allows you to apply custom logic such as filters on the server side before executing the actual queries on the data engine.  This is useful in multi-tenant scenarios where data from multiple accounts reside on the same table and you need to ensure end users only see data related to their account.

It currently supports the Elasticsearch, BigQuery, and Redshift data providers.

## Getting ready

To set up dependencies please run: `npm install`

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
# csv-to-and-from-array

All in one npm package that allows a developer to convert any csv file to or from an array of objects.

Install using yarn or npm:

    yarn add csv-to-and-from-array
    npm install csv-to-and-from-array

```javascript
const { csvFileToArray, arrayToCsvFile } = require("csv-to-and-from-array");

// An asynchronous function that takes one object parameter that contains the file path and also a callback function that is not required.
await csvFileToArray({
  filePath: "./data.csv",
  callback: () => console.log("File conversion completed"),
});

// A synchronous function that takes one object parameter:
// data: array of objects
// filePath: a string, the path of the output file after conversion, by default it is 'output.csv'
// callback: function that is called once the conversion is completed, optional
arrayToCsvFile({
  data: [{ id: 1, name: "John Smith" }],
  filePath: "../folder/newOutput.csv",
  callback: () => console.log("Array is now a csv file"),
});
```

## License

MIT

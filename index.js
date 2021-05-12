const fs = require("fs");
const csv = require("csv-parser");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const csvFileToArray = async ({ filePath, callback = () => {} }) => {
  const csvArray = [];

  await new Promise((res) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        csvArray.push(row);
      })
      .on("end", () => {
        callback();
        res();
      });
  });

  return csvArray;
};

const arrayToCsvFile = ({ data, fileName = "output", callback = () => {} }) => {
  if (data.length === 0) {
    console.log("Your data array is empty");
    return data;
  }

  const header = Object.keys(data[0]).reduce((acc, val) => {
    return [...acc, { id: val, title: val }];
  }, []);

  const csvWriter = createCsvWriter({
    path: `${fileName}.csv`,
    header,
  });

  csvWriter.writeRecords(data).then(() => callback());
};

module.exports = { csvFileToArray, arrayToCsvFile };

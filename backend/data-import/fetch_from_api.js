const { writeFile, readFile } = require("fs");
const fetch = require("node-fetch");
const { argv } = require("process");

if (process.argv.length < 3){
  console.log("❌ Please provide the number of records to fetch!")
  process.exit()
}

const NUM_RECORDS = Number.parseInt(process.argv[2]);
const API_URL = `https://poetrydb.org/random/${NUM_RECORDS}`;
const PATH_TO_FILE = __dirname + "/data.json";

fetch(API_URL).then((res) => res.json()).then((data) => {
  writeFile(PATH_TO_FILE, JSON.stringify(data), (err, data) => {
    if (err){
      console.log(err);
    }
    else{
      console.log(`✅ Fetched ${NUM_RECORDS} poetry records.`)
    }
  })
})


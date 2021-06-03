const admin = require("firebase-admin");
const { readFile } = require("fs").promises;

const serviceAccount = require("../../service.key.json");
const PATH_TO_FILE = __dirname + "/data.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();

readFile(PATH_TO_FILE).then((data) => {
  const jsonData = JSON.parse(data)
  for (let poem of jsonData){
    firestore.collection("poems").add(poem)
  }
})
const mongoose = require('mongoose')// MONGOOSE KO USE KRNE KA TARIKKA HAI YEH 


const mURI =  "mongodb://localhost:27017/"// CREATED DATABSE NE LINK DIYA VO HUMNE IDHAR LAGAYA 

const connection = () =>{// EK FUNCTION HAI JO MONGOOSE K MADAT SE MONGODB K URL KO CONNECT KREGA 
    mongoose.connect(mURI)  
}
module.exports = connection;//CONNECTION FUNCTION KO EXPORT KIYA










// Connection URL and database name
// const url = 'mongodb://localhost:27017';
// const dbName = 'mydb';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Read the .jpeg file

// // Connect to the MongoDB server
// client.connect((err) => {
  

//   // Get the database
//   const db = client.db(dbName);

//   // Insert the file into the "files" collection
//   db.collection('files'), (err, result) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     console.log(`Inserted ${result.insertedCount} document into the "files" collection.`);
//     console.log(`Inserted document id: ${result.insertedId}`);

//     // Close the connection
//     client.close();
//   });
// });

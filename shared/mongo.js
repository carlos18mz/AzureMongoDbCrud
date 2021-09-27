/**
 * Arquivo: mongo.js
 * Data: 01/25/2021
 * Descrição: file responsible for handling the database connection locally
 * Author: Glaucia Lemos – (Twitter: @glaucia_lemos86)
 */

 const { MongoClient } = require("mongodb");

 const config = {
   url: "mongodb://nh12:hDiibm2LCabteSleqHW9ahpkYrdGFy5yCP67y1vefzOuh7rrLXPTSTIKevz0eCrb7LWsRg1XjuDv3EARFi8Ugw==@nh12.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@nh12@",
   dbName: "NotificationCenter"
 };
 
 async function createConnection() {
   const connection = await MongoClient.connect(config.url, {
     useNewUrlParser: true
   });
   const db = connection.db(config.dbName);
   return {
     connection,
     db
   };
 }
 
 module.exports = createConnection;
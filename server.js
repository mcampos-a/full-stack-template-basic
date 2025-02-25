const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


let db,
    dbConnecitonString = process.env.DB_STRING,
    dbName = 'Template-Demo',
    collection 

MongoClient.connect(dbConnecitonString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('template-collection')
    })
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


let db,
    dbConnecitonString = process.env.DB_STRING,
    dbName = 'Template-Demo',
    collection 
//this connects us to our database
MongoClient.connect(dbConnecitonString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('template-collection')
    })
//this set up a port to listen for the server
//PORT = 8000
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
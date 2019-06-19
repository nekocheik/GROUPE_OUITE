require('dotenv').config();

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


// Get Facts
router.post('/authentification/:mail', async (req, res)=>{
  const users = await getUser();
  console.log( await users.find({}).toArray()  )
});


async function getUser() { 
  const client = await mongodb.MongoClient.connect
  (process.env.MONGO_URL, {
    useNewUrlParser: true
  });
  return client.db('vue_express').collection('user')
}


MongoClient.connect( "mongodb://localhost/tutoriel" , function(error, db) {
    if (error) return funcCallback(error);

    console.log("Connecté à la base de données 'tutoriel'");
});

module.exports = router;
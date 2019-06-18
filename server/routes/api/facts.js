require('dotenv').config();

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Facts
router.get('/', async (req, res)=>{
  const posts = await loadFactsCollection();
  res.send(await posts.find({}).toArray());
});


// Add Facts



// Delete Facts



async function loadFactsCollection() { 
  const client = await mongodb.MongoClient.connect
  (process.env.MONGO_URL, {
    useNewUrlParser: true
  });
  return client.db('vue_express').collection('facts')
}



module.exports = router;
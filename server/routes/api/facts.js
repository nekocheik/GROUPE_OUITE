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
router.post('/', async (req, res)=>{
  const facts = await loadFactsCollection();
  await facts.insertOne({
    text : req.body.text,
    createdAt : new Date()
  });
  res.status(201).send();
})

// Delete Facts

router.delete('/:id', async (req, res)=>{
  const facts = await loadFactsCollection();
  await facts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  res.status(200).send();
})




async function loadFactsCollection() { 
  const client = await mongodb.MongoClient.connect
  (process.env.MONGO_URL, {
    useNewUrlParser: true
  });
  return client.db('vue_express').collection('facts')
}



module.exports = router;
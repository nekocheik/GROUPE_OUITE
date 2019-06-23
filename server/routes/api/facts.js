//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// ---dépendense---  /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

require('dotenv').config();

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// --- call api url / routing ---  ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////// --- functions ---  ///////////////////////////////////////////////
async function loadFactsCollection() { 
  const client = await mongodb.MongoClient.connect(process.env.MONGO_URL, {useNewUrlParser: true});
  return client.db('vue_express').collection('facts')
}

////////////////////////////////////////////////// --- call api ---  ///////////////////////////////////////////////

// Get Facts

router.get('/', async (req, res)=>{
  const posts = await loadFactsCollection();
  res.send(await posts.find({}).toArray());
  // console.log(await posts.find({}).toArray());
});

// Add Facts
// router.post('/', async (req, res, name)=>{
//   const facts = await loadFactsCollection();
//   await facts.insertOne({
//     name : req.body.name,
//   });
//   res.status(201).send();
// })
router.post('/:name/:child', async (req, res)=>{ 
  console.log('test');
  console.log(req.params.name);
  const facts = await loadFactsCollection();
  const childIndex = req.params.child;
  console.log(typeof(childIndex));
  

  switch (childIndex) {
    case '1' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.one" : {
        "id" : 1,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
    case '2' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.two" : {
        "id" : 2,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
    case '3' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.three" : {
        "id" : 3,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
    case '4' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.four" : {
        "id" : 4,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
    case '5' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.five" : {
        "id" : 5,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
    case '6' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.six" : {
        "id" : 6,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
    case '7' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.seven" : {
        "id" : 7,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
    case '8' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.height" : {
        "id" : 8,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
    case '9' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.nine" : {
        "id" : 9,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
    case '10' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.ten" : {
        "id" : 10,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
    case '11' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.eleven" : {
        "id" : 11,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
    case '12' : 
      await facts.updateOne({"name" : req.params.name}, {$set:{ "childComponents.twelve" : {
        "id" : 12,
        "type" : "Video",
        "content" : "Ceci est le content de Video testooooo"
          }
        }
      });
      break;
  }

  






  res.status(201).send();
})

// Delete Facts

router.delete('/:id', async (req, res)=>{
  const facts = await loadFactsCollection();
  await facts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  res.status(200).send();
})



module.exports = router;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
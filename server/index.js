require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoConnect = require('./services/db.service');

const app = express();

//MiddleWare
app.use(bodyParser.json());
app.use(cors());

const facts = require('./routes/api/facts');

app.use('/api/facts', facts);

const port = process.env.PORT;

// app.listen(port, ()=>{
//   console.log(`Server is listening on port ${port}`);
// }); 




/* 
Lancer le serveur
*/
mongoConnect()
.then( db => {
    app.listen( port, () => console.log({ server: port, db: 'mongodb://127.0.0.1:27017/node-network' }) )
})
.catch( dbError => {
    app.listen( port, () => console.log({ server: port, db: dbError }) )
})
//
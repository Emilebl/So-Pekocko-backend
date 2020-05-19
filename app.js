const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://emilebl:lourd_666@cluster0-3zvt3.gcp.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
});


module.exports = app;
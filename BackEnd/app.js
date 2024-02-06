const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/eventRoute');
const collocRoutes = require('./routes/collocRoute');
const formationRoutes = require('./routes/formation')


const app = express();


mongoose.connect('mongodb+srv://anasaouina:anasaouina@cluster0.klsedgj.mongodb.net/pfe_lprt?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



// erreur CROS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use('/api/event',eventRoutes);
app.use('/api/colloc',collocRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/formation', formationRoutes);







module.exports = app;
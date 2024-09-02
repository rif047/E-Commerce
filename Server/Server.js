require('dotenv').config();
require('./Config/Database');

let Cors = require('cors');
let Express = require('express');
let App = Express();
let Routes = require('./Routes')


App.use(Cors());

App.use(Express.static('Assets'));




// For handle form data
App.use(Express.json());
App.use(Express.urlencoded({ extended: true }));







App.get('/', (req, res) => { res.send('Server Running Successfully...') })


App.use('/api', Routes)


App.listen(9000, () => {
    console.log(`Server is Running at http://localhost:9000`);
})
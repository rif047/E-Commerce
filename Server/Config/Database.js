let Mongoose = require('mongoose');

Mongoose.set('strictQuery', true);


Mongoose.connect(process.env.DB_URL)
    .then(() => { console.log('Database Connected Successfully'); })
    .catch((err) => { console.log(err); })
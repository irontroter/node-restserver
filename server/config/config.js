//=====================
//Puerto
//=====================

process.env.PORT = process.env.PORT || 3000;

//=====================
//Entorn Heroku/Local
//=====================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//=====================
//Base de dades
//=====================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb://cafe-user:1a2b3c@ds247270.mlab.com:47270/cafe-curs_node'
}
process.env.URLDB = urlDB;
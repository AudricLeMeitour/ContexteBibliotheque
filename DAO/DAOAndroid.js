const {Client} = require('pg');
const Livre = require('../model/Livre');

class DAOAndroid{
    constructor(){
        this._client = new Client({
            connectionString: 'postgres://lemeitour:lemeitour@192.168.222.86:5432/biblio'
            // connectionString: process.ENV.DATABASE_URL
        });
        this._client.connect(function (err) {
            if(err) return done(err);
        })
    }
    getAllLivres(displaycb){

        const query = {
            name: 'fetch-all-livre',
            text: 'SELECT * FROM livre',
        };

        this._client.query(query, function(err, result){
            let lesLivres = [];
            if (err) {
                console.log(err.stack);
            } else {
                let i = 0;
                result.rows.forEach(function(row) {
                    let unLivre = new Livre(result.rows[i]['idLivre'], result.rows[i]['titre'],result.rows[i]['resume'], result.rows[i]['isbn']);
                    lesLivres.push(unLivre);
                    i++;
                });

                displaycb(lesLivres);

            }

        });

    };
    getLivreAllLivreTitre(cb){
        const query={
            name:'fetch-documents-all-documents-titre',
            text:'select titre from documents'
        }
        this._client.query(query, function(err, result){
            let lesLivres = [];
            if (err) {
                console.log(err.stack);
            } else {
                let i = 0;
                result.rows.forEach(function(row) {
                    let unLivre = new Livre(result.rows[i]['idLivre'], result.rows[i]['titre']);
                    lesLivres.push(unLivre);
                    i++;
                });

                cb(lesLivres);

            }

        });
    }
}

module.exports = DAOAndroid;
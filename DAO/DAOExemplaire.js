const { Client } = require('pg');
const Exemplaire = require('../model/Exemplaire');

class DAOExemplaire{
    constructor(){
        this._client = new Client({
            connectionString : 'postgres://lemeitour:lemeitour@192.168.222.86:5432/biblio'
        });

        this._client.connect(function (err){
            if (err) return done(err);
        });
    }
    getExemplaireById(unId, cb){

        const_query = {
            name: 'fetch-all-exemplaire',
            text: 'select * from exemplaire where livre = $1',
            value: [unId]
        };

        this._client.query(query, function (err, result) {
            let lesExemplaires = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let unExemplaire;
                    console.log(row['numero']);
                    unExemplaire = new Exemplaire(lesExemplaires.length, row['numero'], row['livre'], row['statut'], row['dateretour'], row['lecteur']);
                    lesExemplaires.push(unExemplaire);
                });
                console.log(lesExemplaires.length);
                console.log(lesExemplaires[0].numero);
                cb(lesExemplaires);
            }
        });
    };



}
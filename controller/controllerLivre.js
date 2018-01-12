const DAOLivre = require('../DAO/DAOLivre');
const DAOLivres = new DAOLivre();
//const DAOExemplaire = require('../DAO/DAOExemplaire')
//const DAOExemplaires= new DAOExemplaire();
const pg = require('pg');

    //Montre une liste de tous les livres
    exports.livre_list = function (req, res, next) {
        DAOLivres.getTousLesLivres(function(lesLivres){
            res.render('listeLivres', {listeLivre : lesLivres});
        });
    }
    //Detail d'un livre
    exports.livre_detail = function (req,res,next) {
        DAOLivres.getLeLivre(req.params.id,
            function (LeLivre) {
                console.log(LeLivre);
                res.render("livre", {unLivre : LeLivre});
        });
    }

    //Montre une liste de tous les exemplaires d'un livre
    exports.livre_list_exemplaire = function(req, res, next) {
        DAOExemplaire.getExemplaireById(function (lesExmeplaires) {
            res.render('listeExemplaires', {listeExemplaire: lesExmeplaires});
        })

    }

/*   exports.livre_detail_exemplaire = function (req, res, next) {
       res.render('NOT IMPLEMENTED');
   }

   exports.livre_ajout = function (req, res) {
       res.send('NOT IMPLEMENTED');
   }

   exports.livre_ajout_exemplaire = function(req, res) {
       res.send('NOT IMPLEMENTED');
   }*/
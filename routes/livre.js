var express = require('express');
var router = express.Router();

    let controllerLivre = require('../controller/controllerLivre');

    //GET liste de tous les livres
        router.get('/', controllerLivre.livre_list);

    //GET detail livre
        router.get('/:id', controllerLivre.livre_detail);

   /* //GET liste exemplaires d'un livre
        router.get('/:id/exemplaire', controllerLivre.livre_list_exemplaire);

    //GET detail d'un exemplaire
        router.get('/:id/exemplaire/:id2', controllerLivre.livre_detail_exemplaire);

    //POST ajout d'un livre
        router.post('/', controllerLivre.livre_ajout);

    //POST ajout d'un exemplaire de livre
        router.post('/:id/exemplaire', controllerLivre.livre_ajout_exemplaire);
*/
module.exports = router;
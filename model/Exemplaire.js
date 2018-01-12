class Exemplaire{


    constructor(unNumero, unStatut, uneDateRetour){
        this.numero = unNumero;
        this.statut = unStatut;
        this.dateRetour = uneDateRetour;
        this._unNumero = unNumero;
        this._unStatut = unStatut;
        this._uneDateRetour = uneDateRetour;
    }

    get unNumero() {
        return this._unNumero;
    }

    set unNumero(value) {
        this._unNumero = value;
    }

    get unStatut() {
        return this._unStatut;
    }

    set unStatut(value) {
        this._unStatut = value;
    }

    get uneDateRetour() {
        return this._uneDateRetour;
    }

    set uneDateRetour(value) {
        this._uneDateRetour = value;
    }
}
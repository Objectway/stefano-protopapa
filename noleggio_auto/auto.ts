export class auto{
    targa: string
    modello: string
    colore: string

    constructor (targa: string, modello: string, colore: string){
        this.targa = targa
        this.modello = modello
        this.colore = colore
    }
}


export class AutoNoleggiata extends auto {
    noleggiata: boolean = false;

    constructor (targa: string, modello: string, colore: string, noleggiata: boolean){
        this.targa = targa
        this.modello = modello
        this.colore = colore
        this.noleggiata = noleggiata
    }
}

/*
auto: any
this.auto = {
    "Auto1":{
        "targa": "DC1234DE",
        "modello": "Audi A4",
        "colore": "blu",
        "costo": "1000"
    },
    "Auto2":{
        "targa": "ED4325DE",
        "modello": "Audi A4",
        "colore": "blu",
        "costo": "1000"
    },
    "Auto3":{
        "targa": "PO4325GH",
        "modello": "Audi A4",
        "colore": "bianca",
        "costo": "1000"
    },
    "Auto3":{
        "targa": "TY4325AS",
        "modello": "Audi A3",
        "colore": "blu",
        "costo": "900"
    },
    "Auto4":{
        "targa": "CV4325NM",
        "modello": "Audi A3",
        "colore": "grigia",
        "costo": "900"
    }
}
*/
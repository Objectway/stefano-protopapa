import { auto, AutoNoleggiata } from "./auto";


export class autonoleggio{
    parcoMacchine: Array <AutoNoleggiata>;

    constructor(){
        let macchina1 = new AutoNoleggiata(targa:"1", modello: "audi", colore: "blu", noleggiata: false);
        let macchina2 = new AutoNoleggiata(targa:"2", modello: "audi", colore: "blu", noleggiata: false);
        let macchina3 = new AutoNoleggiata(targa:"3", modello: "audi", colore: "blu", noleggiata: false);
        let macchina4 = new AutoNoleggiata(targa:"4", modello: "audi", colore: "blu", noleggiata: false);
        this.parcoMacchine = [];
        this.parcoMacchine.push(macchina1)
        this.parcoMacchine.push(macchina2)
        this.parcoMacchine.push(macchina3)
        this.parcoMacchine.push(macchina4)

    }

    public getRandoAuto(): AutoNoleggiata{
        let autoNol : AutoNoleggiata;

        this.parcoMacchine.forEach( (auto) =>{
            if(Math.round(Math.random()) && !!auto.noleggiata){
                autoNol = auto; 
            }
        });
        if(!autoNol){
            autoNol = new AutoNoleggiata(targa:"1", modello: "audi", colore: "blu", noleggiata: false);
        }
        return autoNol;
    }

    public getListOfAviableAuto(): void{
        this.parcoMacchine.forEach( (auto) => {
            console.log(auto);
        })
    }
}

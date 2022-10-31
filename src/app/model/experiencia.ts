export class Experiencia {
    id? : number;
    nombreE : string;
    empresaE : string;
    descripcionE : string;
    inicioE : string;
    finE : string;
    logoE : string;
    
    constructor(nombreE: string, empresaE : string, descripcionE: string, inicioE: string, finE : string, logoE: string){
        this.nombreE = nombreE;
        this.empresaE = empresaE;
        this.descripcionE = descripcionE;
        this.inicioE = inicioE;
        this.finE = finE;
        this.logoE = logoE;
    }

}

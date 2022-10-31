export class Education {
    id?: number;
    nombreE: string;
    institucionE: string;
    descripcionE: string;
    inicioE : string;
    finE : string;
    logoE : string;

    constructor(nombreE: string, institucionE: string, descripcionE: string, inicioE: string, finE : string, logoE: string){
        this.nombreE = nombreE;
        this.institucionE = institucionE;
        this.descripcionE = descripcionE;
        this.inicioE = inicioE;
        this.finE = finE;
        this.logoE = logoE;
    }
}
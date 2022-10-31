export class Project {
    id? : number;
    nombreP : string;
    descripcionP : string;
    inicioP : string;
    finP : string;
    linkP : string;

    
    constructor(nombreP: string, descripcionP: string, inicioP: string, finP: string, linkP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.inicioP = inicioP;
        this.finP = finP;
        this.linkP = linkP;
    }

}

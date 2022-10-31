export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    descripcion: string;
    img: String;
    banner: String;

    constructor(nombre: String, apellido: String, titulo:string, descripcion:string, img: String, persona: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
    }
}
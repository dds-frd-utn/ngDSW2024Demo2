export class Curso {
    constructor() {
        this.titulo = '';
        this.descripcion = '';
        this.nombreTitular = '';
        this.nombreAula = '';
        this.nombreProfesor = '';
        this.fechaInicio = new Date();
        this.cursoPrivado = false;
        this.horasSemanales = 0;
        this.costoInicial= 0.0;
    }
    titulo: string;
    descripcion: string;
    nombreTitular: string;
    nombreAula: string;
    nombreProfesor: String;
    fechaInicio: Date;
    cursoPrivado: boolean;
    horasSemanales: Number;
    costoInicial: Number;
}

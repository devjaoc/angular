export class Estudiante {
    _nombre!: string;
    _edad!: number;
    constructor(nombre: string, edad: number) {
        this._edad = edad;
        this._nombre = nombre;
    }
    getNombre() {
        return this._nombre;
    }
    getEdad() {
        return this._nombre;
    }
}
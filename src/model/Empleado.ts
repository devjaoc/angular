export class Empleado {
    EmpleadoID!: number;
    Nombre!: string;
    Apellido!: string;
    Posicion!: string;
    FechaContratacion!: Date;

    constructor(EmpleadoID: number, Nombre: string, Apellido: string, Posicion: string, FechaContratacion: Date) {
        this.EmpleadoID = EmpleadoID;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Posicion = Posicion;
        this.FechaContratacion = FechaContratacion;
    }
    static mapParseListJson(json:[]):Array<Empleado>{
        return json.map(
            (element)=>{
                return element as Empleado;
            }
        );
    }
} 
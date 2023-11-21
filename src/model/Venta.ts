export class Venta {
    VentaID!: number;
    Fecha!: Date;
    Total!: number;

    constructor(VentaID: number, Fecha: Date, Total: number) {
        this.VentaID = VentaID;
        this.Fecha = Fecha;
        this.Total = Total;
    }
    static mapParseListJson(json:[]):Array<Venta>{
        return json.map(
            (element)=>{
                return element as Venta;
            }
        );
    }
} 
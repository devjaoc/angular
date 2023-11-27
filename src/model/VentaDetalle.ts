export class VentaDetalle {
    DetalleVentaID!: number;
    Fecha!: Date;
    Descripcion!: string;
    Cantidad!: number;
    Precio!: number;
    EmpleadoID!: number;
    ProductoID!: number;    
    Producto!: string; // Agregado para almacenar la imagen del producto
    imagen!: string;

    constructor(
        DetalleVentaID: number, 
        Fecha: Date,
        Descripcion: string,
        Cantidad: number,
        Precio: number,
        EmpleadoID: number,
        ProductoID: number, 
        imagen: string

        ) {
        this.DetalleVentaID = DetalleVentaID;
        this.Fecha = Fecha;
        this.Descripcion = Descripcion;
        this.Cantidad = Cantidad;
        this.Precio = Precio;
        this.EmpleadoID = EmpleadoID;
        this.ProductoID = ProductoID;
        this.imagen = imagen;
    }
    static mapParseListJson(json:[]):Array<VentaDetalle>{
        return json.map(
            (element)=>{
                return element as VentaDetalle;
            }
        );
    }
} 
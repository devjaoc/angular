export class Producto {
    ProductoID!: number;
    Nombre!: string;
    Descripcion!: string;
    Precio!: number;
    Stock!: number;
    imagen!: string;

    constructor(ProductoID: number, Nombre: string, Descripcion: string, Precio: number, Stock: number, imagen: string) {
        this.ProductoID = ProductoID;
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
        this.Precio = Precio;
        this.Stock = Stock;
        this.imagen = imagen;
    }
    static mapParseListJson(json:[]):Array<Producto>{
        return json.map(
            (element)=>{
                return element as Producto;
            }
        );
    }
}
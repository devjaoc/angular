export class Solicitud {
    id!: number;
    titulo_corto!: string;
    descripcion!: string;
    estado_solicitud_id!: number;
    constructor(id: number, titulo_corto: string, descripcion: string, estado_solicitud_id: number) {
        this.id = id;
        this.titulo_corto = titulo_corto;
        this.descripcion = descripcion;
        this.estado_solicitud_id = estado_solicitud_id;
    }
    static mapParseListJson(json:[]):Array<Solicitud>{
        return json.map(
            (element)=>{
                return element as Solicitud;
            }
        );
    }
} 
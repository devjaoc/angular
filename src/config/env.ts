
export class ItemMenu {
    public id!: number;
    public name!: string;
    public href!: string;
    constructor(id: number, name: string, href: string) {
        this.id = id;
        this.name = name;
        this.href = href;
    }
}
export namespace env {
    export const menu: Array<ItemMenu> = [
        new ItemMenu(1, 'Inicio', '/'),
        new ItemMenu(2, 'Lista Solicitudes', 'lista-solicitudes'),
        new ItemMenu(3, 'Crear Solicitudes', 'crear-solicitudes'),
    ];

}
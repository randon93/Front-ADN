export class Producto {
    id: string;
    nombre: string;
    precio: number;

    constructor(id: string, nombre: string, precio: number) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

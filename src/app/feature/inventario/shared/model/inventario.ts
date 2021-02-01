export class Inventario {
    id: number ;
    producto: number ;
    cantidad: number ;
    fechaRecarga: Date ;
    bloqueado: boolean ;
    recargaStock: boolean ;
    precioTotal: number;
    
    constructor(id: number, cantidad: number, producto: number, precioTotal: number) {
        this.id = id;
        this.cantidad = cantidad;
        this.producto = producto;
        this.precioTotal = precioTotal;
    }
}
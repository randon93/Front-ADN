export class Pedido {
      id: string;
      usuario: string;
      cantidad: string;
      producto: string;
      precioTotal: string;

    constructor(id: string, usuario: string, cantidad: string, producto: string, precioTotal: string) {
        this.id = id;
        this.usuario = usuario;
        this.cantidad = cantidad;
        this.producto = producto;
        this.precioTotal = precioTotal;
    }
}

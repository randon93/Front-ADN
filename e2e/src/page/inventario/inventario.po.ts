import {by, element} from 'protractor';

export class InventarioPage {
  private buttonActualizarInventario = element(by.id('actualizar'));
  private linkListarProductos = element(by.id('linkListarInventario'));
  private listaInventario = element.all(by.css('app-root .elemento'));

  async clickBotonEliminarProducto() {
    await this.buttonActualizarInventario.click();
  }

  async clickBotonListarProductos() {
    await this.linkListarProductos.click();
  }


  async contarInventarios() {
    return this.listaInventario.count();
  }
}

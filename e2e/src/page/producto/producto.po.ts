import {by, element} from 'protractor';

export class ProductoPage {
  private linkCrearProducto = element(by.id('linkCrearProducto'));
  private botonCrear = element(by.id('crear'));
  private buttonEliminarProducto = element(by.id('eliminar'));
  private linkListarProductos = element(by.id('linkListarProducto'));
  private inputIdProducto = element(by.id('nombreProducto'));
  private inputDescripcionProducto = element(by.id('precioProducto'));
  private listaProductos = element.all(by.css('app-root .elemento'));

  async clickBotonCrearProductos() {
    await this.linkCrearProducto.click();
  }

  async clickBotonCrear() {
    await this.botonCrear.click();
  }

  async clickBotonEliminarProducto() {
    await this.buttonEliminarProducto.click();
  }

  async clickBotonListarProductos() {
    await this.linkListarProductos.click();
  }

  async ingresarNombre(nombreProducto) {
    await this.inputIdProducto.sendKeys(nombreProducto);
  }

  async ingresarDescripcion(descripcionProducto) {
    await this.inputDescripcionProducto.sendKeys(descripcionProducto);
  }

  async contarProductos() {
    return this.listaProductos.count();
  }
}

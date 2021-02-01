import {by, element} from 'protractor';

export class PedidoPage {
  private linkCrearPedido = element(by.id('linkCrearPedido'));
  private botonCrear = element(by.id('crear'));
  private linkListarPedidos = element(by.id('linkListarPedidos'));
  private inputCantidadProducto = element(by.id('cantidad'));
  private inputProducto = element(by.id('productoPedido'));
  private inputUsuario = element(by.id('usuarioPedido'));
  private listaPedidos = element.all(by.css('app-root .elemento'));

  async clickBotonCrearPedido() {
    await this.linkCrearPedido.click();
  }

  async clickBotonCrear() {
    await this.botonCrear.click();
  }

  async clickBotonListarPedidos() {
    await this.linkListarPedidos.click();
  }

  async ingresarCantidad(cantidad) {
    await this.inputCantidadProducto.sendKeys(cantidad);
  }

  async ingresarProducto(idproducto) {
    await this.inputProducto.sendKeys(idproducto);
  }

  async ingresarUsuario(idUsuario) {
    await this.inputUsuario.sendKeys(idUsuario);
  }

  async contarPredido() {
    return this.listaPedidos.count();
  }
}

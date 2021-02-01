import {by, element} from 'protractor';

export class NavbarPage {
  linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
  linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
  linkPedidos = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
  linkInventario = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

  async clickBotonProductos() {
    await this.linkProducto.click();
  }

  async clickBotonPedidos() {
    await this.linkPedidos.click();
  }

  async clickBotonInventario() {
    await this.linkInventario.click();
  }
}

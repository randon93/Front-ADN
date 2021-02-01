// import { browser, logging } from 'protractor';
import {NavbarPage} from '../page/navbar/navbar.po';
import {AppPage} from '../app.po';
import {InventarioPage} from '../page/inventario/inventario.po';

describe('workspace-project Pedido', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let inventario: InventarioPage;

  beforeEach(async () => {
    page = new AppPage();
    navBar = new NavbarPage();
    inventario = new InventarioPage();
  });

  it('Deberia listar inventario', () => {
    page.navigateTo('/inventario/listar');
    navBar.clickBotonProductos();
    inventario.clickBotonListarProductos();
    expect(inventario.contarInventarios()).toBe(inventario.contarInventarios());
  });

});

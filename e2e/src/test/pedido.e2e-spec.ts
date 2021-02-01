// import { browser, logging } from 'protractor';
import {NavbarPage} from '../page/navbar/navbar.po';
import {AppPage} from '../app.po';
import {PedidoPage} from '../page/pedido/pedido.po';

describe('workspace-project Pedido', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let pedido: PedidoPage;
  let cantidadAntiguaLista: number;

  beforeEach( async () => {
    page = new AppPage();
    navBar = new NavbarPage();
    pedido = new PedidoPage();
    cantidadAntiguaLista = await pedido.contarPredido().then(resp => resp);
  });

  it('Deberia crear pedido', () => {
    const PRODUCTO = 1;
    const USUARIO = 1;
    const CANTIDAD_DEL_PRODUCTO_EN_EL_PEDIDO = 1;
    page.navigateTo('/pedido/crear');
    navBar.clickBotonPedidos();
    pedido.clickBotonCrearPedido();
    pedido.ingresarCantidad(CANTIDAD_DEL_PRODUCTO_EN_EL_PEDIDO);
    pedido.ingresarProducto(PRODUCTO);
    pedido.ingresarUsuario(USUARIO);
    pedido.clickBotonCrear();
    expect();
    // Adicionamos las validaciones despues de la creación
    // expect(<>).toEqual(<>);
  });

  it('Deberia listar pedido', () => {
    page.navigateTo('/pedido/listar');
    navBar.clickBotonProductos();
    pedido.clickBotonListarPedidos();
    expect(cantidadAntiguaLista).toBe(pedido.contarPredido());
  });

});

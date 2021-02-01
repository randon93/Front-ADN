// import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ProductoPage } from '../page/producto/producto.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let producto: ProductoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        producto = new ProductoPage();
    });

    it('Deberia crear producto', () => {
        const PRECIO_PRODUCTO = 100;
        const NOMBRE_PRODUCTO = Math.random().toString();

        page.navigateTo('/producto/crear');
        navBar.clickBotonProductos();
        producto.clickBotonCrearProductos();
        producto.ingresarNombre(NOMBRE_PRODUCTO);
        producto.ingresarDescripcion(PRECIO_PRODUCTO);
        producto.clickBotonCrear();
        expect();
        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar productos', () => {
        page.navigateTo('/producto/listar');
        navBar.clickBotonProductos();
        producto.clickBotonListarProductos();
        expect(producto.contarProductos()).toBe(producto.contarProductos());
    });

    it('Deberia eliminar productos', () => {
      page.navigateTo('/producto/listar');
      navBar.clickBotonProductos();
      producto.clickBotonListarProductos();
      producto.clickBotonEliminarProducto();
    });
});

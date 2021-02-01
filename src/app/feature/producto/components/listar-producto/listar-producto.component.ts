import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {ProductoService} from '@producto/shared/service/producto.service';
import {Producto} from '@producto/shared/model/producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.scss']
})
export class ListarProductoComponent implements OnInit {
  public listaProductos: Observable<Producto[]>;
  private productoCopia: Producto;

  constructor(protected productoService: ProductoService) {
  }

  ngOnInit() {
    this.listaProductos = this.productoService.consultar();
  }

  borrar(producto: Producto) {
    Swal.fire({
      title: 'Desea eliminar el producto: ' + producto.nombre,
      showCancelButton: true
    }).then((input) => {
      if (input.isConfirmed) {
        this.productoService.eliminar(producto).subscribe(
          () => {
            Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              background: '#D3FFA5',
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              }
            }).fire({
              icon: 'success',
              title: 'Se elimino el Producto'
            });
            this.ngOnInit();
          },
          ({error}) => Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            background: '#FCFFA0',
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          }).fire({
            icon: 'warning',
            title: error.mensaje
          })
        );
      }
    });

  }

  actualizar(producto: Producto) {
    Swal.fire({
      title: 'Ingrese el nuevo precio del producto ' + producto.nombre,
      input: 'text',
      inputLabel: 'El precio actual es: ' + producto.precio,
      inputValue: 1,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'El campo no puede estar vacio.';
        }
        if (Number(value) < 0) {
          return 'Porfavor un precio mayor a 0 (Cero)';
        }
      }
    }).then((input) => {
      if (input.isConfirmed) {
        this.productoCopia = JSON.parse(JSON.stringify(producto));
        this.productoCopia.precio = Number(input.value);
        this.productoService.actualizar(this.productoCopia).subscribe(
          () => {
            Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              background: '#D3FFA5',
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              }
            }).fire({
              icon: 'success',
              title: 'Actualizacion existosa'
            });
            this.ngOnInit();
          },
          ({error}) => Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            background: '#FCFFA0',
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          }).fire({
            icon: 'warning',
            title: error.mensaje
          })
        );
      }
    });
  }

}

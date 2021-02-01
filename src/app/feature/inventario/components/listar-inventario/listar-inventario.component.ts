import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {InventarioService} from '@inventario/shared/service/inventario.service';
import {Inventario} from '@inventario/shared/model/inventario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-inventario',
  templateUrl: './listar-inventario.component.html',
  styleUrls: ['./listar-inventario.component.scss']
})
export class ListarInventarioComponent implements OnInit {
  public listaInventario: Observable<Inventario[]>;
  private inventarioCopia: Inventario;

  constructor(protected inventarioService: InventarioService) {
  }

  ngOnInit() {
    this.listaInventario = this.inventarioService.consultar();
  }

  actualizarStock(inventario: Inventario) {
    Swal.fire({
      title: 'Ingrese la cantidad a agregar',
      input: 'text',
      inputLabel: 'La cantidad actual es: ' + inventario.cantidad,
      inputValue: 1,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'El campo no puede estar vacio.';
        }
        if (Number(value) < 0) {
          return 'Porfavor cantidades mayor a 0 (Cero)';
        }
      }
    }).then((input) => {
      if (input.isConfirmed) {
        this.inventarioCopia = JSON.parse(JSON.stringify(inventario));
        this.inventarioCopia.cantidad = Number(input.value);
        this.inventarioService.actualizar(this.inventarioCopia).subscribe(
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

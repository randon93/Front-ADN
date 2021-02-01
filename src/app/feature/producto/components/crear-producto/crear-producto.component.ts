import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  constructor(protected productoServices: ProductoService, private navegacion: Router) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  cerar() {
    this.productoServices.guardar(this.productoForm.value).subscribe(
      () => {
        Swal.fire({
          title: 'Producto "' + this.productoForm.value.nombre + '" Creado',
          icon: 'success',
          confirmButtonText: 'Listo'
        });
        this.navegacion.navigate(['producto', 'listar']);
      },
      ({ error }) => {
        Swal.fire({
          title: error.mensaje,
          text: this.productoForm.value.nombre,
          icon: 'warning',
          confirmButtonText: 'Listo'
        });
      }
    );
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required])
    });
  }

}

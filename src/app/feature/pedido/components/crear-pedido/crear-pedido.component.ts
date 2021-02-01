import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../shared/service/pedido.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.scss']
})
export class CrearPedidoComponent implements OnInit {
  titularAlerta: string;
  pedidoForm: FormGroup;
  constructor(protected pedidoServices: PedidoService, private navegacion: Router) { }

  ngOnInit() {
    this.construirFormularioPedido();
  }

  cerar() {
    this.pedidoServices.guardar(this.pedidoForm.value).subscribe(
      (resp) => {
        Swal.fire({
          title: 'Aprobado!',
          text: 'Precio total del pedido: ' + resp,
          icon: 'success',
          confirmButtonText: 'Listo'
        });
        this.navegacion.navigate(['pedido', 'listar']);
      },
      ( {error} ) => {
        Swal.fire({
          title: 'Error!',
          text: error.mensaje,
          icon: 'error',
          confirmButtonText: 'Listo'
        });
        throw new Error(error.mensaje);
      }
    );
  }

  private construirFormularioPedido() {
    this.pedidoForm = new FormGroup({
      cantidad: new FormControl('', [Validators.required]),
      producto: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required])
    });
  }
}

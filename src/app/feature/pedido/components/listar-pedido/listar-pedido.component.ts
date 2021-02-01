import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PedidoService } from '@pedido/shared/service/pedido.service';
import { Pedido } from '@pedido/shared/model/pedido';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.scss']
})
export class ListarPedidoComponent implements OnInit {
  public listaPedidos: Observable<Pedido[]>;

  constructor(protected pedidoService: PedidoService) { }

  ngOnInit() {
    this.listaPedidos = this.pedidoService.consultar();
  }

}

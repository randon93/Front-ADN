import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Pedido } from '../model/pedido';


@Injectable()
export class PedidoService {

  private path = environment.urlBase + '/pedido';

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Pedido[]>(`${this.path}`, this.http.optsName('consultar pedidos'));
  }

  public guardar(pedido: Pedido) {
    return this.http.doPost<Pedido, number>(`${this.path}/save`, pedido,
                                                this.http.optsName('crear pedido'));
  }

  public eliminar(pedido: Pedido) {
    return this.http.doDelete<boolean>(`${environment.serverBase}/pedidos/${pedido.id}`,
                                                 this.http.optsName('eliminar pedido'));
  }
}


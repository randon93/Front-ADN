import { NgModule } from '@angular/core';

import { PedidoRoutingModule } from './pedido-routing.module';
import { ListarPedidoComponent } from './components/listar-pedido/listar-pedido.component';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { SharedModule } from '@shared/shared.module';
import { PedidoService } from './shared/service/pedido.service';


@NgModule({
  declarations: [
    CrearPedidoComponent,
    ListarPedidoComponent,
    PedidoComponent
  ],
  imports: [
    PedidoRoutingModule,
    SharedModule
  ],
  providers: [PedidoService]
})
export class PedidoModule { }

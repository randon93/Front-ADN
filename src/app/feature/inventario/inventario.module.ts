import { NgModule } from '@angular/core';
import { ListarInventarioComponent } from './components/listar-inventario/listar-inventario.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { InventarioRoutingModule } from '@inventario/inventario-routing.module';
import { SharedModule } from '@shared/shared.module';
import { InventarioService } from './shared/service/inventario.service';



@NgModule({
  declarations: [
    ListarInventarioComponent,
    InventarioComponent
  ],
  imports: [
    InventarioRoutingModule,
    SharedModule
  ],
  providers: [InventarioService]
})
export class InventarioModule { }

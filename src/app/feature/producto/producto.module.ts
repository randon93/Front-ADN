import { NgModule } from '@angular/core';

import { ProductoRoutingModule } from './producto-routing.module';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SharedModule } from '@shared/shared.module';
import { ProductoService } from './shared/service/producto.service';


@NgModule({
  declarations: [
    CrearProductoComponent,
    ListarProductoComponent,
    ProductoComponent
  ],
  imports: [
    ProductoRoutingModule,
    SharedModule
  ],
  providers: [ProductoService]
})
export class ProductoModule { }

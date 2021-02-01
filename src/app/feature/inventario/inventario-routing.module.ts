import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarInventarioComponent } from './components/listar-inventario/listar-inventario.component';
import { InventarioComponent } from '@inventario/components/inventario/inventario.component';


const routes: Routes = [
  {
    path: '',
    component: InventarioComponent,
    children: [
      {
        path: 'listar',
        component: ListarInventarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }

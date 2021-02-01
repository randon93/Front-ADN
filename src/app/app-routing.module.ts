import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { InternacionalizacionComponent } from './feature/internacionalizacion/internacionalizacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  {
    path: 'producto',
    loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('@pedido/pedido.module').then(mod => mod.PedidoModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('@inventario/inventario.module').then(mod => mod.InventarioModule)
  },
  { path: 'internacionalizacion', component: InternacionalizacionComponent, canActivate: [SecurityGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

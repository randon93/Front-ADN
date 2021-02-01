import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'home' },
    { url: '/producto', nombre: 'producto' },
    { url: '/pedido', nombre: 'pedido' },
    { url: '/inventario', nombre: 'inventario' }
  ];

   constructor(translate: TranslateService) {    translate.stream('navbar.internacionalizacion').subscribe((res: string) => {      this.companies[2].nombre = res;    });  }
}

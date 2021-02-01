import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { PedidoModule } from '@pedido/pedido.module';
import { InventarioModule } from '@inventario/inventario.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';


import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationComponent } from './feature/translation/translation.component';
import { InternacionalizacionComponent } from './feature/internacionalizacion/internacionalizacion.component';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TranslationComponent,
    InternacionalizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    PedidoModule,
    InventarioModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';
import {Observable} from 'rxjs';


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) {}

  private patch = environment.urlBase + '/producto';
  public consultar() {
    return this.http.doGet<Producto[]>(`${this.patch}`, this.http.optsName('consultar productos'));
  }

  public guardar(producto: Producto) {
    return this.http.doPost<Producto, any>(`${this.patch}`, producto,
                                                this.http.optsName('crear/actualizar productos'));
  }

  public eliminar(producto: Producto) {
    return this.http.doDelete<boolean>(`${this.patch}/delete/${producto.id}`,
                                                 this.http.optsName('eliminar productos'));
  }


  public actualizar(producto: Producto): Observable<any> {
    return this.http.doPut<Producto, any>(`${this.patch}`, producto, this.http.optsName('Actualizar precio'));
  }
}

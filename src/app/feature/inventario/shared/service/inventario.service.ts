import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inventario } from '../model/inventario';


@Injectable()
export class InventarioService {

  private path = environment.urlBase + '/inventario';
  constructor(protected http: HttpService) {}

  public consultar(): Observable<Inventario[]> {
    return this.http.doGet<Inventario[]>(`${this.path}`, this.http.optsName('consultar inventario'));
  }

  public actualizar(inventario: Inventario): Observable<any> {
    return this.http.doPut<Inventario, any>(`${this.path}/actualizar`, inventario, this.http.optsName('Actualizar stock'));
  }

}

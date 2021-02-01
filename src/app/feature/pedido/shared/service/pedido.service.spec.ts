import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PedidoService } from './pedido.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Pedido } from '../model/pedido';
import { HttpResponse } from '@angular/common/http';

describe('PedisoService', () => {
  let httpMock: HttpTestingController;
  let service: PedidoService;
  const path = environment.urlBase + '/pedido';
  const apiEndpointPedidoConsulta = `${path}`;
  const apiEndpointPedidos = `${path}/pedidos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PedidoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PedidoService);
  });

  it('should be created', () => {
    const pedidoService: PedidoService = TestBed.inject(PedidoService);
    expect(pedidoService).toBeTruthy();
  });

  it('deberia listar pedidos', () => {
    const dummyPedido = [
      new Pedido('1', '1', '5', '1', '0'), new Pedido('2', '2', '5', '2', '0')
    ];
    service.consultar().subscribe(pedidos => {
      expect(pedidos.length).toBe(2);
      expect(pedidos).toEqual(dummyPedido);
    });
    const req = httpMock.expectOne(apiEndpointPedidoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPedido);
  });

  it('deberia crear un pedido', () => {
    const dummyPedido = new Pedido('2', '2', '5', '2', '0');
    service.guardar(dummyPedido).subscribe((respuesta) => {
      expect(typeof respuesta).toBe('number');
    });
    const req = httpMock.expectOne(apiEndpointPedidos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un pedido', () => {
    const dummyPedido = new Pedido('2', '2', '5', '2', '0');
    service.eliminar(dummyPedido).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointPedidos}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });

});

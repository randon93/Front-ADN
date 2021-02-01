import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarPedidoComponent } from './listar-pedido.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PedidoService } from '../../shared/service/pedido.service';
import { Pedido } from '../../shared/model/pedido';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarPedidoComponent', () => {
  let component: ListarPedidoComponent;
  let fixture: ComponentFixture<ListarPedidoComponent>;
  let pedidoService: PedidoService;
  const listaPedidos: Pedido[] = [
    new Pedido('1', 'Pedido 1', '1', '1', '0'),
    new Pedido('2', 'Pedido 2', '1', '1', '0')];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPedidoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PedidoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPedidoComponent);
    component = fixture.componentInstance;
    pedidoService = TestBed.inject(PedidoService);
    spyOn(pedidoService, 'consultar').and.returnValue(
      of(listaPedidos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaPedidos.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});

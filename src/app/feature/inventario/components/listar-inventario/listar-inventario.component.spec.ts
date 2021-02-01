import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarInventarioComponent } from './listar-inventario.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { InventarioService } from '@inventario/shared/service/inventario.service';
import { Inventario } from '@inventario/shared/model/inventario';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarPedidoComponent', () => {
  let component: ListarInventarioComponent;
  let fixture: ComponentFixture<ListarInventarioComponent>;
  let inventarioService: InventarioService;
  const listaPedidos: Inventario[] = [
    new Inventario(1, 1, 1, 1),
    new Inventario(2, 2, 2, 2)
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarInventarioComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [InventarioService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInventarioComponent);
    component = fixture.componentInstance;
    inventarioService = TestBed.inject(InventarioService);
    spyOn(inventarioService, 'consultar').and.returnValue(
      of(listaPedidos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaInventario.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});

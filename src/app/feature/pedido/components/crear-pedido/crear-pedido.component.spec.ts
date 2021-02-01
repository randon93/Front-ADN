import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearPedidoComponent } from './crear-pedido.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PedidoService } from '../../shared/service/pedido.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearProductoComponent', () => {
  let component: CrearPedidoComponent;
  let fixture: ComponentFixture<CrearPedidoComponent>;
  let pedidoService: PedidoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPedidoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [PedidoService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPedidoComponent);
    component = fixture.componentInstance;
    pedidoService = TestBed.inject(PedidoService);
    spyOn(pedidoService, 'guardar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.pedidoForm.valid).toBeFalsy();
  });

  it('Registrando producto', () => {
    expect(component.pedidoForm.valid).toBeFalsy();
    component.pedidoForm.controls.id.setValue('001');
    component.pedidoForm.controls.descripcion.setValue('Producto test');
    expect(component.pedidoForm.valid).toBeTruthy();

    component.cerar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarInsumoComponent } from './cadastrar-insumo.component';

describe('CadastrarInsumoComponent', () => {
  let component: CadastrarInsumoComponent;
  let fixture: ComponentFixture<CadastrarInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarInsumoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

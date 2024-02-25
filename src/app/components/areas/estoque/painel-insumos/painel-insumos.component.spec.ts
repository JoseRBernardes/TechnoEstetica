import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelInsumosComponent } from './painel-insumos.component';

describe('PainelInsumosComponent', () => {
  let component: PainelInsumosComponent;
  let fixture: ComponentFixture<PainelInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PainelInsumosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

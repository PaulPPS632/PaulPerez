import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiasComponent } from './technologias.component';

describe('TechnologiasComponent', () => {
  let component: TechnologiasComponent;
  let fixture: ComponentFixture<TechnologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

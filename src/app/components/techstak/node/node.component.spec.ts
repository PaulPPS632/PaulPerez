import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NODEComponent } from './node.component';

describe('NODEComponent', () => {
  let component: NODEComponent;
  let fixture: ComponentFixture<NODEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NODEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NODEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

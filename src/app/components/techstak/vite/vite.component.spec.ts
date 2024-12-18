import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VITEComponent } from './vite.component';

describe('VITEComponent', () => {
  let component: VITEComponent;
  let fixture: ComponentFixture<VITEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VITEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VITEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

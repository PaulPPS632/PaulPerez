import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXPRESSComponent } from './express.component';

describe('EXPRESSComponent', () => {
  let component: EXPRESSComponent;
  let fixture: ComponentFixture<EXPRESSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EXPRESSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EXPRESSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

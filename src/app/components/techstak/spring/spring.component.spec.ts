import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPRINGComponent } from './spring.component';

describe('SPRINGComponent', () => {
  let component: SPRINGComponent;
  let fixture: ComponentFixture<SPRINGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SPRINGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPRINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

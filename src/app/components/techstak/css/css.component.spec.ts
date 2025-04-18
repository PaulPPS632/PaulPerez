import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSComponent } from './css.component';

describe('CSSComponent', () => {
  let component: CSSComponent;
  let fixture: ComponentFixture<CSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

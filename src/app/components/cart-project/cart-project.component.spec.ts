import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProjectComponent } from './cart-project.component';

describe('CartProjectComponent', () => {
  let component: CartProjectComponent;
  let fixture: ComponentFixture<CartProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

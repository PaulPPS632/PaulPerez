import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NEXTComponent } from './next.component';

describe('NEXTComponent', () => {
  let component: NEXTComponent;
  let fixture: ComponentFixture<NEXTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NEXTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NEXTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REACTComponent } from './react.component';

describe('REACTComponent', () => {
  let component: REACTComponent;
  let fixture: ComponentFixture<REACTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [REACTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(REACTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

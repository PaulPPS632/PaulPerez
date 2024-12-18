import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GITACTIONSComponent } from './gitactions.component';

describe('GITACTIONSComponent', () => {
  let component: GITACTIONSComponent;
  let fixture: ComponentFixture<GITACTIONSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GITACTIONSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GITACTIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

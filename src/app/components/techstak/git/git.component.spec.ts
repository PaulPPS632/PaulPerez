import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GITComponent } from './git.component';

describe('GITComponent', () => {
  let component: GITComponent;
  let fixture: ComponentFixture<GITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GITComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

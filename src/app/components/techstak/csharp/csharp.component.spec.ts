import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSHARPComponent } from './csharp.component';

describe('CSHARPComponent', () => {
  let component: CSHARPComponent;
  let fixture: ComponentFixture<CSHARPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSHARPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSHARPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

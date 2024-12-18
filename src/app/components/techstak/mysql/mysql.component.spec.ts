import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYSQLComponent } from './mysql.component';

describe('MYSQLComponent', () => {
  let component: MYSQLComponent;
  let fixture: ComponentFixture<MYSQLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MYSQLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MYSQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

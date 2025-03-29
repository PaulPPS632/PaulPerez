import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudflareComponent } from './cloudflare.component';

describe('CloudflareComponent', () => {
  let component: CloudflareComponent;
  let fixture: ComponentFixture<CloudflareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudflareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudflareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

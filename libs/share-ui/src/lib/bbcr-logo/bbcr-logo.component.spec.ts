import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcrLogoComponent } from './bbcr-logo.component';

describe('BbcrLogoComponent', () => {
  let component: BbcrLogoComponent;
  let fixture: ComponentFixture<BbcrLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BbcrLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BbcrLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

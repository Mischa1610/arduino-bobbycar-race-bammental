import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTranslationComponent } from './switch-translation.component';

describe('SwitchTranslationComponent', () => {
  let component: SwitchTranslationComponent;
  let fixture: ComponentFixture<SwitchTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchTranslationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

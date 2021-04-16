import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInputComponent } from './on-input.component';

describe('OnInputComponent', () => {
  let component: OnInputComponent;
  let fixture: ComponentFixture<OnInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

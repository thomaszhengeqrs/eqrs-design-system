/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumericComponent } from './numeric.component';

describe('NumericComponent', () => {
  let component: NumericComponent;
  let fixture: ComponentFixture<NumericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

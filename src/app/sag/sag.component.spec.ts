import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SagComponent } from './sag.component';

describe('SagComponent', () => {
  let component: SagComponent;
  let fixture: ComponentFixture<SagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

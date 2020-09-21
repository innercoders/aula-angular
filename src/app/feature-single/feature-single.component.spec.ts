import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSingleComponent } from './feature-single.component';

describe('FeatureSingleComponent', () => {
  let component: FeatureSingleComponent;
  let fixture: ComponentFixture<FeatureSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

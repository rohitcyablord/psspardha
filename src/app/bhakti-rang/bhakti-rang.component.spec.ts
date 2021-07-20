import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaktiRangComponent } from './bhakti-rang.component';

describe('BhaktiRangComponent', () => {
  let component: BhaktiRangComponent;
  let fixture: ComponentFixture<BhaktiRangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhaktiRangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhaktiRangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

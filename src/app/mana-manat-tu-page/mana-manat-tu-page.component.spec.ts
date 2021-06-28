import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaManatTuPageComponent } from './mana-manat-tu-page.component';

describe('ManaManatTuPageComponent', () => {
  let component: ManaManatTuPageComponent;
  let fixture: ComponentFixture<ManaManatTuPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaManatTuPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaManatTuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

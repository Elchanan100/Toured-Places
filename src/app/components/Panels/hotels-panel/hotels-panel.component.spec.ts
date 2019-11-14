import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsPanelComponent } from './hotels-panel.component';

describe('HotelsPanelComponent', () => {
  let component: HotelsPanelComponent;
  let fixture: ComponentFixture<HotelsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

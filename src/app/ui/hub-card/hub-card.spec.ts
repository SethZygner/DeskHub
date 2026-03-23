import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubCard } from './hub-card';

describe('HubCard', () => {
  let component: HubCard;
  let fixture: ComponentFixture<HubCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubCard],
    }).compileComponents();

    fixture = TestBed.createComponent(HubCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpassesComponent } from './eventpasses.component';

describe('EventpassesComponent', () => {
  let component: EventpassesComponent;
  let fixture: ComponentFixture<EventpassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventpassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventpassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

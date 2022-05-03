import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewactiviteComponent } from './newactivite.component';

describe('NewactiviteComponent', () => {
  let component: NewactiviteComponent;
  let fixture: ComponentFixture<NewactiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewactiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrespassesComponent } from './membrespasses.component';

describe('MembrespassesComponent', () => {
  let component: MembrespassesComponent;
  let fixture: ComponentFixture<MembrespassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembrespassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrespassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

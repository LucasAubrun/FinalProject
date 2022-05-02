import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationequipesComponent } from './creationequipes.component';

describe('CreationequipesComponent', () => {
  let component: CreationequipesComponent;
  let fixture: ComponentFixture<CreationequipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationequipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationequipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

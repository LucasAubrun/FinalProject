import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionadminComponent } from './connexionadmin.component';

describe('ConnexionadminComponent', () => {
  let component: ConnexionadminComponent;
  let fixture: ComponentFixture<ConnexionadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

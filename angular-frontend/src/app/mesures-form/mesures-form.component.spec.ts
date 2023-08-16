import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesuresFormComponent } from './mesures-form.component';

describe('MesuresFormComponent', () => {
  let component: MesuresFormComponent;
  let fixture: ComponentFixture<MesuresFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesuresFormComponent]
    });
    fixture = TestBed.createComponent(MesuresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

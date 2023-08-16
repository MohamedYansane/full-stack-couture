import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouturierComponent } from './couturier.component';

describe('CouturierComponent', () => {
  let component: CouturierComponent;
  let fixture: ComponentFixture<CouturierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouturierComponent]
    });
    fixture = TestBed.createComponent(CouturierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

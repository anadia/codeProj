import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadridComponent } from './madrid.component';

describe('MadridComponent', () => {
  let component: MadridComponent;
  let fixture: ComponentFixture<MadridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

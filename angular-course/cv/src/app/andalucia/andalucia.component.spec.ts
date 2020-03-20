import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaComponent } from './andalucia.component';

describe('AndaluciaComponent', () => {
  let component: AndaluciaComponent;
  let fixture: ComponentFixture<AndaluciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndaluciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndaluciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

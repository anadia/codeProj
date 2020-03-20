import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiNombreComponent } from './mi-nombre.component';

describe('MiNombreComponent', () => {
  let component: MiNombreComponent;
  let fixture: ComponentFixture<MiNombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiNombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

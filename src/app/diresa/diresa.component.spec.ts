import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiresaComponent } from './diresa.component';

describe('DiresaComponent', () => {
  let component: DiresaComponent;
  let fixture: ComponentFixture<DiresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

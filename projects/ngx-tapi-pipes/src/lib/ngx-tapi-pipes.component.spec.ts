import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTapiPipesComponent } from './ngx-tapi-pipes.component';

describe('NgxTapiPipesComponent', () => {
  let component: NgxTapiPipesComponent;
  let fixture: ComponentFixture<NgxTapiPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTapiPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTapiPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

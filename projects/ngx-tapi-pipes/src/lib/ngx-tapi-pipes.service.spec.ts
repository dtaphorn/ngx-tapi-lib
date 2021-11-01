import { TestBed } from '@angular/core/testing';

import { NgxTapiPipesService } from './ngx-tapi-pipes.service';

describe('NgxTapiPipesService', () => {
  let service: NgxTapiPipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTapiPipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

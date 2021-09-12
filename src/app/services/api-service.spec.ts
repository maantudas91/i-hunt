import { TestBed, fakeAsync, tick, flushMicrotasks } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, from, of } from 'rxjs';
import { ApiService } from './api-service';


describe('ApiService', () => {
  let service: ApiService;
  let httpService: HttpClient;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule(
      { imports :[HttpClientTestingModule  ], providers: [HttpClient ] }
    );
    service = TestBed.inject(ApiService);
    httpService = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});

import { TestBed, inject } from '@angular/core/testing';

import { TodoJsonService } from './todo-json.service';

describe('TodoJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoJsonService]
    });
  });

  it('should be created', inject([TodoJsonService], (service: TodoJsonService) => {
    expect(service).toBeTruthy();
  }));
});

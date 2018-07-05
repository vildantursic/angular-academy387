import { Injectable } from '@angular/core';
import { MainService } from '../main.service';

@Injectable()
export class AboutService {

  constructor(private service: MainService) { }

  getComplexes(): any {
    return this.service.get('complex');
  }

  createComplex(data): any {
    return this.service.post('complex', data);
  }

  deleteComplex(id): any {
    return this.service.delete(`complex/${id}`)
  }
}

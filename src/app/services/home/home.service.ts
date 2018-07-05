import { Injectable } from '@angular/core';
import { MainService } from '../main.service';

@Injectable()
export class HomeService {

  constructor(private service: MainService) { }

  getProjects(): any {
    return this.service.get('projects');
  }

  createProject(data): any {
    return this.service.post('projects', data);
  }

  deleteProject(id): any {
    return this.service.delete(`projects/${id}`)
  }
}

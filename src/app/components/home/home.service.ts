import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getProjects(): any {
    return this.http.get('http://45.76.90.178:3870/api/v1/projects')
  }

  createProject(data): any {
    return this.http.post('http://45.76.90.178:3870/api/v1/projects', data)
  }

  deleteProject(id): any {
    return this.http.delete(`http://45.76.90.178:3870/api/v1/projects/${id}`)
  }
}

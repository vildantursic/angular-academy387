import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  api = 'http://45.76.90.178:3870/api/v1';

  constructor(private http: HttpClient) { }

  get(route): any {
    console.log(`${this.api}/${route}`)
    return this.http.get(`${this.api}/${route}`)    
  }

  post(route, data): any {
    console.log(`${this.api}/${route}`, data)
    return this.http.post(`${this.api}/${route}`, data)    
  }

  put(route, data): any {
    console.log(`${this.api}/${route}`, data)
    return this.http.put(`${this.api}/${route}`, data)    
  }

  delete(route): any {
    console.log(`${this.api}/${route}`)
    return this.http.delete(`${this.api}/${route}`)    
  }
}

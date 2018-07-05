import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  data: Subject<any> = new Subject();

  constructor() {
  }
}

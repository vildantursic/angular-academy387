import { Injectable } from '@angular/core';
import { Subject, Observable, Subscriber, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  data: Subject<any> = new Subject();

  constructor() {
  }
}

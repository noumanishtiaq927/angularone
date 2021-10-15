import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  filtershow = new Subject<boolean>()
  constructor() { }
}

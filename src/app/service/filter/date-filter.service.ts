import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StudentDetailServiceService } from '../student/student-detail-service.service';

@Injectable({
  providedIn: 'root'
})
export class DateFilterService {

  datefilterr: any = new Subject<string>();
  newdata =''
  // datefilter: any = new Subject<any>();
  constructor() {

  }


  // getfilterdate(filtervalue: any) {
  //   this.newdata = new Date(filtervalue).toLocaleDateString();
  //   console.log(this.newdata)
  //   this.datefilterr.next(this.newdata);
  //   console.log(this.datefilterr);
  // }

  postfilterdate(): Observable<any> {
    return this.datefilterr.asObservable();
  }
}

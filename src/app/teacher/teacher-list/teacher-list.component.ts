import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateFilterService } from 'src/app/service/filter/date-filter.service';
import { TeacherDetailServiceService } from 'src/app/service/teacher/teacher-detail-service.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit,DoCheck {
public teacherDetail:any = []
public newTeacherDetail:any = []
public newfilterdatee:any=''
@Input() public filteronDate:any=''
@Input('datefilter') globalFilter:any= ''
@Input() searchField=''
subs: Subscription | undefined
filterofDate =''
  constructor( private _teacherDetailService: TeacherDetailServiceService, private filterservice:DateFilterService) {

   }

  ngOnInit(): void {
    this.teacherDetail = this._teacherDetailService.getTeacherDetail()

    this.filterofDate = this.filterservice.newdata
    this.subs = this.filterservice.datefilterr.subscribe((data: any) => {
      this.filterofDate = data;
      this.teacherDetail = this._teacherDetailService.filterTeacher(this.filterofDate);
      console.log(data);
      console.log(this.teacherDetail);
    });
  }
  ngDoCheck(): void {
    this.filterofDate = this.filterservice.newdata
    this.subs = this.filterservice.datefilterr.subscribe((data: any) => {
      this.filterofDate = data;
      this.teacherDetail = this._teacherDetailService.filterTeacher(this.filterofDate);
      console.log(data);
      console.log(this.teacherDetail);
    });
  }
  ngOnDestroy() {
    this.subs?.unsubscribe();
  }



newfilterdate($event:any){
  // this.newfilterdatee=$event
  // this.filteronDate = new Date(this.newfilterdatee).toLocaleDateString()
  // console.log(this.filteronDate)
  // console.log(this.teacherDetail)
  // return  this._teacherDetailService.filterTeacher(this.filteronDate)
}
}

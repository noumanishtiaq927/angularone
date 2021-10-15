import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateFilterService } from 'src/app/service/filter/date-filter.service';
import { StudentDetailServiceService } from 'src/app/service/student/student-detail-service.service';
import { SubjectServiceService } from 'src/app/service/subject/subject-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public studentDetail:any = []
  public studentDetaill:any = []
  public newStudentDetail:any=[]
  public newfilterdatee:any=''
  public newfilterdaatee:any=''
  @Input() public filteronDate:any=''
  @Input() searchField=''
  public datefilterr = ''
  subs: Subscription | undefined
  filterofDate =''
  constructor(private _studentDetailService: StudentDetailServiceService, private filterservice: DateFilterService, private subjectservice: SubjectServiceService) {

   }

   ngOnInit(): void {
    this.studentDetail = this._studentDetailService.getStudentDetail();
    console.log('hi from student-data');
this.filterofDate = this.filterservice.newdata
    this.subs = this.filterservice.datefilterr.subscribe((data: any) => {
      this.filterofDate = data;
      this.studentDetail = this._studentDetailService.filterStudent(this.filterofDate);
      console.log(data);
      console.log(this.studentDetail);
    });

  }
  ngDoCheck(): void {
    this.filterofDate = this.filterservice.newdata
    this.subs = this.filterservice.datefilterr.subscribe((data: any) => {
      this.filterofDate = data;
      this.studentDetail = this._studentDetailService.filterStudent(this.filterofDate);
      console.log(data);
      console.log(this.studentDetail);
    });
  }
  ngOnDestroy() {
    this.subs?.unsubscribe();
  }



  newfilterdate($event:any){
  //   this.newfilterdatee=$event
  //   this.filteronDate = new Date(this.newfilterdatee).toLocaleDateString()
  //   console.log(this.filteronDate)
  //   console.log(this.studentDetail)
  //   return this._studentDetailService.filterStudent(this.filteronDate)
  }
}

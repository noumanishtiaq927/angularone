import { Component, Input, OnInit } from '@angular/core';
import { StudentDetailServiceService } from 'src/app/service/student/student-detail-service.service';

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
  constructor(private _studentDetailService: StudentDetailServiceService) { }

  ngOnInit(): void {
    this.studentDetail = this._studentDetailService.getStudentDetail()
  }
ngOnChanges(){
  this.newfilterdaatee = new Date(this.filteronDate).toLocaleDateString()
  console.log(this.filteronDate)
  console.log(this.studentDetail)
  this.studentDetaill = this.studentDetail.filter((x:any) => x.joinDate === this.newfilterdaatee)
console.log('filteronDate'+ this.newfilterdaatee)
  console.log(this.studentDetaill)
  this.studentDetail=this.studentDetaill
  return this.studentDetail
}
  newfilterdate($event:any){
    this.newfilterdatee=$event
    this.filteronDate = new Date(this.newfilterdatee).toLocaleDateString()
    console.log(this.filteronDate)
    console.log(this.studentDetail)
    this.studentDetail = this.studentDetail.filter((x:any) => x.joinDate === this.filteronDate)

    console.log(this.studentDetail)
    return this.studentDetail
  }
}

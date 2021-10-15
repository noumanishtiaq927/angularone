import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from './service/subject/subject-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private subjectservice:SubjectServiceService){}
  // ngOnInit(){
  //   this.subjectservice.filtershow.subscribe(res=>{
  //     this.filtershow = res
  //   })
  // }
  title = 'taskTwoAngular';
  filter :any =""
  filtershow = true
  newfilterdate($event:any){
    console.log($event)
  }
}

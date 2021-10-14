import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherDetailServiceService {

  constructor() { }
  getTeacherDetail(){
    return [
      {id:"1", name:"Eobard", age:39, joinDate:"11/7/2012"},
      {id:"2", name:"Malcolm", age:30, joinDate:"5/10/2014"},
      {id:"3", name:"Damien", age:40, joinDate:"3/10/2012"},
      {id:"4", name:"Zoom", age:35, joinDate:"12/18/2015"},
      {id:"5", name:"Lance", age:50, joinDate:"11/7/2012"},
      {id:"6", name:"West", age:50, joinDate:"1/10/2015"},
    ]
  }
}

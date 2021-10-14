import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { ParentFilterComponent } from './parent-filter/parent-filter/parent-filter.component';
import { ParentComponent } from './parent/parent.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';

const routes: Routes = [
  {path:'',component:ParentComponent},
  {path:'teacher', component: TeacherListComponent},
  {path:'student', component:StudentListComponent},
  {path:'httpdemo', component:HttpDemoComponent},
  {path:'globalfilter', component:ParentFilterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

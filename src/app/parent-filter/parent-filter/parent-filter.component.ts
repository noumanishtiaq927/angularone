import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { DateFilterService } from 'src/app/service/filter/date-filter.service';

@Component({
  selector: 'app-parent-filter',
  templateUrl: './parent-filter.component.html',
  styleUrls: ['./parent-filter.component.css']
})
export class ParentFilterComponent implements OnInit {

  @Input() datefilter =''
  @Output() dateofFilter = new EventEmitter()
  @Input() filterjoinDate:any =""
  search=""
  newdata =''
  constructor(private filterservice : DateFilterService) { }

  ngOnInit(): void {
  }
showDate(){
  console.log(this.datefilter)
  // this.filterservice.getfilterdate(this.datefilter);
  this.newdata = new Date(this.datefilter).toLocaleDateString();
  this.filterservice.datefilterr.next(this.newdata)
  this.filterservice.newdata = this.newdata

}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent-filter',
  templateUrl: './parent-filter.component.html',
  styleUrls: ['./parent-filter.component.css']
})
export class ParentFilterComponent implements OnInit {
  datefilterr = new Subject()
  @Input() datefilter =''
  @Output() dateofFilter = new EventEmitter()
  @Input() filterjoinDate:any =""
  search=""
  constructor() { }

  ngOnInit(): void {
  }
showDate(){
  this.dateofFilter.emit(`${this.datefilter}`)
  console.log(this.datefilter)
  this.datefilterr = this.datefilterr
}
}

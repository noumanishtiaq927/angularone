import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-route',
  templateUrl: './filter-route.component.html',
  styleUrls: ['./filter-route.component.css']
})
export class FilterRouteComponent implements OnInit {
  toggle = false
  constructor() { }

  ngOnInit(): void {
  }
  togglest(){
    this.toggle = !this.toggle
  }
}

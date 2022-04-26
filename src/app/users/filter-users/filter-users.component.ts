import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent implements OnInit {

  myobj = {id:12,name:'helloo'}

  @Input()
  data!: String;

  @Input()
  tax!:number;

  @Output()
  childevent = new EventEmitter();


  constructor() { }

  
  ngOnInit(): void {
  }

  onclick(){
    this.childevent.emit(this.myobj.name)
  }
}

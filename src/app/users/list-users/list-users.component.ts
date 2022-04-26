import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public taxable = 200
  constructor() { }

  ngOnInit(): void {
  }

   public message = ''

  mess(value: any){
    console.log(value)
  }

  empobj = [{id:1,name:'ashu',age: 21},
  {id:2,name:'ash',age: 21},
  {id:3,name:'ahu',age: 21}]

}

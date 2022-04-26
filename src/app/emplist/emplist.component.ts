import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { empd } from '../emply';


@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent implements OnInit {

  public emp:any = []


  constructor(private empdata : EmployeeService) { }

  ngOnInit(): void {
    // const Body :empd =  {
    //   id : 2,
    //   title : 'some',
    //   body : 'body something'
    // }
    this.empdata.getempdata()
        .subscribe(arg => this.emp = arg);
      
  }
}


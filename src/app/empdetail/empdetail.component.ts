import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.scss']
})
export class EmpdetailComponent implements OnInit {

  public employees:any = [] 

  constructor(private data : EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.data.employee_data()
  }

}

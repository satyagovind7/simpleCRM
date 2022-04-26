import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { empd } from './emply';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';

  displayname = false
  color = 'red'
  colors = ['red','green','blue','yellow']

  date = new Date()
  public name = ''
  public emp:any = []

  public data = ['angular','nodejs','mysql']

    


    constructor(private conn : EmployeeService){} 

    onclick(value:any){
      this.conn.setName(value)
      this.conn.getempdata()
        .subscribe(arg => this.emp = arg);
    }

}


//hjnnkjnjn

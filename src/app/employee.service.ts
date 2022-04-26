import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './httpservice';
import { observable, Observable, throwError } from 'rxjs';
import { empd } from './emply';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpService) { }
    name=""
    setName(value:any){
      this.name=value;
    }

    rootURL = '/restbyname/';
    

    getempdata(): Observable<empd[]>{

    // <empd[]>{
      // const body = JSON.stringify(Empd)
      // const headers = {'content-type':'application/json'}
      // const url = 'https://jsonplaceholder.typicode.com/posts'
      // const url = 'http://localhost:4242/restbyname/nandos'
      
      // const responseGet = this.http.get(url);
      // return this.http.responseApi(responseGet, this.handleError);

  



      return this.http.get(this.rootURL+this.name)
      // console.log(res)
      // return res;
    
      // .map(this.extractData)
      // .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
return body;
}

    public handleError = (error: any) => {
      return throwError(()=>error);
    }

  employee_data() {
     return [ 
       {id : 1,name :"ashu", age: 23,type: undefined,},
  {id : 2,name :"ash", age: 22,type: undefined,},
  {id : 3,name :"asu", age: 21,type: undefined,},
];
}
}

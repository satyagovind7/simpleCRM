import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usersettings } from './usersettings';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  usersettingsform(Usersettings : Usersettings) : Observable<Usersettings>{
      return of(Usersettings)
  }
}

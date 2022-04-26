// *************
// Copyright (c) RYMEDI INC . All rights reserved.
// See LICENSE file in the project root for full license information.
// Purpose:
// version 1.0  Initial development: 07/24/2019 Developer Team: ITSCM
// Author: Hussain <hkadim@itscm.de>
// *************
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { ApiModel } from './ApiModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {
  }


  public get(url: string) {
    return this.http.get<any>(url);
  }

  public getDownLoad(url: string) {
    return this.http.get<any>(url, { responseType: 'blob' as 'json' });
  }

  public post(url: string, data: any) {
    return this.http.post<any>(url, data);
  }

  public postMultiPart(url: string, data: any) {
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'file-upload': 'multipart/form-data'
      })
    });
  }

  public postZpl2Pdf(url: string, data: any, headers: any) {
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'keyHeader': 'zpl2pdf',
        'Accept': headers.accept,
        'quality': headers.quality,
      }),
      responseType: 'blob' as 'json'
    });
  }

  public put(url: string, data: any) {
    return this.http.put<any>(url, data);
  }

  public delete(url: string) {
    return this.http.delete<any>(url);
  }

  public patch(url: string, data: any) {
    return this.http.patch<any>(url, data);
  }

  public responseApi = (p: Observable<ApiModel.BackendResponse>,
    handleError: any) => {
    return p.pipe(map((response: ApiModel.BackendResponse) => {
      return response.content;
    }),
      catchError(handleError)
    );
  }
}

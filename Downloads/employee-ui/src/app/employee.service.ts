import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  protected http: HttpClient;
    public header: HttpHeaders;
    public baseURL='';
    public clientId = "111";
    public clientSecret = "222";
    public grantType = "password";

    constructor(public _http: HttpClient, location: PlatformLocation) {
        this.http = _http;
        this.header = new HttpHeaders({});
    }

    target_url = 'http://localhost:8080'

    AddEmployee(employee):Observable<any> {
      console.log(employee);
      console.log(employee.value);

    return this.http.post(this.target_url + '/addEmployee', employee.value);
  }

}

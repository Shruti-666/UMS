import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
let baseUrl = 'http://127.0.0.1:8000/auth/';

@Injectable({
  providedIn: 'root'
})
export class User {
  loginUrl = baseUrl + 'login/';
  constructor( private http:HttpClient) {  }
  login(obj:any){
    // debugger;
    return this.http.post(this.loginUrl,obj);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    let url = "http://localhost:5000/getAllUsers";
    return this.http.get<any>(url);
  }
  addData(api: Data): Observable<any> {
    return this.http.post<any>("http://localhost:5000/addUser", api);

  }
  getUserById(api: any): Observable<any> {
    return this.http.get<any>('http://localhost:5000/getUserById/' + api);

  }
  editUserById(api: any): Observable<any> {
    return this.http.put<any>('http://localhost:5000/editUser/' + api.id, api);
  }
  deleteUserById(id: any): Observable<any> {
    return this.http.delete<any>('http://localhost:5000/deleteUser/' + id);
  }
  selectUserbyname(body: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/selectUserbyname', body);
  }
}

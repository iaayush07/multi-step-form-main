import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../user.model';

@Injectable()
export class UserService {

  //url of db.json
  public baseUrl: any;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/user/";
  }

  addUserData(user: user):Observable<user>{
    const url: string = this.baseUrl;
    return this.http.post<user>(url, user);
  }
}

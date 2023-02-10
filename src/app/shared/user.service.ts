import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { user } from '../user.model';

@Injectable()
export class UserService {

  public subjectData$: Observable<any>;
  public subjectData: Subject<any>;

  //url of db.json
  public baseUrl: any;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/user/";
    this.subjectData = new Subject();
    this.subjectData$ = this.subjectData.asObservable();
  }

  addUserData(user: user):Observable<user>{
    const url: string = this.baseUrl;
    return this.http.post<user>(url, user);
  }


}

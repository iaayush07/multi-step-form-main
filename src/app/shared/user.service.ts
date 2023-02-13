import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { user } from '../user.model';

@Injectable()
export class UserService {

  // public subjectData$: Observable<any>;
  public subscriptionPlan: BehaviorSubject<any>;
  public addOnsSubject: BehaviorSubject<any>;

  //url of db.json
  public baseUrl: any;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/user/";
    this.subscriptionPlan = new BehaviorSubject('');
    this.addOnsSubject = new BehaviorSubject('');
    // this.subjectData$ = this.subjectData.asObservable();
  }

  addUserData(user: user):Observable<user>{
    const url: string = this.baseUrl;
    return this.http.post<user>(url, user);
  }


}

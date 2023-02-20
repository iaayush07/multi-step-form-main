import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { user } from '../user.model';

@Injectable()
export class UserService {

  ///--------------------------------------
  // public subjectData$: Observable<any>;
  public subscriptionPlan: BehaviorSubject<any>;
  public addOnsSubject: BehaviorSubject<any>;
  public gobackSubject: BehaviorSubject<any>;
  public saveFormSubject: BehaviorSubject<any>;
  public formSubmitted: Subject<any>;
  public planChangeSubject: BehaviorSubject<any>;
  //url of db.json
  public baseUrl: any;
  ///--------------------------------------

  ///--------------------------------------
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/user/";
    this.subscriptionPlan = new BehaviorSubject('');
    this.addOnsSubject = new BehaviorSubject('');
    this.gobackSubject = new BehaviorSubject('');
    this.saveFormSubject = new BehaviorSubject('');
    this.formSubmitted = new Subject();
    this.planChangeSubject = new BehaviorSubject('');
    // this.subjectData$ = this.subjectData.asObservable();
  }
  ///--------------------------------------

  /**
   * post call
   * @param user
   * @returns user
   */
  addUserData(user: user):Observable<user>{
    const url: string = this.baseUrl;
    return this.http.post<user>(url, user);
  }

  /**
   * get call
   * @returns user[]
   */
  getUserData():Observable<user[]>{
    const url: string = this.baseUrl;
    return this.http.get<user[]>(url)
  }
}

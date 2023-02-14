import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { user } from '../user.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements OnInit {
  public planDetail : any;
  public addOnsDetail : any[];
  public personalInfo : any;

  constructor(private userService:UserService, private router : Router){
    this.addOnsDetail = [];
  }

  ngOnInit(): void {
    this.userService.subscriptionPlan.subscribe(res=>{
      this.planDetail = res;
      console.log(this.planDetail);
    });

    this.userService.addOnsSubject.subscribe(res=>{
      console.log(res);
      this.addOnsDetail = res;
    });

    this.userService.saveFormSubject.subscribe(res=>{
      console.log(res);
      this.personalInfo = res;
    })
    // this.getPersonalInfo();
  }

  submitData(){
    this.router.navigateByUrl('/thank-you');
  }

  getPersonalInfo(){
    this.userService.getUserData().subscribe((res:user[])=>{
      console.log(res);
    })
  }
}

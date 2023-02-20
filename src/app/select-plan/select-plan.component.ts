import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrMessageService } from '../shared/toastr-message.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent implements OnInit {

  //----------------------------------------------
  value: boolean;
  plans: any[];
  planDetail!: any[];
  selectedPlan! : boolean;
  goback : boolean ;
  planChange: boolean;
  planSelected: boolean;
  //----------------------------------------------

  //----------------------------------------------
  constructor( private userService : UserService, private toastrmessageService : ToastrMessageService, private router :Router){
    this.value=false;
    this.selectedPlan=false;
    this.goback=false;
    this.planChange=false;
    this.planSelected=false;

    this.plans = [
      {
        planid :1,
        planName : "Arcade",
        planvalue: 9,
        planimg : "../../assets/images/icon-arcade.svg"
      },
      {
        planid :2,
        planName : "Advance",
        planvalue: 12,
        planimg : "assets/images/icon-advanced.svg"
      },
      {
        planid :3,
        planName : "Pro",
        planvalue: 15,
        planimg: "assets/images/icon-pro.svg"
      }
    ]
  }
  //----------------------------------------------

  //----------------------------------------------
  ngOnInit(): void {
  }

  /**
   * check plan is selected or not
   */
  onSelected(){
    this.planSelected = true;
    console.log(this.planSelected);
  }

  /**
   * toggle monthly and yearly cards
   */
  onToggle(){
    this.value = !this.value;
        console.log(this.planChange);

        if(this.planChange==true){
          this.planChange=false;
          this.plans[0].planvalue=9;
          this.plans[1].planvalue=12;
          this.plans[2].planvalue=15;
          // this.planChange=true
        }else {
          this.planChange=true;
          this.plans[0].planvalue=90;
          this.plans[1].planvalue=120;
          this.plans[2].planvalue=150;
          // this.planChange=false
        }
}

/**
 * get planDetails
 * @param res
 */
checkRadio(res:any[]){
  this.selectedPlan = true;
  this.planDetail = res;
}

/**
 * save selected plan and send to the summary component
 */
savePlan(){
  this.userService.subscriptionPlan.next(this.planDetail);
  console.log(this.planDetail);
  this.toastrmessageService.showSuccess("Subscription card added successfully");
  this.userService.planChangeSubject.next(this.planChange);
  this.router.navigateByUrl('/add-ons');
}

/**
 * patch form
 */
patchForm(){
  this.goback = true;
  this.userService.gobackSubject.next(this.goback);
}
}


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
  value: boolean;
  plans: any[];
  planDetail!: any[];
  selectedPlan! : boolean;
  goback : boolean ;
  planChange: boolean;

  constructor( private userService : UserService, private toastrmessageService : ToastrMessageService, private router :Router){
    this.value=false;
    this.selectedPlan=false;
    this.goback=false;
    this.planChange=false;

    this.plans = [
      {
        id :1,
        planName : "Arcade",
        value: "$9/mo",
        // yearlyValue: "$90/mo",
        img : "../../assets/images/icon-arcade.svg"
      },
      {
        id :2,
        planName : "Advance",
        value: "$12/mo",
        // yearlyValue: "$120/mo",
        img : "assets/images/icon-advanced.svg"
      },
      {
        id :3,
        planName : "Pro",
        value: "$15/mo",
        // yearlyValue: "$150/mo",
        img: "assets/images/icon-pro.svg"
      }
    ]
  }
  ngOnInit(): void {
  }
  onToggle(){
    this.value = !this.value;

    // if(this.planChange == true){
      //   this.planChange = false;
      // }else{
          // this.planChange=true;
        // }
        console.log(this.planChange);

        if(this.planChange==true){
          this.planChange=false
          this.plans[0].value="$9/mo"
          this.plans[1].value="$12/mo"
          this.plans[2].value="$15/mo"
          // this.planChange=true
        }else {
          this.planChange=true
          this.plans[0].value="$90/yr"
          this.plans[1].value="$120/yr"
          this.plans[2].value="$150/yr"
          // this.planChange=false

        }
        // this.planChange=this.planChange == true ? false:true;
}
checkRadio(res:any[]){
  this.selectedPlan = true;
  this.planDetail = res;
}
savePlan(){
  this.userService.subscriptionPlan.next(this.planDetail);
  console.log(this.planDetail);
  this.toastrmessageService.showSuccess("Subscription card added successfully");
  this.router.navigateByUrl('/add-ons')
}
patchForm(){
  this.goback = true;
  this.userService.gobackSubject.next(this.goback);
}
}


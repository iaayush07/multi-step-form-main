import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent {
  value: boolean;
  plans: any[];
  planDetail!: any[];
  selectedPlan! : boolean;
  goback : boolean = false;

  constructor(private formBuilder : FormBuilder, private userService : UserService){
    this.value=false;
    this.selectedPlan=false;

    this.plans = [
      {
        id :1,
        planName : "Arcade",
        monthlyvalue: "$9/mo",
        yearlyValue: "$90/mo",
        img : "../../assets/images/icon-arcade.svg"
      },
      {
        id :2,
        planName : "Advance",
        monthlyvalue: "$12/mo",
        yearlyValue: "$120/mo",
        img : "assets/images/icon-advanced.svg"
      },
      {
        id :3,
        planName : "Pro",
        monthlyvalue: "$15/mo",
        yearlyValue: "$150/mo",
        img: "assets/images/icon-pro.svg"
      }
    ]
  }
  onToggle(){
    this.value = !this.value
}
checkRadio(res:any[]){
  this.selectedPlan = true;
  this.planDetail = res;
}
savePlan(){
  this.userService.subscriptionPlan.next(this.planDetail);
  console.log(this.planDetail);

}
patchForm(){
  this.goback = true;
  this.userService.gobackSubject.next(this.goback);
}
}


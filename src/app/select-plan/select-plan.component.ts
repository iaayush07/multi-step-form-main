import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent {
  value: boolean;
  plans: any[];
  planDetail: any;

  constructor(private formBuilder : FormBuilder, private userService : UserService){
    this.value=false;

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
    if(this.value==false){
    this.value = true;
  }else{
    this.value=false
  }


  //   console.log("click");
  // console.log(this.value);

}
checkRadio(res:any){
  console.log(res);
  this.planDetail = res;
}
savePlan(){
  this.userService.subjectData.next(this.planDetail);
  console.log(this.planDetail);
}
}


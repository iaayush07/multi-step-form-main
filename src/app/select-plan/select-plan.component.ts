import { Component } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent {
  value: boolean;
  constructor(){
this.value=false;
  }
  onToggle(){
    if(this.value==false){
    this.value = true;
  }else{
    this.value=false
  }

//   console.log("click");
// console.log(this.value);

}}

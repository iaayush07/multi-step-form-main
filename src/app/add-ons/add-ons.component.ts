import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss']
})
export class AddOnsComponent {
public serviceForm : FormGroup;
public onlineServicess! : boolean;
public largeStorage! : boolean;
public customizeForm! : boolean;
public services: any[];
public ServiceDetails : any;

constructor(
  private formBuilder : FormBuilder
){
  this.serviceForm = this.formBuilder.group({
    onlineService:['',Validators.required],
    largeStorage:['',Validators.required],
    customizeForm:['',Validators.required]
  });

  this.services = [
    {
      id:1,
      serviceName: "Online Service",
      serviceDetail: "Access to multiple games",
      value : "+$1/month"
    },
    {
      id:2,
      serviceName: "Large Storage",
      serviceDetail: "Extra 1TB of cloud storage",
      value : "+$2/month"
    },
    {
      id:3,
      serviceName: "Customizable Profile",
      serviceDetail: "Custom theme on your profile",
      value : "+$3/month"
    }
  ]

}

saveServices(){
  console.log(this.ServiceDetails);
}
check(res:any){
  this.onlineServicess = this.serviceForm.value.onlineService;
  this.ServiceDetails=res;
  console.log(res);

  // console.log(this.serviceForm.value.onlineService);
  // console.log(e.target.checked);
}
}

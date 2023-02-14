import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrMessageService } from '../shared/toastr-message.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss']
})
export class AddOnsComponent {
public serviceForm : FormGroup;
public onlineServicess! : boolean;
public largeStorage! : boolean;
public selectedService! : boolean;
public customizeForm! : boolean;
public services: any[];
public serviceDetails: any[];

constructor(
  private formBuilder : FormBuilder, private userService : UserService, private toastrmessageSerice : ToastrMessageService,private router : Router
){
  this.serviceForm = this.formBuilder.group({
    onlineService:['',Validators.required],
    largeStorage:['',Validators.required],
    customizeForm:['',Validators.required]
  });
this.serviceDetails=[];
this.selectedService=false;
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

check(res:any){
  this.selectedService = true;
  // this.onlineServicess = this.serviceForm.value.onlineService;
  this.serviceDetails.push(res);
  console.log(this.serviceDetails);

  // console.log(this.serviceForm.value.onlineService);
  // console.log(e.target.checked);
}
saveServices(){
  console.log(this.serviceDetails);
  this.userService.addOnsSubject.next(this.serviceDetails);
  this.toastrmessageSerice.showSuccess("Serices added SuccessFully!");
  this.router.navigateByUrl('/summary')
}
}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrMessageService } from '../shared/toastr-message.service';
import { UserService } from '../shared/user.service';
import { user } from '../user.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit{
  public userForm : FormGroup;
  public isSubmitted: boolean;
  public patchForm? : any;

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
    private toastrMessageService : ToastrMessageService,
    private router : Router
    )
    {
    this.userForm = this.formBuilder.group({
      name:['', [Validators.required,Validators.maxLength(25), Validators.pattern('^[a-zA-Z]+$')]],
      email:['', [Validators.required,Validators.maxLength(50), Validators.pattern(/^[A-Za-z0-9]([A-Za-z0-9\_\.]*)+@(([A-Za-z0-9-]{2,})+\.)+[A-Za-z\-]{2,4}$/)]],
      phone:['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]]
    })

    this.isSubmitted = false;
  }
  ngOnInit(): void {
    // console.log(this.patchForm);
    this.userService.gobackSubject.subscribe(res=>{
      console.log(res);

      if(res){
        this.userService.saveFormSubject.subscribe((res)=>{
          console.log(res.value);
          this.patchForm=res

          this.userForm.patchValue(this.patchForm)
        });
      }
    })
    console.log(this.isSubmitted);
  }
  SaveForm(){
    this.isSubmitted = true;
    this.userService.formSubmitted.next(this.isSubmitted);
    this.userService.saveFormSubject.next(this.userForm.value);
    this.router.navigateByUrl('/select-plan');
    this.toastrMessageService.showSuccess("Info Added Successfully");
    console.log(this.isSubmitted);
    // if(this.isSubmitted == true){
    // }
    // })
  }
  //getter function for validation
  get validator(): { [key: string]: AbstractControl; } {
    return this.userForm.controls;
  }

}

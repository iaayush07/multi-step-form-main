import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  public userForm : FormGroup;
  public isSubmitted: boolean

  constructor(private formBuilder : FormBuilder){
    this.userForm = this.formBuilder.group({
      name:['', [Validators.required,Validators.maxLength(25), Validators.pattern('^[a-zA-Z]+$')]],
      email:['', [Validators.required,Validators.maxLength(50), Validators.pattern(/^[A-Za-z0-9]([A-Za-z0-9\_\.]*)+@(([A-Za-z0-9-]{2,})+\.)+[A-Za-z\-]{2,4}$/)]],
      phone:['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]]
    })

    this.isSubmitted = false;
  }
  SaveForm(){
    this.isSubmitted = true;
    console.log(this.userForm.controls);
  }
  //getter function for validation
  get validator(): { [key: string]: AbstractControl; } {
    return this.userForm.controls;
  }
}

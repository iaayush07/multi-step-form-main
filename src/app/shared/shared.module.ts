import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { ToastrMessageService } from './toastr-message.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    UserService,
    ToastrMessageService
  ]
})
export class SharedModule { }

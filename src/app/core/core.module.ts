import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './services/Guard/auth.guard';



@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AsideComponent
  ],
  providers:[
    AuthGuard
  ]
})
export class CoreModule { }

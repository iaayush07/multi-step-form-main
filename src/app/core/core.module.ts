import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './services/Guard/auth.guard';
import {OverlayModule} from '@angular/cdk/overlay';
import { OverlayService } from './services/overlay.service';

@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule
  ],
  exports:[
    AsideComponent
  ],
  providers:[
    AuthGuard,
    OverlayService
  ]
})
export class CoreModule { }

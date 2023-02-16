import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { AuthGuard } from './core/services/Guard/auth.guard';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { SummaryComponent } from './summary/summary.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
    path: 'personal-info',
    component: PersonalInfoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'summary'
  },
  {
    path:'select-plan',
    component: SelectPlanComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'add-ons',
    component: AddOnsComponent,
    canActivate : [AuthGuard]

  },
  {
    path:'summary',
    component: SummaryComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'thank-you',
    component: ThankYouComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOnsComponent } from './add-ons/add-ons.component';
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
    redirectTo: 'personal-info' 
  },
  {
    path:'select-plan',
    component: SelectPlanComponent
  },
  {
    path:'add-ons',
    component: AddOnsComponent
  },
  {
    path:'summary',
    component: SummaryComponent
  },
  {
    path:'thank-you',
    component: ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

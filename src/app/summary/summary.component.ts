import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements OnInit {
  public planDetail : any;
  public addOnsDetail : any[];

  constructor(private userService:UserService){
    this.addOnsDetail = [];
  }

  ngOnInit(): void {
    this.userService.subscriptionPlan.subscribe(res=>{
      this.planDetail = res;
      console.log(this.planDetail.planName);
    });

    this.userService.addOnsSubject.subscribe(res=>{
      console.log(res);
      this.addOnsDetail = res;
    })
  }
}

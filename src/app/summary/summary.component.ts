import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {



  constructor(private userService:UserService){

  }

  ngOnInit(): void {
    this.userService.subjectData$.subscribe(res=>{
      console.log(res);
    })
  }
}

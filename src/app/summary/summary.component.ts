import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrMessageService } from '../shared/toastr-message.service';
import { OverlayService } from '../core/services/overlay.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements OnInit {

  @ViewChild('printableArea') printableArea!: ElementRef<HTMLInputElement>;
  public planDetail : any;
  public addOnsDetail : any[];
  public personalInfo : any;
  public durationChange! :boolean;
  public serviceValue! : number;
  public totalValue! : number;
  public finalData: any;
  public services: any;
  public myDivSaved: any;

  constructor(private userService:UserService, private router : Router,private modalService: NgbModal, private toastrSertvice : ToastrMessageService, private overlayService : OverlayService){
    this.addOnsDetail = [];
    this.finalData = [];
  }

  @ViewChild('printableArea') myDiv!: ElementRef;
  ngAfterViewInit() {
    console.log();
    this.myDivSaved =this.myDiv.nativeElement.innerHTML;
}
  ngOnInit(): void {
    this.userService.subscriptionPlan.subscribe(res=>{
      this.planDetail = res;
      console.log(this.planDetail);
      console.log(this.planDetail.planvalue);
    });




    this.userService.addOnsSubject.subscribe(res=>{
      // console.log(res);
      this.addOnsDetail = res;
      this.services = {...this.addOnsDetail}
      // for (const value of this.addOnsDetail.values()) {
      //   this.services = value
      //   console.log(this.services);
      // }
      // console.log(this.services);
      this.serviceValue = res.map((a:any)=> a.serviceValue).reduce((a:any, b:any) => a + b, 0);
      // console.log(this.serviceValue);
      this.totalValue = this.serviceValue + this.planDetail.planvalue;
      // console.log(this.totalValue);
    });

    this.userService.saveFormSubject.subscribe(res=>{
      console.log(res);
      this.personalInfo = res;
    });

    this.userService.planChangeSubject.subscribe(res=>{
      console.log(res);
      this.durationChange = res;
    });

    // this.finalData.push(this.personalInfo,this.planDetail,this.addOnsDetail);
    // console.log(this.finalData);
    this.finalData = {...this.personalInfo,...this.planDetail,...{"services" :[this.services]}}
    console.log(this.finalData);

    // this.getPersonalInfo();
  }

  submitData(){
    this.userService.addUserData(this.finalData).subscribe(res=>{
      console.log(res);
      this.toastrSertvice.showSuccess('Your data added successfully!')
    })
    this.router.navigateByUrl('/thank-you');
  }
  openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true });
	}

  planChange(){
    this.router.navigateByUrl('/select-plan')
  }

  print(areaID:any){
    // var printContent = document.getElementById(areaID)!.innerHTML;
    var originalContent = document.body.innerHTML;
    // document.body.innerHTML = printContent;
    // document.body.innerHTML = originalContent;

    var printContent = this.myDivSaved

    document.body.innerHTML = printContent

    window.print();

    // document.
    document.body.innerHTML = originalContent

  }

  // orderSummary(){
  //   this.overlayService.open(PaymentComponent)
  // }
  // getPersonalInfo(){
  //   this.userService.getUserData().subscribe((res:user[])=>{
  //     console.log(res);
  //   })
  // }
}


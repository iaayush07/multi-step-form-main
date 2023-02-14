import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastrMessageService {

  constructor(private toastr: ToastrService) {}

  showSuccess(message:string) {
    this.toastr.success(message);
  }
}

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastrMessageService {

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Data Added SuccessFully !', 'Success');
  }
}

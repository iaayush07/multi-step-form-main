import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  public isFormSubmitted! : boolean;

  constructor(private router : Router, private userService : UserService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      this.userService.formSubmitted.subscribe(res=>{
        console.log(res);
        this.isFormSubmitted = res;
      });
      if(this.isFormSubmitted){
        return true;
      }
      this.router.navigateByUrl('/personal-info');
      return false;
  }
}

import { UserAuthService } from './../user-auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: UserAuthService, public router: Router) {}
  canActivate(): boolean {
    console.log('iam in guard');
    if (!this.auth.loggedUser) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

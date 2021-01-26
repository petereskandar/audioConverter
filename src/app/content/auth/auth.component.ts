import { Router } from '@angular/router';
import { UserAuthService } from './../../services/user-auth.service';
import { ChangeDetectorRef, Component, OnInit, NgZone } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  title = 'amplify-angular-auth';
  authState: AuthState;

  constructor(private ref: ChangeDetectorRef,
              private userService: UserAuthService,
              private router: Router,
              private ngZone: NgZone) {}

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.userService.setLoggedUser(authData as CognitoUserInterface);
      this.ref.detectChanges();
      if(this.authState == 'signedin') {
        this.ngZone.run(() => this.router.navigate(['./upload'], { queryParams: { index: 1 } }));
      }
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}

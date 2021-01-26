import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { CognitoUserInterface } from '@aws-amplify/ui-components';
import {Auth} from 'aws-amplify';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user: CognitoUserInterface | undefined;
  constructor() { }

  async getUserAuthorized() {
    // cognito identity pool --> unauthorized access
    AWS.config.region = environment.REGION;
    AWS.config.credentials = await new AWS.CognitoIdentityCredentials({
      IdentityPoolId: environment.IDENTITY_POOL_ID,
      RoleArn: environment.ROLEARN
    });

    return new Promise((resolve, reject) => resolve(true));
  }

  // save logged user data
  setLoggedUser(user: CognitoUserInterface | undefined) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  get loggedUser() {
    return this.user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
  }

  signOut() {
    return new Promise((resolve, reject) => {
      Auth.signOut().then((res) => {
        this.setLoggedUser(null);
        resolve(res);
      }).catch((err) => reject(err));
    })

  }
}

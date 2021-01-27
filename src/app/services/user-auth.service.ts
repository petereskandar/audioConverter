import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { CognitoUserInterface } from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user: CognitoUserInterface | undefined;
  constructor() { }

  async getUserAuthorized() {
    return new Promise((resolve, reject) => resolve(true));
  }

  // save logged user data
  setLoggedUser(cognitoUser: CognitoUserInterface | undefined) {
    this.user = cognitoUser;
    this.setAWSCredentials(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  // set AWS Security & Access tokens
  setAWSCredentials(cognitoUser: CognitoUserInterface | undefined) {
    AWS.config.region = environment.REGION;
    if(cognitoUser != null) {
      cognitoUser.getSession((err, result) => {
        if(result) {
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'eu-west-3:fd5f34c8-610d-4dee-89fb-f864398cd55e',
            Logins: {
              'cognito-idp.eu-west-3.amazonaws.com/eu-west-3_pNetY4Lfm' : result.getIdToken().getJwtToken()
            }
          });
        }
      });
    }
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

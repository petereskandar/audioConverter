import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

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
}

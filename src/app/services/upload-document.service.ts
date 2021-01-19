import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class UploadDocumentService {

  constructor() { }

  // upload document to S3 Bucket
  UploadDocumentS3(file, userEmail) {
    const S3 = new AWS.S3();
    const options = {partSize: 10 * 1024 * 1024, queueSize: 1};
    return new Promise((resolve, reject) => {
      S3.upload({
        Key:  'Transcribe/'+ file['name'],
        Body: file,
        Bucket: environment.BUCKET,
        ACL: 'public-read',
        ContentType: file['type'],
        Tagging: `Email=${userEmail}`
      }, options, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })
  }
}

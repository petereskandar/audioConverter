import { UserAuthService } from './../../services/user-auth.service';
import { UploadDocumentService } from '../../services/upload-document.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fileSizeValidator, requiredFileType } from './file-upload/file-validators/file-custom-validators';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})

export class UploadDocumentComponent implements OnInit {
  userDataFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private uploadService: UploadDocumentService,
              private router: Router,
              private userService: UserAuthService) {
      }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.userDataFormGroup = this._formBuilder.group({
      STEP_1: this._formBuilder.group({ // set default value to logged user email
        emailCtrl: [this.userService.loggedUser.attributes.email , [Validators.required, Validators.email]]
      }),
      STEP_2: this._formBuilder.group({
        fileCtrl: ['', [Validators.required, fileSizeValidator(), requiredFileType('mp3', 'mp4')]]
      }),
    });
  }

  submitRequest() {
    if(this.userDataFormGroup.valid) {
      this.uploadService.UploadDocumentS3(this.userDataFormGroup.get('STEP_2.fileCtrl').value,
                                          this.userDataFormGroup.get('STEP_1.emailCtrl').value)
                                          .subscribe(console.log);
                                          //.then(console.log);
      this.router.navigate(['./confirm']);
    }
  }

  // check if formControl has errors
  hasError(field: string, error: string ) {
    const control = this.userDataFormGroup.get(field);
    return control.dirty && control.hasError(error);
  }
}

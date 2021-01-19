import { UploadDocumentService } from '../../services/upload-document.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
  userDataFormGroup: FormGroup;
  uploadedFile: File;

  constructor(private _formBuilder: FormBuilder,
              private cd: ChangeDetectorRef,
              private uploadService: UploadDocumentService,
              private router: Router) {}

  ngOnInit() {
    this.userDataFormGroup = this._formBuilder.group({
      STEP_1: this._formBuilder.group({
        emailCtrl: ['', [Validators.required, Validators.email]]
      }),
      STEP_2: this._formBuilder.group({
        fileCtrl: ['', Validators.required]
      }),
    });
  }

  onFileChange(event) {
    if(event.target.files && event.target.files.length) {
      [this.uploadedFile] = event.target.files;
    }
  }

  submitRequest() {
    if(this.userDataFormGroup.valid) {
      this.uploadService.UploadDocumentS3(this.uploadedFile,
                                          this.userDataFormGroup.get('STEP_1.emailCtrl').value)
                                          .then(console.log);
      this.router.navigate(['./confirm']);
    }
  }
}

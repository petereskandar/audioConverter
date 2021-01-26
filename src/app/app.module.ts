import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadDocumentComponent } from './content/upload-document/upload-document.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginFactory } from './core/initializer/AmbientModeLoader';
import { UserAuthService } from './services/user-auth.service';
import { ConfirmationComponent } from './content/confirmation/confirmation.component';
import { AuthComponent } from './content/auth/auth.component';
import { AmplifyAngularModule, AmplifyService  } from 'aws-amplify-angular';
import {AmplifyUIAngularModule} from "@aws-amplify/ui-angular";
import { AuthGuardService } from './services/guards/auth-guard.service';
import { FileUploadComponent } from './content/upload-document/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadDocumentComponent,
    ConfirmationComponent,
    AuthComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
   // AmplifyAngularModule,
    AmplifyUIAngularModule
  ],
  providers: [
    AmplifyService,
    AuthGuardService,
    { provide: APP_INITIALIZER, useFactory: UserLoginFactory, deps: [UserAuthService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

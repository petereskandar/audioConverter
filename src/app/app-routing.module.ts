import { AuthComponent } from './content/auth/auth.component';
import { UploadDocumentComponent } from './content/upload-document/upload-document.component';
import { ConfirmationComponent } from './content/confirmation/confirmation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/guards/auth-guard.service';


const routes: Routes = [
  {path: '' , component: AuthComponent, pathMatch: 'full'},
  {path: 'upload' , component: UploadDocumentComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
  {path: 'confirm', component: ConfirmationComponent, pathMatch: 'full', canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

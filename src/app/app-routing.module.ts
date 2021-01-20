import { UploadDocumentComponent } from './content/upload-document/upload-document.component';
import { ConfirmationComponent } from './content/confirmation/confirmation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '' , component: UploadDocumentComponent},
  {path: 'confirm', component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

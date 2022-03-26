import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForntPageComponent } from './fornt-page/fornt-page.component';

const routes: Routes = [
  {path:'',component:ForntPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

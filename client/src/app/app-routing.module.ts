import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaIntroComponent } from './aa-intro/aa-intro.component';
import { BaNeolithicComponent } from './ba-neolithic/ba-neolithic.component';
import { BbMesopotamiaComponent } from './bb-mesopotamia/bb-mesopotamia.component';

const routes: Routes = [
  { path: 'intro', component: AaIntroComponent},
  { path: 'neolithic', component: BaNeolithicComponent},
  { path: 'mesopotamia', component: BbMesopotamiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

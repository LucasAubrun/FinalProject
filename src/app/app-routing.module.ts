import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { PriveComponent } from './prive/prive.component';
//import { PubliqueComponent } from './publique/publique.component';

const routes: Routes = [
//{component: HomeComponent, path: 'home'},
//{component: PriveComponent, path: 'prive'},
//{component: PubliqueComponent, path: 'publique'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationequipesComponent } from './creationequipes/creationequipes.component';
import { EquipesComponent } from './equipes/equipes.component';

const routes: Routes = [
{component: EquipesComponent, path: "equipes"},
{component: CreationequipesComponent, path: "creationequipes"}
//import { HomeComponent } from './home/home.component';
//import { PriveComponent } from './prive/prive.component';
//import { PubliqueComponent } from './publique/publique.component';
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
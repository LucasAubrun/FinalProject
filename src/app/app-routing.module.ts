import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationequipesComponent } from './creationequipes/creationequipes.component';
import { EquipesComponent } from './equipes/equipes.component';
import { ActivitesComponent } from './activites/activites.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{component: EquipesComponent, path: "equipes"},
{component: CreationequipesComponent, path: "creationequipes"},
{component: ActivitesComponent, path: 'activites'},
{component: HomeComponent, path: 'home'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
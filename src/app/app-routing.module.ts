import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationequipesComponent } from './creationequipes/creationequipes.component';
import { EquipesComponent } from './equipes/equipes.component';
import { ActivitesComponent } from './activites/activites.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
{component: EquipesComponent, path: "equipes"},
{component: CreationequipesComponent, path: "creationequipes"},
{component: ActivitesComponent, path: 'activites'},
{component: HomeComponent, path: 'home'},
{component: ConnexionComponent, path: 'login'},
{component: InscriptionComponent, path: 'register'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
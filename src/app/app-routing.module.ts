import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationequipesComponent } from './creationequipes/creationequipes.component';
import { EquipesComponent } from './equipes/equipes.component';
import { ActivitesComponent } from './activites/activites.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { MesevenementsComponent } from './mesevenements/mesevenements.component';
import { CreationEvenementComponent } from './creation-evenement/creation-evenement.component';


const routes: Routes = [
  { component: EquipesComponent, path: "equipes" },
  { component: CreationequipesComponent, path: "creationequipes" },
  { component: ActivitesComponent, path: 'activites' },
  { component: HomeComponent, path: 'home' },
  { component: ConnexionComponent, path: 'connexion' },
  { component: InscriptionComponent, path: 'inscription' },
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: '', redirectTo: '/inscription', pathMatch: 'full' },
  { component: EvenementsComponent, path: "evenement" },
  { component: HomeComponent, path: 'home' },
  { component: MesevenementsComponent, path: 'mesevenements' },
  { component: CreationEvenementComponent, path: 'creation-evenement' },
  { path: '', redirectTo: '/creation-evenement', pathMatch: 'full' },
  { path: '', redirectTo: '/mesevenements', pathMatch: 'full' },
];



@NgModule({

 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
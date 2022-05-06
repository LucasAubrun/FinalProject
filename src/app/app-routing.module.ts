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
import { ConnexionadminComponent } from './connexionadmin/connexionadmin.component';
import { AdminComponent } from './admin/admin.component';
import { MembresComponent } from './membres/membres.component';
import { CommunauteComponent } from './communaute/communaute.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';


const routes: Routes = [
  { component: EquipesComponent, path: "equipes" },
  { component: CreationequipesComponent, path: "creationequipes" },
  { component: ActivitesComponent, path: 'activites' },
  { component: HomeComponent, path: 'home' },
  { component: ConnexionComponent, path: 'connexion' },
  { component: InscriptionComponent, path: 'inscription' },
  { component: MembresComponent, path: 'membres' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { component: EvenementsComponent, path: "evenement" },
  { component: MesevenementsComponent, path: 'mesevenements' },
  { component: ConnexionadminComponent, path: 'connexionAdmin' },
  { component: AdminComponent, path: 'admin' },
  { component: CreationEvenementComponent, path: 'creation-evenement' },
  { component: ModifierProfilComponent, path:'modifier-profil'}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
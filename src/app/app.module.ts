import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ActivitesComponent } from './activites/activites.component';
import { NewactiviteComponent } from './newactivite/newactivite.component';

import { EquipesComponent } from './equipes/equipes.component';
import { CreationequipesComponent } from './creationequipes/creationequipes.component';
import { InscriptionComponent } from './inscription/inscription.component';

import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { CreationEvenementComponent } from './creation-evenement/creation-evenement.component';
import { FooterComponent } from './footer/footer.component';
import { MesevenementsComponent } from './mesevenements/mesevenements.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivitesComponent,
    NewactiviteComponent,
    EquipesComponent,
    CreationequipesComponent,
    InscriptionComponent,
    MenuComponent,
    ConnexionComponent,
    EvenementsComponent,
    CreationEvenementComponent,
    LoginComponent,
    HomeComponent,
    LoginComponent,
    InscriptionComponent,
    FooterComponent,
    MesevenementsComponent
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

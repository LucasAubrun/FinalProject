import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ActivitesComponent } from './activites/activites.component';
import { EquipesComponent } from './equipes/equipes.component';
import { CreationequipesComponent } from './creationequipes/creationequipes.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { CreationEvenementComponent } from './creation-evenement/creation-evenement.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivitesComponent,
    EquipesComponent,
    CreationequipesComponent,
    InscriptionComponent,
    EvenementsComponent,
    CreationEvenementComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

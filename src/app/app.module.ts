import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitesComponent } from './activites/activites.component';
import { EquipesComponent } from './equipes/equipes.component';
import { CreationequipesComponent } from './creationequipes/creationequipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitesComponent,
    EquipesComponent,
    CreationequipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

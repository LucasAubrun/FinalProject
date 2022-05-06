import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import { EquipeService } from '../service/equipe.service';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-creationequipes',
  templateUrl: './creationequipes.component.html',
  styleUrls: ['./creationequipes.component.css']
})
export class CreationequipesComponent implements OnInit {

  //♦♣♦♣♦♣♦♣♦♣ création de variable ♦♣♦♣♦♣♦♣♦♣//
  baseURL: string = "http://localhost:8482/";
  resultMessage: string = " ";
  resultColor: string = " ";
  EquipesId1: any;
  TtEquipeId: any;
  EquipeActuelle: any;
  equipe: any;
  LesMembres: any; //a supprimer

  //♦♣♦♣♦♣♦♣♦♣ fin création de variable ♦♣♦♣♦♣♦♣♦♣//

  constructor(private http: HttpClient,
    public authentificationService: AuthentificationService,
    public equipeservice: EquipeService,
    private route: Router,
    private url: UrlService) { }

  /*
      goSurEquipe(){
        this.http.get(this.baseURL + "equipes/" + "La DreamTeam").subscribe({
          next: (data) => { this.goEquipe = data;
          if (this.goEquipe != null) {
            this.equipeservice.setEquipe(this.goEquipe)
            console.log(data);
            this.resultMessage = "";
              this.route.navigateByUrl("equipes");
            } },
            error: (err) => { console.log(err) }
          });
        }
  */

  ngOnInit(): void {
    this.callEquipeId1();
    this.callTtEquipeId();

    this.callMember();//a supprimer
    /*
    this.goSurEquipe2();*/
  }

  //♦♣♦♣♦♣♦♣♦♣ recherche des équipes créer par un membre ♦♣♦♣♦♣♦♣♦♣//


  callEquipeId1() {
    this.http.get(this.url.baseURL + "equipes/membres/" + this.authentificationService.getUserConnect().id).subscribe({
      next: (data) => { this.EquipesId1 = data },
      error: (err) => { console.log(err) }
    });
  }




  //♦♣♦♣♦♣♦♣♦♣ fin recherche des équipes ♦♣♦♣♦♣♦♣♦♣//

  //♦♣♦♣♦♣♦♣♦♣ recherche de ttes les équipes créer par un membre ♦♣♦♣♦♣♦♣♦♣//
  //  callTtEquipeId() {
  //    this.http.get(this.baseURL + "associations/membres/1").subscribe({
  //      next: (data) => { this.TtEquipeId = data },
  //      error: (err) => { console.log(err) }
  //   });
  //  }

  callTtEquipeId() {
    this.http.get(this.url.baseURL + "associations/membres/" + this.authentificationService.getUserConnect().id).subscribe({
      next: (data) => {
        this.TtEquipeId = data;
        if (this.equipe != null) {
          this.equipeservice.setEquipe(this.equipe)
          console.log(data);
        }
      },
      error: (err) => { console.log(err) }
    });
  }

  //♦♣♦♣♦♣♦♣♦♣ Fin recherche de ttes les équipes créer par un membre ♦♣♦♣♦♣♦♣♦♣//


  //♦♣♦♣♦♣♦♣♦♣ début création d'équipe ♦♣♦♣♦♣♦♣♦♣//




  creationEquipe(val: any) {
    let equipe = {
      nom: val.nom,
      "membres": {
        "id": this.authentificationService.getUserConnect().id
      },
    };
    console.log(equipe);
    this.http.post(this.url.baseURL + "equipes", equipe)
      .subscribe({
        next: (data) => {
          this.equipe = data;
          if (this.equipe != null) {
            this.equipeservice.setEquipe(this.equipe)
            console.log(data);
            this.resultMessage = "";
            this.route.navigateByUrl("equipes");
          }
          this.resultMessage = "Votre équipe est bien créée";
          this.resultColor = "green"
        },
        error: (err) => {
          console.log(err);
          if (err.error.trace.includes("Duplicate")) {
            this.resultMessage = "Cette equipe existe déja.."
          }
          else
            this.resultMessage = "Une erreur s'est produite"
          this.resultColor = "red";
        }
      });

  }
  //♦♣♦♣♦♣♦♣♦♣ association ♦♣♦♣♦♣♦♣♦♣//




  association() {
    let asso = {
      "membres": {
        "id": this.authentificationService.getUserConnect().id
      },
      "equipes": {
        "id": this.equipeservice.getEquipe().id
      }
    }
    console.log(asso);
    this.http.post(this.url.baseURL + "associations/inviter", asso).subscribe({
      next: (data) => { },
      error: (err) => { console.log(err) }
    })
      ;
  }

  //♦♣♦♣♦♣♦♣♦♣ association ♦♣♦♣♦♣♦♣♦♣//


  //♦♣♦♣♦♣♦♣♦♣ a supprimer ♦♣♦♣♦♣♦♣♦♣//
  callMember() {
    this.http.get(this.url.baseURL + "associations/equipe/" + this.equipeservice.getEquipe().id).subscribe({
      next: (data) => { this.LesMembres = data },
      error: (err) => { console.log(err) }
    });
  }
  //♦♣♦♣♦♣♦♣♦♣ a supprimer ♦♣♦♣♦♣♦♣♦♣//

  //♦♣♦♣♦♣♦♣♦♣ fin création d'équipe ♦♣♦♣♦♣♦♣♦♣//

  //♦♣♦♣♦♣♦♣♦♣  trouver l'equipe   ♦♣♦♣♦♣♦♣♦♣//

}







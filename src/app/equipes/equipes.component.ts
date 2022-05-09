import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../service/equipe.service';
import { AuthentificationService } from '../service/authentification.service';
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';
import { UrlService } from '../service/url.service';



@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Création de varialbe   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //

  baseURL: string = "http://localhost:8082/";
  invitationEq: any;
  resultMessageInvit: any;
  resultMessageEv: any;
  errorInvit: any;
  LesMembres: any;
  resultColor: any;
  LesEvenements: any;
  bonjour = this.equipeservice.getEquipe().id;
  
  membreall: any;
  evenementall: any;
  index: any;
  index2: any;

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Invitation   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //


  constructor(private http: HttpClient,
    public authService: AuthentificationService,
    public equipeservice: EquipeService,
    private route: Router,
    private url: UrlService) { }




  ngOnInit(): void {
    this.callMember();
    this.callEvenement();
    this.getAllMember();
    this.getAllEvenement();
  }

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    récuperer l'equipe   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //



  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Invitation   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //

  /* FindIdByMail(val: any){
     
     mail: val.mail
     this.http.post(this.url.baseURL + "membre/id/" + mail).subscribe({
   }*/


  sendinvitationEq(val: any) {
    let invitations = {
      "membres": {
        "id": val.id
      },
      "equipes": {
        "id": this.equipeservice.getEquipe().id
      }

    };
    console.log(invitations);
    this.http.post(this.url.baseURL + "associations/inviter", invitations).subscribe({
      next: (data) => {
        this.resultMessageInvit = "Invitation réussite";
        this.resultColor = "green"
      },
      error: (err) => {
        this.resultMessageInvit = "invitation impossible";
        this.resultColor = "red"
      }
    })
  }


  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Afficher les membres d'une équipes   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //


  callMember() {
    this.http.get(this.url.baseURL + "associations/equipe/" + this.equipeservice.getEquipe().id).subscribe({
      next: (data) => {
        this.LesMembres = data;
        console.log(data)
      },
      error: (err) => { console.log(err) }
    });
  }

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Afficher les membres d'une équiês   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //


  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Afficher les évenements   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //

  callEvenement() {
    this.http.get(this.url.baseURL + "associationsEV/equipe/" + this.equipeservice.getEquipe().id).subscribe({
      next: (data) => {
        this.LesEvenements = data;
        console.log(data)
      },
      error: (err) => { console.log(err) }
    });
  }

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    fin Afficher les évenements   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Ajouter evenement   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //

  AjouterEvenement(val: any) {
    let invitations = {
      "evenements": {
        "id": val.id
      },
      "equipes": {
        "id": this.equipeservice.getEquipe().id
      }
    };
    console.log(invitations);
    this.http.post(this.url.baseURL + "associationEV/ajouterEvEq", invitations).subscribe({
      next: (data) => {
        this.resultMessageEv = "Evenement ajouté";
        this.resultColor = "green"
      },
      error: (err) => {
        this.resultMessageEv = "Impossible d'ajouter l'évenement";
        this.resultColor = "red"
      }
    })
  }
  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠  fin  Ajouter evenement   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //


  getAllMember() {
    this.http.get(this.url.baseURL+"membre/get/all")
    .subscribe({
      next: (data) => {
        this.membreall = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
      });
  }


  getAllEvenement() {
    this.http.get(this.url.baseURL+"evenements/all")
    .subscribe({
      next: (data) => {
        this.evenementall = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
      });
  }

  /* 
 Trouver_association
 
 
 
 
 
 
   Exclureequipier(){
     this.http.get(this.url.baseURL + "Associations/supprimer/" + this.equipeservice.getEquipe().id).subscribe({
   }
 */
}




import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../service/equipe.service';
import { AuthentificationService } from '../service/authentification.service';
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';


@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Création de varialbe   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //

<<<<<<< HEAD
  baseURL: string = "http://localhost:8082/";
=======
  baseURL: string = "http://localhost:8080/";
>>>>>>> 301aa8298bdaf74b3c03afd3a2f0d4642428dd49
  invitationEq: any;
  resultMessageInvit: any;
  errorInvit: any;
  LesMembres: any;
  resultColor: any;
  bonjour = this.equipeservice.getEquipe().id;

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Invitation   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //


  constructor(private http: HttpClient,
    public authService: AuthentificationService,
    public equipeservice: EquipeService,
    private route: Router) { }




  ngOnInit(): void {
    this.callMember();
  }

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    récuperer l'equipe   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //



  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Invitation   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //

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
    this.http.post(this.baseURL + "associations/inviter", invitations).subscribe({
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
    this.http.get(this.baseURL + "associations/equipe/" + this.equipeservice.getEquipe().id).subscribe({
      next: (data) => { this.LesMembres = data },
      error: (err) => { console.log(err) }
    });
  }

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Afficher les membres d'une équiês   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //
}

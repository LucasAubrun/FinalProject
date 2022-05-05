import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../service/equipe.service';
import { AuthentificationService } from '../service/authentification.service';


@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Création de varialbe   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //

  baseURL: string = "http://localhost:8482/";
  invitationEq: any;
  resultMessageInvit: any;
  errorInvit: any;

  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Invitation   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //


  constructor(private http: HttpClient,
    public authService: AuthentificationService
    ) { }

  ngOnInit(): void {
  }

//  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    récuperer l'equipe   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //

//EquipeService.getEquipe;

 //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Invitation   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //

  sendinvitationEq(val: any) {
    let invitations = {
      idM: val.id,
    };
    console.log(invitations);
    this.http.post(this.baseURL + "inviter", invitations).subscribe({
      next: (data) => {
        this.resultMessageInvit = "invitation envoyée"
      },
      error: (err) => {
        this.errorInvit = "invitation impossible"
      }
    })
  }


  //  ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠    Fin Invitation   ♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠♥♦♣♠              //

}

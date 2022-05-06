import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-evenement',
  templateUrl: './creation-evenement.component.html',
  styleUrls: ['./creation-evenement.component.css']
})
export class CreationEvenementComponent implements OnInit {

  baseURL: string = "http://localhost:8080/";
  resultMessage: string = "";
  resultColor: string = "";

  constructor(private http: HttpClient,
    public authentificationService: AuthentificationService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }


  creerEvent(val: any) {
    let event = {
      nom: val.nom,
      date: val.date,
      adresse: val.adresse,
      recurrence: val.recurrence,
      niveau: val.niveau,
      description: val.description,
      nbmin: val.nbmin,
      nbmax: val.nbmax,
      nomActivite: val.nomActivite,
      valide: false,
      "createur": {
        "id": this.authentificationService.getUserConnect().id
      },
    };
    console.log(event);
    this.http.post("http://localhost:8080/Evenements/save", event)
      .subscribe({
        next: (data) => {
          this.resultMessage = "Évènement créé avec succès.";
          this.resultColor = "green";
        },
        error: (err) => { console.log(err) }
      })
    console.log(event)
  }
}


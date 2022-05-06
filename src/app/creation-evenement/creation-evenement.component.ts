import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthentificationService } from '../service/authentification.service';
import { UrlService } from '../service/url.service';
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
  activitesOne: any;

  constructor(private http: HttpClient,
    public authService: AuthentificationService,
    private url: UrlService
  ) { }

  ngOnInit(): void {
    this.callActivitesAll()
  }


  creerEvent(val: any) {
    let event = {
      nom: val.nom,
      date: val.date,
      adresse: val.adresse,
      recurrence: val.recurrence,
      niveau: val.niveau,
      description: val.description,
      nbMin: val.nbmin,
      nbMax: val.nbmax,
      nomActivite: val.activite,
      valide: false,
      "createur": {
        "id": this.authService.getUserConnect().id
      },
    };
    console.log(event);
    this.http.post(this.baseURL + "Evenements/save", event)
      .subscribe({
        next: (data) => {
          this.resultMessage = "Évènement créé avec succès.";
          this.resultColor = "green";
        },
        error: (err) => { console.log(err) }
      })
    console.log(event)
  }

  callActivitesAll() {
    this.http.get(this.baseURL + "activites/all")
      .subscribe({
        next: (data) => { this.activitesOne = data },
        error: (err) => { console.log(err) }
      });

  }
}

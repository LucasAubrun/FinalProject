import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthentificationService } from '../service/authentification.service';
import { UrlService } from '../service/url.service';
import { Router } from '@angular/router';
import { EquipeService } from '../service/equipe.service';

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
  evenement: any;

  constructor(private http: HttpClient,
    public authService: AuthentificationService,
    public equipeservice: EquipeService,
    private route: Router,
    private url: UrlService
  ) { }

  ngOnInit(): void {
    this.callActivitesAll()
  }


  creerEvent(val: any) {
    let evenement = {
      nom: val.nom,
      date: val.date,
      adresse: val.adresse,
      niveau: val.niveau,
      description: val.description,
      nbMin: val.nbmin,
      nbMax: val.nbmax,
      nomActivite: val.nomActivite,
      valide: false,
      "createur": {
        "id": this.authService.getUserConnect().id
      },
    };
    console.log(evenement);
    this.http.post(this.baseURL + "Evenements/save", evenement)
      .subscribe({
        next: (data) => {

          this.evenement = data;
          if (this.evenement != null) {
            this.equipeservice.setEvenementTargetInLocalStorage(this.evenement)
            console.log(data);
            this.resultMessage = "";
            this.route.navigateByUrl("evenements");
          }
          this.participant();
          this.resultMessage = "Votre evenement est bien créée";
          this.resultColor = "green"
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

  setExperience(id: any) {
    let xp = 4;
    console.log(xp);
    this.http.patch('http://localhost:8080/membre/set/xp/' + id, xp)
      .subscribe({
        next: (data) => { console.log(xp) },

        error: (err) => { console.log(err) }
      })
  }

  participant() {
    let part = {
      "membres": {
        "id": this.authService.getUserConnect().id
      },
      "evenements": {
        "id": this.equipeservice.getEvenementTargeted().id
      }
    }
    console.log(part);
    this.http.post(this.url.baseURL + "Participant/inviter", part).subscribe({
      next: (data) => { },
      error: (err) => { console.log(err) }
    })
      ;
  }
}

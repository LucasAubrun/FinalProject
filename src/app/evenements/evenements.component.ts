import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UrlService } from '../service/url.service';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {

  baseURL: string = "http://localhost:8080/";
  resultMessage: string = " ";
  resultColor: string = " ";
  EventRandId: any;
  ListEventRandId: any;
  EventByNom: any;
  invitationEv: any;
  resultMessageInvit: any;
  errorInvit: any;
  joinEv: any;
  EvenementsOne: any;
  p: any;

  constructor(private http: HttpClient,
    public authentificationService: AuthentificationService,
    private url: UrlService) { }

  ngOnInit(): void {
    //this.callEventRandId();
    //this.callEventRandAll();
    this.callEvenementsAll();
  }

  callEventRandId() {
    this.http.get(this.url.baseURL + "evenements/id").subscribe({

      next: (data) => { this.EventRandId = data },
      error: (err) => { console.log(err) }
    });
  }

  //callEventRandAll() {
  //  this.http.get("http://localhost:8080/evenement/multiple").subscribe({

  //   next: (data) => { this.ListEventRandId = data },
  //   error: (err) => { console.log(err) }
  //});
  // }


  callEventByNom(val: any) {
    let nom = val.nom
    this.http.get(this.url.baseURL + "evenements/nom/" + nom).subscribe({

      next: (data) => { this.EventByNom = data },
      error: (err) => { console.log(err) }

    });
    //console.log(this.p)
    //console.log(Object.values(this.p));
  }

  RejoindreEvent(val: any) {
    let rejoindre = {
      idM: val.id,
    };
    console.log(rejoindre);
    this.http.post(this.url.baseURL + "Participant/save", rejoindre).subscribe({
      next: (data) => {
        this.resultMessageInvit = "evenement rejoint"
      },
      error: (err) => {
        this.errorInvit = "impossible pour l'instant"
      }
    })
  }
  callEvenementsAll() {
    this.http.get(this.url.baseURL + "evenements/all")
      .subscribe({
        next: (data) => { this.EvenementsOne = data },
        error: (err) => { console.log(err) }
      });

  }

  participant(EvId: any) {
    let part = {
      "membres": {
        "id": this.authentificationService.getUserConnect().id
      },
      "evenements": {
        "id": EvId.id
      }
    }
    this.http.post(this.url.baseURL + "Participant/inviter", part).subscribe({
      next: (data) => { this.resultMessageInvit = "evenement rejoint" },
      error: (err) => { console.log(err) }
    })
      ;
  }

}
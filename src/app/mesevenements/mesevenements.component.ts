import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesevenements',
  templateUrl: './mesevenements.component.html',
  styleUrls: ['./mesevenements.component.css']
})
export class MesevenementsComponent implements OnInit {

  //♦♣♦♣♦♣♦♣♦♣ création de variable ♦♣♦♣♦♣♦♣♦♣//
  baseURL: string = "http://localhost:8080/";
  resultMessage: string = " ";
  TtEventId: any;
  result: string = "";

  //♦♣♦♣♦♣♦♣♦♣ fin création de variable ♦♣♦♣♦♣♦♣♦♣//

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.callTtEventId();
  }

  callTtEventId() {
    this.http.get(this.baseURL + "evenements/membres/1").subscribe({
      next: (data) => { this.TtEventId = data },
      error: (err) => { console.log(err) }
    });
  }

  SupprimerEvent(val: any) {
    let event = {
      nom: val.nom,
      date: val.date,
      adresse: val.adresse,
      recurrence: val.recurrence,
      niveau: val.niveau,
      description: val.decription,
      nbmin: val.nbmin,
      nbmax: val.nbmax,
      nomActivite: val.nomActivite,
      valide: false
    }

    this.http.post("Evenements/supprimer/{id}", event)
      .subscribe({
        next: (data) => { this.result = "Suppression réussie" },
        error: (err) => { console.log(err) }
      })
    console.log(event)
  }
}

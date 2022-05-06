import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creation-evenement',
  templateUrl: './creation-evenement.component.html',
  styleUrls: ['./creation-evenement.component.css']
})
export class CreationEvenementComponent implements OnInit {

  baseURL: string = "http://localhost:8482/";
  resultMessage: string = "";
  resultColor: string = "";

  constructor(private http: HttpClient) { }

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
      valide: false
    }

    this.http.post("http://localhost:8482/Evenements/save", event)
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


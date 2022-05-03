import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creation-evenement',
  templateUrl: './creation-evenement.component.html',
  styleUrls: ['./creation-evenement.component.css']
})
export class CreationEvenementComponent implements OnInit {

  baseURL: string = "http://localhost:8282/";
  result: string = "";

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
      description: val.decription,
      nbmin: val.nbmin,
      nbmax: val.nbmax,
      activite: val.activite,
    };
    console.log(event);
    this.http.post(this.baseURL + "event/save", event)
      .subscribe({
        next: (data) => { this.result = "Creation réussie" },
        error: (err) => { console.log(err) }
      });
    ;
  }
}

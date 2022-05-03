import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  baseURL: string = "http://localhost:8082/";
  resultMessage: string = "";
  resultColor: string="";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  inscrireMembre(val: any) {
    let membre = {
      nom: val.nom,
      prenom: val.prenom,
      dateNaissance: val.dateNaissance,
      mail: val.mail,
      mdp: val.mdp,
    };
    console.log(membre);    
    this.http.post(this.baseURL + "membre/save", membre)
    .subscribe({
    next: (data) => {
      this.resultMessage = "Inscription réussie";
      this.resultColor = "green";
    },
    error: (err) => {
      console.log(err);
      if (err.error.trace.includes("Duplicate")) {
        this.resultMessage = "Cette adresse mail est déjà utilisée";
      }
      else 
        this.resultMessage = "Une erreur s'est produite"
      this.resultColor = "red";
    }
    });
    ;
  }
}

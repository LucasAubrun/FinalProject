import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  baseURL: string = "http://localhost:8482/";
  resultMessage: string = "";
  resultColor: string="";

  constructor(private http: HttpClient,
    private url: UrlService) { }

  ngOnInit(): void {
  }

  inscription(val: any) {
    let membre = {
      nom: val.nom,
      prenom: val.prenom,
      dateNaissance: val.dateNaissance,
      mail: val.mail,
      mdp: val.mdp,
    };
    console.log(membre);    
    this.http.post(this.url.baseURL+"membre/save", membre)
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

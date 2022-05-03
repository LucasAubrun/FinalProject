import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  baseURL: string = "http://localhost:8082/";
  resultMessage: string = "";
  resultColor: string = "red";
  membre: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  connecterMembre(val: any) {
    let mail = val.mail;
    let mdp = val.mdp; 
    this.http.get(this.baseURL + "membre/get/" + mail + "/" + mdp)
    .subscribe({
      next: (data) => {
        if (data != null) {
          this.membre = data;
          console.log(data);
          this.resultMessage = "";
        }
        else {
          this.resultMessage = "Adresse e-mail ou mot de passe incorrect"
          this.resultColor = "red";
        }
      },
      error: (err) => {
        console.log(err); 
        this.resultMessage = "Une erreur s'est produite";
        this.resultColor = "red";
      }
      });
  }

}

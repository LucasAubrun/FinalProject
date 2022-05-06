import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  baseURL: string = "http://localhost:8080/";
  resultMessage: string = "";
  resultColor: string = "red";
  membre: any;
  user= {mail: '', mdp: ''};

  constructor(
    private http: HttpClient,
    private route: Router,
    private authentificationService: AuthentificationService
  ) { }

  ngOnInit(): void {
    if(this.authentificationService.isConnected()){
      this.route.navigateByUrl('membres');
    }
  }

  connexion() {
    this.http.post(this.baseURL + "membre/get", this.user)
      .subscribe({
        next: (data) => {
          this.membre = data;
          if (this.membre != null) {
            this.authentificationService.setUserInLocalStorage(this.membre)
            this.authentificationService.setMembreTargetInLocalStorage(this.membre)
            console.log(data);
            this.resultMessage = "";
            this.route.navigateByUrl("membres");
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent implements OnInit {

  resultMessage: any;
  resultColor: any;

  constructor(
    public authService: AuthentificationService,
    private http: HttpClient,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  modifierProfil(val: any) {
    let membre = {
      nom: val.nom,
      prenom: val.prenom,
      mail: val.mail,
      dateNaissance: val.dateNaissance,
      note: val.description,
      mdp: val.mdp,
    };
    let id = this.authService.getUserConnect().id;
    console.log(membre);    
    this.http.post("http://localhost:8482/membre/edit/" + id, membre)
    .subscribe({
    next: (data) => {
      this.route.navigateByUrl("membres");
      console.log(data);
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creationequipes',
  templateUrl: './creationequipes.component.html',
  styleUrls: ['./creationequipes.component.css']
})
export class CreationequipesComponent implements OnInit {

  baseURL: string = "http://localhost:8482/";
  resultMessage: string = " ";
  resultColor: string = " ";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  creationEquipe(val: any) {
    let equipe = {
      nom: val.nom
    };
    console.log(equipe);
    this.http.post(this.baseURL + "equipes", equipe)
    .subscribe({
      next: (data) => {
        this.resultMessage = "Votre équipe est bien créée";
        this.resultColor = "green"
      },
      error: (err) => {
        console.log(err);
        if (err.error.trace.includes("Duplicate")){
          this.resultMessage = "Cette equipe existe déja.."
        }
        else
          this.resultMessage= "Une erreur s'est produite"
        this.resultColor = "red";
       }
        });
        ;
    }
  }





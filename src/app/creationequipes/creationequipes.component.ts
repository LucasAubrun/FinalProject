import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creationequipes',
  templateUrl: './creationequipes.component.html',
  styleUrls: ['./creationequipes.component.css']
})
export class CreationequipesComponent implements OnInit {

    //♦♣♦♣♦♣♦♣♦♣ création de variable ♦♣♦♣♦♣♦♣♦♣//
  baseURL: string = "http://localhost:8482/";
  resultMessage: string = " ";
  resultColor: string = " ";
  EquipesId1: any;
  TtEquipeId: any;
  EquipeActuelle: any;

     //♦♣♦♣♦♣♦♣♦♣ fin création de variable ♦♣♦♣♦♣♦♣♦♣//

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.callEquipeId1();
    this.callTtEquipeId();
  }

  //♦♣♦♣♦♣♦♣♦♣ recherche des équipes créer par un membre ♦♣♦♣♦♣♦♣♦♣//
  callEquipeId1(){
    this.http.get(this.baseURL + "equipes/membres/1").subscribe({
      next: (data)=> {this.EquipesId1 = data},
      error: (err) => {console.log(err)}
    });
  }
  //♦♣♦♣♦♣♦♣♦♣ fin recherche des équipes ♦♣♦♣♦♣♦♣♦♣//

    //♦♣♦♣♦♣♦♣♦♣ recherche de ttes les équipes créer par un membre ♦♣♦♣♦♣♦♣♦♣//
    callTtEquipeId(){
      this.http.get(this.baseURL + "associations/membres/1").subscribe({
        next: (data)=> {this.TtEquipeId = data},
        error: (err) => {console.log(err)}
      });
    }

   //♦♣♦♣♦♣♦♣♦♣ Fin recherche de ttes les équipes créer par un membre ♦♣♦♣♦♣♦♣♦♣//


  //♦♣♦♣♦♣♦♣♦♣ début création d'équipe ♦♣♦♣♦♣♦♣♦♣//

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

      //♦♣♦♣♦♣♦♣♦♣ fin création d'équipe ♦♣♦♣♦♣♦♣♦♣//
  }





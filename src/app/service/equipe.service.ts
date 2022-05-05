import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

equipe: any;
  constructor(private route: Router) { }

  //getEquipeConnect(): any{
  //   this.equipe = JSON.parse(localStorage.getItem('equipeConnect'));
  //   return this.equipe;
  //  }


setEquipe(equipe: any) {

}

getEquipe(){
  return this.equipe()
}
 // getequipeUtil() {
 //   let user: any = localStorage.getItem('equipeUtil');
 //   return JSON.parse(equipe);
 // }

}

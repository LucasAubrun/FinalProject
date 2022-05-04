import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  equipe = null;

  constructor() { }

  //getEquipeConnect(): any{
 //   this.equipe = JSON.parse(localStorage.getItem('equipeConnect'));
 //   return this.equipe;
//  }
}

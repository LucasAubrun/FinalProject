import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private route: Router) { }

  setUserInLocalStorage(user: any) {
    localStorage.setItem('userConnect', JSON.stringify(user));
  }

  getUserConnect() {
    let user: any = localStorage.getItem('userConnect');
    return JSON.parse(user);
  }

  setMembreTargetInLocalStorage(user: any) {
    localStorage.setItem('membreTarget', JSON.stringify(user));
  }

  getMembreTargeted() {
    let user: any = localStorage.getItem('membreTarget');
    return JSON.parse(user);
  }

  isConnected() {
    if (this.getUserConnect() != null) {
      return true;
    }
    else {
      return false;
    }
  }

  deconnexion() {
    localStorage.clear();
    this.route.navigateByUrl('');
  }

}

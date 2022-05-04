import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  // mail: string = "mail";
  // mdp: string = "mdp";

  constructor(private route: Router) { }

  // login(mail: string, mdp: string): Observable<any> {
  //   // Mock a successful call to an API server.
  //   if (mail == this.mail && mdp == this.mdp) {
  //     localStorage.setItem("token", "my-super-secret-token-from-server");
  //     return of(new HttpResponse({ status: 200 }));
  //   } else {
  //     return of(new HttpResponse({ status: 401 }));
  //   }
  // }

  // logout(): void {
  //   localStorage.removeItem("token");
  // }

  // isUserLoggedIn(): boolean {
  //   if (localStorage.getItem("token") != null) {
  //     return true;
  //   }
  //   return false;
  // }

  setUserInLocalStorage(user: any) {
    localStorage.setItem('userConnect', JSON.stringify(user));
  }

  getUserConnect() {
    let user: any = localStorage.getItem('userConnect');
    return JSON.parse(user);
  }

  isConnected(){
    if(this.getUserConnect() != null){
      return true;
    }
    else{
      return false;
    }
  }

  deco() {
    localStorage.clear();
    this.route.navigateByUrl('');
  }
 
}

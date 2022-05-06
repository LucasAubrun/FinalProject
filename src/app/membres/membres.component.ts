import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {
  popup = false
  name = 'Angular';

  membrePP: any;
  id: any;
  events: any;

  constructor(
    public authService: AuthentificationService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.callMembrePP(this.authService.getUserConnect().id)
  }

  callMembrePP(id: any) {
    this.http.get('http://localhost:8080/membre/photoprofil/' + id)
      .subscribe({
        next: (data) => { this.membrePP = data, console.log(data) },

        error: (err) => { console.log(err) }
      });
  }

  listEvents() {
    this.http.get("http://localhost:8080/event/get/" + this.authService.getUserConnect().id)
      .subscribe({
        next: (data) => {
          this.events = data;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  setPhotoProfil(id: any, value: any) {
    this.http.patch('http://localhost:8080/membre/set/photoprofil/' + id, value)
      .subscribe({
        next: (data) => { window.location.reload() },

        error: (err) => { console.log(err) }
      })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {

  events: any;

  constructor(
    public authService: AuthentificationService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  listEvents() {
    this.http.get("http://localhost:8082/event/get/" + this.authService.getUserConnect().id)
    .subscribe({
      next: (data) => {
        this.events = data;
      },
      error: (err) => {
        console.log(err);
      }
      });
  }

}

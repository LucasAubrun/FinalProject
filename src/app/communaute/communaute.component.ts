import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-communaute',
  templateUrl: './communaute.component.html',
  styleUrls: ['./communaute.component.css']
})
export class CommunauteComponent implements OnInit {

  leaderboard: any;
  index: any;

  constructor (
    private http : HttpClient,
    public authService : AuthentificationService
  ) { }

  ngOnInit(): void {
    this.getLeaderboard();
  }

  getLeaderboard() {
    this.http.get("http://localhost:8482/membre/get/leaderboard")
    .subscribe({
      next: (data) => {
        this.leaderboard = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
      });
  }


}

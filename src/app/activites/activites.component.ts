import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  activitesOne: any;

  ngOnInit(): void {
    this.callActivitesAll()
  }

  callActivitesAll() {
    this.http.get('http://localhost:8482/activites/all')
      .subscribe({
        next: (data) => { this.activitesOne = data },
        error: (err) => { console.log(err) }
      });

  }
}

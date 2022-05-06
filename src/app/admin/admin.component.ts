import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient,
    private url: UrlService) { }
  activitesOne: any;

  ngOnInit(): void {
    this.callActivitesAll()
  }

  callActivitesAll() {
    this.http.get(this.url.baseURL+"activites/all")
      .subscribe({
        next: (data) => { this.activitesOne = data, console.log(data) },

        error: (err) => { console.log(err) }
      });
  }

  setEtatValidationTrue(id: any) {
    let etatvalidation = true;
    console.log(etatvalidation);
    this.http.patch(this.url.baseURL+"activites/set/valide/" + id, etatvalidation)
      .subscribe({
        next: (data) => { window.location.reload() },

        error: (err) => { console.log(err) }
      })
  }

  setEtatValidationFalse(id: any) {
    let etatvalidation = false;
    console.log(etatvalidation);
    this.http.patch(this.url.baseURL+"activites/set/valide/" + id, etatvalidation)
      .subscribe({
        next: (data) => { window.location.reload() },

        error: (err) => { console.log(err) }

      })
  }




}

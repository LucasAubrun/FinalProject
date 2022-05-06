import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {

  constructor(private http: HttpClient,
    private url: UrlService) { }

  
  activitesOne: any;

  ngOnInit(): void {
    this.callActivitesAll()
  }

  callActivitesAll() {
    this.http.get(this.url.baseURL+"activites/all")
      .subscribe({
        next: (data) => { this.activitesOne = data },
        error: (err) => { console.log(err) }
      });

  }
}

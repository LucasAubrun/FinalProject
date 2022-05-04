import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {

  baseURL: string = "http://localhost:8080/";
  resultMessage: string = " ";
  resultColor: string = " ";
  EventRandId: any;
  ListEventRandId: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.callEventRandId();
  }

  // callEventRandId() {
  //  this.http.get("http://localhost:8080/evenements/id").subscribe({

  //   next: (data) => { this.EventRandId = data },
  //   error: (err) => { console.log(err) }
  // });
  //}

  // callListEventRandId() {
  //   for(let nombre = 0; nombre <=10; nombre++) {
  //       this.ListEventRandId 
  //   }
  // }

  callEventRandId() {
    this.http.get("http://localhost:8080/evenements/id").subscribe({

      next: (data) => { this.EventRandId = data },
      error: (err) => { console.log(err) }
    });
  }

}

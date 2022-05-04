import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesevenements',
  templateUrl: './mesevenements.component.html',
  styleUrls: ['./mesevenements.component.css']
})
export class MesevenementsComponent implements OnInit {

  //♦♣♦♣♦♣♦♣♦♣ création de variable ♦♣♦♣♦♣♦♣♦♣//
  baseURL: string = "http://localhost:8080/";
  resultMessage: string = " ";
  TtEventId: any;

  //♦♣♦♣♦♣♦♣♦♣ fin création de variable ♦♣♦♣♦♣♦♣♦♣//

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.callTtEventId();
  }

  callTtEventId() {
    this.http.get(this.baseURL + "evenements/membres/1").subscribe({
      next: (data) => { this.TtEventId = data },
      error: (err) => { console.log(err) }
    });
  }
}

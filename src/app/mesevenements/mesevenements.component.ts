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
  result: string = "";
  invitationEv: any;
  resultMessageInvit: any;
  errorInvit: any;

  //♦♣♦♣♦♣♦♣♦♣ fin création de variable ♦♣♦♣♦♣♦♣♦♣//

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.callTtEventId();
  }

  callTtEventId() {
    this.http.get(this.baseURL + "participants/membres/1").subscribe({
      next: (data) => { this.TtEventId = data },
      error: (err) => { console.log(err) }
    });
  }

  SupprimerEvent(val: any) {
    let event = {
      id: val.id,
    }

    this.http.delete("Evenements/supprimer/{id}")
      .subscribe({
        next: (data) => { this.result = "Suppression réussie" },
        error: (err) => { console.log(err) }
      })
  }

  sendinvitationEv(val: any) {
    let invitations = {
      idM: val.id,
    };
    console.log(invitations);
    this.http.post(this.baseURL + "Participant/inviter", invitations).subscribe({
      next: (data) => {
        this.resultMessageInvit = "invitation envoyée"
      },
      error: (err) => {
        this.errorInvit = "invitation impossible"
      }
    })
  }

}

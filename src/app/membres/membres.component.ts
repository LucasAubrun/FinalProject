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
  resultMessage: string = " ";
  TtEventId: any;
  result: string = "";
  invitationEv: any;
  resultMessageInvit: any;
  errorInvit: any;

  constructor(
    public authService: AuthentificationService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.callMembrePP(this.authService.getUserConnect().id)
    this.callTtEventId();
  }

  callMembrePP(id: any) {
    this.http.get('http://localhost:8082/membre/photoprofil/' + id)
      .subscribe({
        next: (data) => { this.membrePP = data, console.log(data) },

        error: (err) => { console.log(err) }
      });
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

  setPhotoProfil(id: any, value: any) {
    this.http.patch('http://localhost:8082/membre/set/photoprofil/' + id, value)
      .subscribe({
        next: (data) => { window.location.reload() },

        error: (err) => { console.log(err) }
      })
  }

  callTtEventId() {
    this.http.get('http://localhost:8080/participants/membres/' + this.authService.getUserConnect().id).subscribe({
      next: (data) => { this.TtEventId = data },
      error: (err) => { console.log(err) }
    });
  }

  SupprimerEvent(id: any) {

    this.http.delete("http://localhost:8080/Evenements/supprimer/" + id)
      .subscribe({
        next: (data) => { this.result = "Suppression réussie" },
        error: (err) => { console.log(err) }
      })
  }

  QuitterEvent(id: any) {

    this.http.delete("http://localhost:8080/Participants/supprimer/" + id)
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
    this.http.post("http://localhost:8082/Participant/inviter", invitations).subscribe({
      next: (data) => {
        this.resultMessageInvit = "invitation envoyée"
      },
      error: (err) => {
        this.errorInvit = "invitation impossible"
      }
    })
  }

}

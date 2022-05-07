import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MessagerieComponent } from '../messagerie/messagerie.component';
import { AuthentificationService } from '../service/authentification.service';
import { UrlService } from '../service/url.service';

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
  messages: any;

  constructor(
    public authService: AuthentificationService,
    private http: HttpClient,
    private url: UrlService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.callMembrePP(this.authService.getUserConnect().id)
    this.callTtEventId();
    this.getMessageForUser();
  }

  callMembrePP(id: any) {
    this.http.get(this.url.baseURL + "membre/photoprofil/" + id)
      .subscribe({
        next: (data) => { this.membrePP = data, console.log(data) },

        error: (err) => { console.log(err) }
      });
  }

  listEvents() {
    this.http.get(this.url.baseURL + "event/get/" + this.authService.getUserConnect().id)
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
    this.http.patch(this.url.baseURL + "membre/set/photoprofil/" + id, value)
      .subscribe({
        next: (data) => { window.location.reload() },

        error: (err) => { console.log(err) }
      })
  }

  callTtEventId() {
    this.http.get(this.url.baseURL + "participants/membres/" + this.authService.getUserConnect().id).subscribe({
      next: (data) => { this.TtEventId = data },
      error: (err) => { console.log(err) }
    });
  }

  SupprimerEvent(id: any) {

    this.http.delete(this.url.baseURL + "Evenements/supprimer/" + id)
      .subscribe({
        next: (data) => { this.result = "Suppression réussie" },
        error: (err) => { console.log(err) }
      })
  }

  QuitterEvent(id: any) {

    this.http.delete(this.url.baseURL + "Participants/supprimer/" + id)
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
    this.http.post(this.url.baseURL + "Participant/inviter", invitations).subscribe({
      next: (data) => {
        this.resultMessageInvit = "invitation envoyée"
      },
      error: (err) => {
        this.errorInvit = "invitation impossible"
      }
    });
  };

  openDialog(emetteur: any, recepteur: any): void {
    let dialogRef = this.dialog.open(MessagerieComponent, {
      data: {
        emetteur: emetteur,
        recepteur: recepteur,
      }
    })
  }

  getMessageForUser() {
    this.http.get(this.url.baseURL + "message/get/nonlu/" + this.authService.getUserConnect().id)
      .subscribe({
        next: (data) => {
          this.messages = data;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
  };

}

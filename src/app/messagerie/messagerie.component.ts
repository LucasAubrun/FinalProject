import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthentificationService } from '../service/authentification.service';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  messages: any;
  messagesNonLu: any;
  infoText: any;
  infoColor: any;

  constructor(
    private url: UrlService,
    private authService: AuthentificationService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<MessagerieComponent>
    ) { }

  ngOnInit(): void {
  }

  createMessage(val: any) {
    let message = {
      contenu: val.contenu,
      emetteur: this.authService.getUserConnect(),
      recepteur: this.authService.getMembreTargeted()
    };
    this.http.post(this.url.baseURL+"message/save", message)
    .subscribe({
      next: (data) => {
        this.dialogRef.close()
      },
      error: (err) => {
        console.log(err);
        this.infoText = "Une erreur s'est produite";
        this.infoColor = "red";
      }
    });
  
  };

  getMessageForUser(val: any) {
    this.http.get(this.url.baseURL+"message/get/all/"+this.authService.getUserConnect().id)
    .subscribe({
      next: (data) => {
        this.messages = data;
      },
      error: (err) => {
        console.log(err);
      }
      });
  };

  getMessageNonLuForUser(val: any) {
    this.http.get(this.url.baseURL+"message/get/nonlu/"+this.authService.getUserConnect().id)
    .subscribe({
      next: (data) => {
        this.messagesNonLu = data;
      },
      error: (err) => {
        console.log(err);
      }
      });
  };


}

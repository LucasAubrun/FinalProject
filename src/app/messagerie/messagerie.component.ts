import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { UrlService } from '../service/url.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  emetteur: any;
  recepteur: any;

  constructor(
    private url: UrlService,
    private authService: AuthentificationService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<MessagerieComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.emetteur = data.emetteur;
    this.recepteur = data.recepteur;
  }

  ngOnInit(): void {
  }

  createMessage(val: any) {
    let message = {
      contenu: val.contenu,
      emetteur: this.emetteur,
      recepteur: this.recepteur
    };
    this.http.post(this.url.baseURL + "message/save", message)
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


}

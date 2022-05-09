import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MembrespassesComponent } from '../membrespasses/membrespasses.component';
import { AuthentificationService } from '../service/authentification.service';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-eventpasses',
  templateUrl: './eventpasses.component.html',
  styleUrls: ['./eventpasses.component.css']
})
export class EventpassesComponent implements OnInit {

  popup = false
  name = 'Angular';

  eventpasses: any;
  partevent: any;

  constructor(
    public authService: AuthentificationService,
    private http: HttpClient,
    private url: UrlService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.callEventpasses()
  }


  callEventpasses() {
    this.http.get(this.url.baseURL + 'evenements/get/before/' + this.authService.getUserConnect().id)
      .subscribe({
        next: (data) => {
          this.eventpasses = data,
            console.log(this.eventpasses)
        },
        error: (err) => { console.log(err) }
      });

  }

  callParticpantsEvent(id: any) {
    this.http.get(this.url.baseURL + 'Participants/getallmember/event/' + id)
      .subscribe({
        next: (data) => { this.partevent = data },

        error: (err) => { console.log(err) }
      })
  }

  setScore(id: any, score: any) {

    this.http.patch(this.url.baseURL + 'membre/set/score/' + id, score)
      .subscribe({
        next: (data) => { },

        error: (err) => { console.log(err) }
      })
  }

  openDialog2(id: any): void {
    let dialogRef = this.dialog.open(MembrespassesComponent, {
      data: {
        id: id,
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  baseURL: string = "http://localhost:8081/";
  resultMessage: string = "";
  resultColor: string = "";

  constructor(private http: HttpClient,
    private url: UrlService) { }


  ngOnInit(): void {
  }
  contact(val: any) {
    let contact = {
      name: val.name,
      subject: val.subject,
      mail: val.mail,
      message: val.message,
    };
    console.log(contact);
    this.http.post(this.url.baseURL + "contactmsg/save", contact)
      .subscribe({
        next: (data) => {
          this.resultMessage = "Inscription réussie";
          this.resultColor = "green";
        },
        error: (err) => {
          console.log(err);
          if (err.error.trace.includes("Duplicate")) {
            this.resultMessage = "Cette adresse mail est déjà utilisée";
          }
          else
            this.resultMessage = "Une erreur s'est produite"
          this.resultColor = "red";
        }
      });;
  }
}

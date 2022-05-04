import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connexionadmin',
  templateUrl: './connexionadmin.component.html',
  styleUrls: ['./connexionadmin.component.css']
})
export class ConnexionadminComponent implements OnInit {

  resultMessage: string = "";
  resultColor: string = "red";
  admin: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  connecterAdmin(val: any) {
    let mail = val.mail;
    let mdp = val.mdp;
    this.http.get("http://localhost:8082/" + "admin/get/" + mail + "/" + mdp)
      .subscribe({
        next: (data) => {
          if (data != null) {
            this.admin = data;
            console.log(data);
            this.resultMessage = "";
          }
          else {
            this.resultMessage = "Adresse e-mail ou mot de passe incorrect"
            this.resultColor = "red";
          }
        },
        error: (err) => {
          console.log(err);
          this.resultMessage = "Une erreur s'est produite";
          this.resultColor = "red";
        }
      });
  }

}

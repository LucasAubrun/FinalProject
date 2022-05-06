import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../service/url.service';



@Component({
  selector: 'app-newactivite',
  templateUrl: './newactivite.component.html',
  styleUrls: ['./newactivite.component.css']
})
export class NewactiviteComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private url: UrlService,
    ) { }

  ngOnInit(): void {
  }

  createNewActivite(val: any) {
    let activite = {
      description: val.contenu,
      nom: val.nom,
      nbJoueurs: val.nbjoueurs,
      type: val.type,
      valide: false
    }
    this.http.post(this.url.baseURL+"activites/save", activite)
      .subscribe({
        next: (data) => { window.location.reload() },
        error: (err) => { console.log(err) }
      })
    console.log(activite)
  }

}

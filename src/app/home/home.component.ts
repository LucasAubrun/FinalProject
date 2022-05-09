import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthentificationService,
    private url: UrlService) { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

}

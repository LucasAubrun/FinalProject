import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthentificationService,
    private url: UrlService) { }

  ngOnInit(): void {
  }

}

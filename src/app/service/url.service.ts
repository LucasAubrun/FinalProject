import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  baseURL = "http://localhost:8080/";

  constructor() { }
}

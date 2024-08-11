import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Home } from '../models/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = `${environment.apiUrl}/home-details`;

  constructor(private http: HttpClient) { }

  prepareHome() {
    return this.http.get<Home>(this.apiUrl, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

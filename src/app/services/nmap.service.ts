import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nmap } from '../models/nmap.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NmapService {

  private apiUrl = `${environment.apiUrl}/nmap-scan`;
  
  constructor(private http: HttpClient) { }

  runNmap(ip: string, args: string) {
    const body = { ip, args };
    return this.http.post<Nmap>(this.apiUrl, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
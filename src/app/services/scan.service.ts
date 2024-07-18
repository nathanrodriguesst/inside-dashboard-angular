import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scan } from '../models/scan.model';

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  runNmapScan(formData: FormData): Observable<Scan> {
    return this.http.post<Scan>(`${this.apiUrl}/nmap-scan`, formData);
  }
}
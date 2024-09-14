import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class reportsService {
  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  generateReport(startDate: string, endDate: string, activityType: String) {
    const body = { startDate, endDate, activityType };

    return this.http.post<Report[]>(`${this.apiUrl}/network-report`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
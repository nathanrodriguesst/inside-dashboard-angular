import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { Home } from '../../models/home.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result: Home = {
    response: {
      exploitCount: 0,
      recentActivities: [],
      scanCount: 0,
      vulnerabilitiesCount: 0,
      vulnerableServicesRegisters: []
    }
  };

  constructor(private home: HomeService) {}

  ngOnInit(): void {
    this.home.prepareHome().subscribe({
      next: (data: Home) => {
        this.result = data;
      },
      error: () => {
        console.error("Something went wrong.");
      }
    });
  }
}

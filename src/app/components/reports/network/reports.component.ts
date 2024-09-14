import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { reportsService } from '../../../services/reports.service';
import { ToastrService } from 'ngx-toastr';
import { Report } from '../../../models/report.model';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  reportsForm: FormGroup;
  results: Report[] | null = null;
  
  constructor(
    private fb: FormBuilder,
    private reportsService: reportsService,
    private toastr: ToastrService
  ) {
    this.reportsForm = this.fb.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      activityType: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    if (this.reportsForm.valid) {
      var startDate = this.reportsForm.get('startDate')?.value;
      var endDate = this.reportsForm.get('endDate')?.value;
      var activityType = this.reportsForm.get('activityType')?.value;

      this.reportsService.generateReport(startDate, endDate, activityType).subscribe({
        next: (data: Report[]) => {
          this.results = data;
          this.toastr.success('Report generated successfully.', 'Success!');
        },
        error: () => {
          this.toastr.error('Error generating report.', 'Error!');
        }
      });
    } else {
      this.toastr.warning('Please fill out all the fields in the form.', 'Warning!');
    }
  }
  
}

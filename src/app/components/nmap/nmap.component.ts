import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NmapService } from '../../services/nmap.service';
import { Nmap } from '../../models/nmap.model';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nmap',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nmap.component.html',
  styleUrls: ['./nmap.component.css']
})
export class NmapComponent implements OnInit {
  nmapForm: FormGroup;
  isLoading = false;
  result: Nmap | null = null;

  constructor(
    private fb: FormBuilder,
    private nmapService: NmapService,
    private toastr: ToastrService
  ) {
    this.nmapForm = this.fb.group({
      ip: ['', [Validators.required, this.isValidIP]],
      checkedValues: ['-sn', Validators.required]
    });
  }

  ngOnInit(): void {}

  isValidIP(control: any): { [key: string]: boolean } | null {
    const ipRegex = /\b(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b(?:;|$)/;
    return ipRegex.test(control.value) ? null : { invalidIP: true };
  }

  onApplyFlags(): void {
    const checkedValues = Array.from(document.querySelectorAll('.form-check-input:checked'))
      .map((input: any) => input.value)
      .join(' ');
    this.nmapForm.patchValue({ checkedValues });
  }

  onSubmit(): void {
    if (this.nmapForm.valid) {
      this.isLoading = true;

      var ip = this.nmapForm.get('ip')?.value;
      var args = this.nmapForm.get('checkedValues')?.value;

      this.nmapService.runNmap(ip, args).subscribe({
        next: (data: Nmap) => {
          this.result = data;
          
          this.toastr.success('Your scan was successfull.', 'Success!');
          this.isLoading = false;
        },
        error: () => {
          this.toastr.error('Error running scan.', 'Error!');
          this.isLoading = false;
        }
      });
    } else {
      this.toastr.warning('Please enter a valid IP.', 'Warning!');
    }
  }
}
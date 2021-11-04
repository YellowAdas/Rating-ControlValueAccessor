import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.component.html',
  styleUrls: ['./rate-form.component.css'],
})
export class RateFormComponent {
  rateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.rateForm = this.fb.group({
      description: new FormControl(),
      stars: new FormControl(),
    });
  }

  submitForm() {
    console.log(this.rateForm.value);
  }
}

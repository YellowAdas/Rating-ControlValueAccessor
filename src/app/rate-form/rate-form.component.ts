import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.component.html',
  styleUrls: ['./rate-form.component.css'],
})
export class RateFormComponent {
  rateForm!: FormGroup;
  // public starCount = 5;
  constructor(private fb: FormBuilder) {}
  showForm = true;

  ngOnInit() {
    this.rateForm = this.fb.group({
      description: new FormControl(),
      stars: new FormControl(3),
      starC: new FormControl(5),
    });
  }

  submitForm() {
    console.log(this.rateForm.value);
    this.rateForm.reset();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}

import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-stars-input',
  templateUrl: './stars-input.component.html',
  styleUrls: ['./stars-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarsInputComponent),
      multi: true,
    },
  ],
})
export class StarsInputComponent implements OnInit, ControlValueAccessor {
  stars = [1, 2, 3, 4, 5];
  value: number = 0;

  constructor() {}

  onChange!: (value: number) => void;
  onTouched!: () => void;

  writeValue(value: number): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {}

  setValue(id: number) {
    this.value = id;
    this.onChange(this.value);
    this.onTouched();
  }
}

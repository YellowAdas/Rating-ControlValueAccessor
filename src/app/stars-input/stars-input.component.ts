import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-stars-input',
  templateUrl: './stars-input.component.html',
  styleUrls: ['./stars-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarsInputComponent),
      multi: true,
    },
  ],
})
export class StarsInputComponent implements ControlValueAccessor {
  @Input() starc = 5;
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

  setValue(id: number) {
    // zerowanie stanu gwiazdek po 2-krotnym kliknieciu
    if (this.value === id) {
      this.value = 0;
    } else {
      this.value = id;
      this.onChange(this.value);
    }
    this.onTouched();
  }
}

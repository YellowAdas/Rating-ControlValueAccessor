import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RateFormComponent } from './rate-form/rate-form.component';
import { StarsInputComponent } from './stars-input/stars-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArrayFromNumberPipe } from './array-from-number.pipe';

@NgModule({
  declarations: [AppComponent, RateFormComponent, StarsInputComponent, ArrayFromNumberPipe],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

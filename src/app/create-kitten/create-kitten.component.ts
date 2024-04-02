import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Kitten } from '../models/kitten.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss'],
})
export class AppCreateKittenComponent {
  @Output() kittenCreated = new EventEmitter<Kitten>();

  kittenForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.kittenForm = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      birthDate: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.kittenForm.valid) {
      this.kittenCreated.emit(this.kittenForm.value);
      this.kittenForm.reset();
    }
  }
}

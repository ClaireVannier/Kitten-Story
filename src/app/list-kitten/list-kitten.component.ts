import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss',
})
export class AppListKittenComponent {

  @Input() kittens: Kitten[] = [];
  
  @Output() kittenAdopted = new EventEmitter<Kitten>();

  adoptKitten(kitten: Kitten): void {
    this.kittenAdopted.emit(kitten);
  }
}

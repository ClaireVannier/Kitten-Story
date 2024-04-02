import { Component, Input } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss'],
})
export class UserKittenComponent {
  @Input() myKittens: Kitten[] = [];
}

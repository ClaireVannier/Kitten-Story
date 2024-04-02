import { Component } from '@angular/core';
import { Kitten } from './models/kitten.model';
import { AppCreateKittenComponent } from './create-kitten/create-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { AppListKittenComponent } from './list-kitten/list-kitten.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    AppCreateKittenComponent,
    UserKittenComponent,
    AppListKittenComponent,
  ],
})

export class AppComponent {

  title = 'kitten-story';

  // On déclare deux propriétés: un tableau de chat et un tableau de chat à l'utilisateur 
  kittens: Kitten[] = [];
  myKittens: Kitten[] = [];

// On crée un chat et on l'ajoute au tableau de chat

  onKittenCreated(kitten: Kitten): void {
    this.kittens.push(kitten);
  }

  // On retire le chat du tableau de chat et on l'ajoute au tableau de chat à l'utilisateur en le filtrant

  onKittenAdopted(kitten: Kitten): void {
    this.myKittens.push(kitten);
    this.kittens = this.kittens.filter((k) => k !== kitten);
  }
}

// app.component.ts
import { Component } from '@angular/core';
import { Kitten } from './models/kitten.model';
import { AppCreateKittenComponent } from "./create-kitten/create-kitten.component";
import { UserKittenComponent } from "./user-kitten/user-kitten.component";
import { AppListKittenComponent } from "./list-kitten/list-kitten.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [AppCreateKittenComponent, UserKittenComponent, AppListKittenComponent]
})
export class AppComponent {
  title = 'kitten-story';
  kittens: Kitten[] = []; 
  myKittens: Kitten[] = [];


  onKittenCreated(kitten: Kitten) {
    this.kittens.push(kitten);
  }

  onKittenAdopted(kitten: Kitten) {
    this.myKittens.push(kitten);
    this.kittens = this.kittens.filter((k) => k !== kitten);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TournamentGroupsComponent} from "./tournament-groups/tournament-groups.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TournamentGroupsComponent/*TeamsComponent*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UEFA Nations League';
}
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface Insight {
  title: string;
  description: string;
}

@Component({
  selector: 'app-hub-card',
  imports: [ MatCardModule ],
  templateUrl: './hub-card.html',
  styleUrl: './hub-card.scss',
})

export class HubCard {
  title = input<string>();
  insights = input<Insight[]>();
}

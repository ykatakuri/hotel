import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel';

  rooms: {
    id: number
  }[] = [
    { id: 206 },
    { id: 207 },
    { id: 208 }
  ];
}

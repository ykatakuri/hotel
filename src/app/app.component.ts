import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRoom } from './iroom';
import { RoomService } from './room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'hotel';
  rooms!: IRoom[];
  roomSubscription!: Subscription;

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.roomSubscription = this.roomService.rooms$.subscribe((rooms: IRoom[]) => {this.rooms = rooms;});
  }

  ngOnDestroy(): void {
    if (this.roomSubscription) {
      this.roomSubscription.unsubscribe();
    }
  }
}

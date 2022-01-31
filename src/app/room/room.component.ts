import { Component, Input, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Input() roomId!: number;
  isDoNotDisturb = true;
  guest!: string;

  isAvailable = true;

  bottleCount = 10;

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.guest = "John Doe";
  }

  check():boolean {
    if (this.guest.includes('Yann')) {
      return false;
    }
    return true;
  }

  public switchDoNotDisturb(): void {
    this.isDoNotDisturb = !this.isDoNotDisturb;
  }

  knockKnock(): void {
    console.log(`Knock Knock ${this.guest} !`);
  }

  orderBottles(bottleCount: number): void {
    console.log(`Alert quantity: ${bottleCount}`);
  }

  deleteRoom(): void {
    this.roomService.deleteRoom(this.roomId);
  }

  updateBottleCount(newCount: number):void {
    this.bottleCount = newCount;
  }
}

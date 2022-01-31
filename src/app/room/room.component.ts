import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {
   }

  ngOnInit(): void {
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

  
  updateBottleCount(newCount: number):void {
    this.bottleCount = newCount;

  }
  
}

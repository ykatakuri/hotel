import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRoom } from './iroom';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  private rooms: IRoom [] = [
    { id: 206 },
  ];

  public rooms$: BehaviorSubject<IRoom[]>;

  constructor() { 
    this.rooms$ = new BehaviorSubject<IRoom[]>(this.rooms);
  }

  deleteRoom(roomId: number): void {
    const index = this.rooms.findIndex((x) => x.id === roomId);

    if (index > -1) {
      this.rooms.splice(index, 1);
      this.rooms$.next(this.rooms);
    }
  }

  addRoom(): void {
    const id = this.rooms.length === 0 ? 1 :
      Math.max.apply(Math, this.rooms.map((room) => {
        return room.id;
      })) + 1;

    this.rooms.push({id});
    this.rooms$.next(this.rooms);
  }
}

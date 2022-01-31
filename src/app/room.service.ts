import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  public rooms: {
    id: number
  }[] = [
    { id: 206 },
    { id: 207 },
    { id: 208 }
  ];
  constructor() { }
}

import { Injectable } from '@angular/core';
import { IRoom } from './iroom';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  public rooms: IRoom [] = [
    { id: 206 },
    { id: 207 },
    { id: 208 }
  ];
  constructor() { }
}

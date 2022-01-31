import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss']
})
export class FridgeComponent implements OnInit {

  @Input()
  isAvailable!: boolean;

  bottleCount = 10;

  @Output() updateBottle = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  decreaseBottleCount():void {
    this.updateBottle.emit(this.bottleCount --);
    
    if (this.bottleCount < 5) {
      alert("Le stock de bouteille d'eau est insuffisant!");
    }
    
  }
}

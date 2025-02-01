import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as cardModel from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card!: cardModel.Card;
  @Output() remove = new EventEmitter<string>();

  onRemoveCard(): void {
    this.remove.emit(this.card.id);
  }

  onDragStart(event: DragEvent): void {
    if (event.dataTransfer) {
      event.dataTransfer.setData('card', JSON.stringify(this.card));
      event.dataTransfer.effectAllowed = 'move';
    }
  }
}

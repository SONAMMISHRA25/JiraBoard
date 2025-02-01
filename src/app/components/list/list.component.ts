import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { List } from '../../models/list.model';
import { Card } from '../../models/card.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() list!: List;
  @Output() remove = new EventEmitter<string>();

  addCard(): void {
    const newCard: Card = {
      id: uuidv4(),
      title: 'New Card',
      description: 'Description',
      createdAt: Date.now(),
    };
    this.list.cards.unshift(newCard);
  }

  removeCard(cardId: string): void {
    this.list.cards = this.list.cards.filter(card => card.id !== cardId);
  }

  onRemoveList(): void {
    this.remove.emit(this.list.id);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const cardData = event.dataTransfer?.getData('card');
    if (cardData) {
      const droppedCard: Card = JSON.parse(cardData);
      this.list.cards.unshift(droppedCard);
    }
  }
}

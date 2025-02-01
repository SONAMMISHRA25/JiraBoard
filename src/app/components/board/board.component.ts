import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list.model';
import { StorageService } from '../../services/storage.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  lists: List[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.lists = this.storageService.getLists();
  }

  addList(): void {
    const newList: List = { id: uuidv4(), title: 'New List', cards: [] };
    this.lists.push(newList);
    this.updateStorage();
  }

  removeList(listId: string): void {
    this.lists = this.lists.filter(list => list.id !== listId);
    this.updateStorage();
  }

  updateStorage(): void {
    this.storageService.saveLists(this.lists);
  }
}

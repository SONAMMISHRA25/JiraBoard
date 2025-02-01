import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private storageKey = 'jira-board-data';

  saveLists(lists: List[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(lists));
  }

  getLists(): List[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}

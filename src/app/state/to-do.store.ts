import {Injectable} from '@angular/core';
import {Todo} from './to-do.model';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';

export interface TodoState extends EntityState<Todo> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'todo'})
export class ToDoStore extends EntityStore<TodoState> {

  constructor() {
    super();
  }

}


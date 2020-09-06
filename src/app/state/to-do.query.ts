import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {TodoState, ToDoStore} from './to-do.store';

@Injectable({providedIn: 'root'})
export class ToDoQuery extends QueryEntity<TodoState> {

  constructor(protected store: ToDoStore) {
    super(store);
  }

}

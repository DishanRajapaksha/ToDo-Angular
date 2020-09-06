import {Injectable} from '@angular/core';
import {TodoState, ToDoStore} from './to-do.store';
import {NgEntityService} from '@datorama/akita-ng-entity-service';

@Injectable({providedIn: 'root'})
export class ToDoService extends NgEntityService<TodoState> {

  constructor(protected store: ToDoStore) {
    super(store);
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';

import {Todo} from './state/to-do.model';
import {ToDoService} from './state/to-do.service';
import {ToDoFormComponent} from './components/to-do-form/to-do-form.component';
import {ToDoQuery} from './state/to-do.query';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos$: Observable<Todo[]>;
  todos: Todo[] = [];
  completedToDos: Todo[] = [];

  @ViewChild('todoForm') todoForm: ToDoFormComponent;

  constructor(
    private readonly todoService: ToDoService,
    private readonly todoQuery: ToDoQuery
  ) {
  }

  ngOnInit(): void {
    this.getAll();
    this.todos$ = this.todoQuery.selectAll();
  }

  getAll(): void{
    this.todoService.get().subscribe();
  }

  add(title: string): void{
    this.todoService.add({title}).subscribe(() => {
        this.todoForm?.reset();
    });
  }

  onDelete(todo: Todo): void {
    this.todoService.delete(todo.id).subscribe();
  }

  onChange($event: Todo): void {
    if ($event){
      this.todoService.update($event.id, {
        ...$event,
        completed: !$event.completed
      }).subscribe();
    }

  }
}

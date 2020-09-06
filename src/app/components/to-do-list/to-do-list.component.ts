import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {Todo} from '../../state/to-do.model';
import {MatMenuTrigger} from '@angular/material/menu';
import {MatSelectionList, MatSelectionListChange} from '@angular/material/list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() toDos: Todo[];

  @Output() changeEventEmitter = new EventEmitter<Todo>();
  @Output() deleteEventEmitter = new EventEmitter<Todo>();

  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;

  @ViewChild('todoList') todoList: MatSelectionList;

  contextMenuPosition = { x: '0px', y: '0px' };

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick($event: MatSelectionListChange): void{
    this.changeEventEmitter.emit($event?.option?.value);
  }

  onContextMenuDelete(todo: Todo): void  {
    this.deleteEventEmitter.emit(todo);
  }

  onContextMenu(event: MouseEvent, item: Todo): void {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { item };
    this.contextMenu?.openMenu();
  }
}

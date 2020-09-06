import {Component, OnInit, Output, EventEmitter, Input, HostListener} from '@angular/core';
import {Todo} from '../../state/to-do.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  @Output() toDoAdd = new EventEmitter<string>();

  formControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.formControl = new FormControl();
  }

  add(): void{
    if (this.formControl.value?.trim()){
      this.toDoAdd.emit(this.formControl.value.trim());
    }
  }

  public reset(): void {
    this.formControl.reset();
  }

  @HostListener('window:keydown.enter')
  handleKeyDown(event: KeyboardEvent): void {
    this.add();
  }

}

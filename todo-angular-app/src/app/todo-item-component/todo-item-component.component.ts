import { Component, Input } from '@angular/core';
import { Todo } from '../todo.interface';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  toggleTodoStatus(): void {
    this.todoService.updateTodoStatus(this.todo);
  }

  deleteTodo(): void {
    this.todoService.deleteTodo(this.todo);
  }
}

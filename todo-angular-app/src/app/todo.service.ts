import { Injectable } from '@angular/core';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  updateTodoStatus(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}

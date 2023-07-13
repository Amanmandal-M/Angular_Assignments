import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../todo.interface';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo-component.component.html',
  styleUrls: ['./create-todo-component.component.css']
})
export class CreateTodoComponent {
  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private todoService: TodoService) {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      const todo: Todo = {
        id: new Date().getTime(),
        title: this.todoForm.value.title,
        description: this.todoForm.value.description,
        completed: false
      };
      this.todoService.addTodo(todo);
      this.todoForm.reset();
    }
  }
}

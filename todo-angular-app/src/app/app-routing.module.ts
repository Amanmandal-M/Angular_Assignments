import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list-component/todo-list-component.component';
import { CreateTodoComponent } from './create-todo-component/create-todo-component.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'create', component: CreateTodoComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

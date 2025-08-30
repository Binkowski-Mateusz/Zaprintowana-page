import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos as TodosService } from '../services/todos';
import { Todo } from '../Model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit {
  todoItems = signal<Array<Todo>>([]);
  todoService = inject(TodosService);

  ngOnInit(): void {
    this.todoService
    .getToDosFormApi()
    .pipe(
      catchError((err) => { 
      console.log('error caught in component');
      throw err;
      })).subscribe((todos: Array<Todo>) => {
        this.todoItems.set(todos);
      });
  }
}
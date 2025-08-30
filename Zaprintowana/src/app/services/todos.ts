import { inject, Injectable } from '@angular/core';
import { Todo } from '../Model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Todos {
  http = inject(HttpClient);
  
  getToDosFormApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return this.http.get<Array<Todo>>(url);
  }
}

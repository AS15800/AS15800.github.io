import { Component } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [];
  newTask = '';

  addTodo() {
    if (this.newTask.trim()) {
      this.todos.push({
        id: this.todos.length + 1,
        task: this.newTask,
        isCompleted: false,
      });
      this.newTask = '';
    }
  }

  toggleCompletion(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../domain/Todo';
import { TodoJsonService } from '../todo-json.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todos: Todo[];

  constructor(private todoJsonService: TodoJsonService) { }

  ngOnInit() {
    this.loadTodoList();
    console.log(this.todos);
  }

  loadTodoList(): void {
    this.todoJsonService.getTodos()
    .subscribe(todos => this.todos = todos);
  }

}

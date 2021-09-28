import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ToDoService} from '../service/to-do.service';
import {Todo} from "../interface/todo";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos$?: Observable<Todo[]>;

  constructor(private todoService: ToDoService) {
  }

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$;
  }

  deleteTodo(todoId: number) {
    this.todoService.remove(todoId);
  }

  ready(num: number): void {
    this.todoService.confirm(num)
  }

  getDescription(item : Object): void {

  }
}

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ToDoService} from '../service/to-do.service';
import {Todo} from "../interface/todo";

@Component({
  selector: 'app-to-do-list',
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

  deleteTodo(id: number) {
    this.todoService.removeElement(id);
  }

  markReady(id: number): void {
    this.todoService.markReadyElement(id)
  }

}

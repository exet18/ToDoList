import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {LocalStorageService} from './local-storage.service';
import {Todo} from "../interface/todo";


@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private _todo = new BehaviorSubject<Todo[]>([]);
  readonly todos$ = this._todo.asObservable();
  private todos: Todo[] = [];
  private nextID = 0

  constructor(private LocalStorageService: LocalStorageService) {
    this.todos = LocalStorageService.GetData("list")
    this._todo.next(this.todos)
  }

  SaveData() {
    this.LocalStorageService.SetData("list", this.todos)
  }

  create(item: Todo) {

    this.todos === null ? this.todos = [] : this.todos;
    this.todos.length != 0 ? this.nextID = this.todos[this.todos.length - 1].id : this.nextID = 0;
    item.id = ++this.nextID;
    this.todos = [...this.todos, item];
    this._todo.next(this.todos);
    this.SaveData()
  }

  remove(id: number) {
    this.todos.forEach((i, indx) => {
      if (i.id === id) {
        this.todos.splice(indx, 1)
      }
    })
    this.SaveData()
    this._todo.next(this.todos)
  }

  confirm(id: number) {
    this.todos.forEach(i => {
      if (i.id === id) {
        if (i.status === true) {
          i.status = false
        } else {
          i.status = true
        }
      }
      this.SaveData()
      this._todo.next(this.todos)
    })
  }

  Ready() {
    this._todo.next(this.todos.filter(i => i.status === true))
  }

  ShowAll() {
    this._todo.next(this.todos)
  }

  Wait() {
    this._todo.next(this.todos.filter(i => i.status === false))
  }
}

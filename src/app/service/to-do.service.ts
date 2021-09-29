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
    this.todos = LocalStorageService.getData("list")
    this._todo.next(this.todos)
  }

  saveToLocalStorage() {
    this.LocalStorageService.setData("list", this.todos)
  }

  addElement(item: Todo) {
    this.todos === null ? this.todos = [] : this.todos;
    this.todos.length != 0 ? this.nextID = this.todos[this.todos.length - 1].id : this.nextID = 0;
    item.id = ++this.nextID;
    this.todos = [...this.todos, item];
    this._todo.next(this.todos);
    this.saveToLocalStorage()
  }

  removeElement(id: number) {
    this.todos.forEach((i, indx) => {
      if (i.id === id) {
        this.todos.splice(indx, 1)
      }
    })
    this.saveToLocalStorage()
    this._todo.next(this.todos)
  }

  markReadyElement(id: number) {
    this.todos.forEach(i => {
      if (i.id === id) {
        i.status = !i.status;
      }
      this.saveToLocalStorage()
      this._todo.next(this.todos)
    })
  }

  showReadyStatus() {
    this._todo.next(this.todos.filter(i => this.checkReadyStatus(i)))
  }

  showAllElements() {
    this._todo.next(this.todos)
  }

  showWaitStatus() {
    this._todo.next(this.todos.filter(i => this.checkWaitStatus(i)))
  }

  checkReadyStatus(item: Todo): boolean {
    return item !== null && item.status
  }

  checkWaitStatus(item: Todo): boolean {
    return item !== null && !item.status
  }
}

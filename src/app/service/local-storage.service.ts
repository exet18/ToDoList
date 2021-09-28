import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  GetData( key : string) {
    return JSON.parse(<string>localStorage.getItem(key))
  }
  SetData( key : string , data : Todo[]) {
    localStorage.setItem(key , JSON.stringify(data));
  }
}

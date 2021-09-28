import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToDoService} from "../service/to-do.service";
import {Observable} from "rxjs";
import {filter, mergeMap} from "rxjs/operators";
import {Todo} from "../interface/todo";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  id?: number
  todos$?: Observable<Todo[]>;
  itemDescription : Todo | undefined

  constructor(private route: ActivatedRoute, private todoService: ToDoService) {
    this.todos$ = todoService.todos$
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.todos$?.pipe(
      mergeMap(value => value),
      filter(value => value.id === this.id)
    ).subscribe(value => this.itemDescription = value)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoService } from '../service/to-do.service';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.css']
})
export class ToDoAddComponent implements OnInit {


  todoForm!: FormGroup;
  constructor(private todoService: ToDoService, private formBuilder: FormBuilder) {

    this.todoForm = this.formBuilder.group({
      status: [false],
      id: [0],
      value: ['', Validators.required],
      description: ['description']
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.todoService.create(this.todoForm.value);
    this.todoForm.controls.value.setValue("")
  }
  Ready(){
      this.todoService.Ready();
  }
  ShowAll(){
    this.todoService.ShowAll()
  }
  Wait(){
    this.todoService.Wait();
  }
}

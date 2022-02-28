import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Todo} from '../models/Todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  taskForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder,
              private service: TodoService) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  async saveTask() {
    if(!this.taskForm.valid) {
      return;
    }

    const todo: Todo = this.taskForm.value as Todo;
    await this.service.addTodo(todo);
    console.log('todo', todo);
  }
}

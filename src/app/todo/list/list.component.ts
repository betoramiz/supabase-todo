import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {TodoBrief} from '../models/TodoBrief';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: TodoBrief[] = [];
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.service.getAllTodos().then(t => this.todos = t);
  }


  getAllTodos() {
  }
}

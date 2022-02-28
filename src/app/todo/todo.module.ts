import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddTodoComponent } from './add-todo/add-todo.component';


@NgModule({
  declarations: [
    ListComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }

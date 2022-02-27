import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import {TodoBrief} from './models/TodoBrief';
import {Todo} from './models/Todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private subabaseClient: SupabaseClient;

  constructor() {
    this.subabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async getAllTodos(): Promise<TodoBrief[]> {
    const { data, error } = await this.subabaseClient.from('Todo').select('id, name');
    if(error) {
      console.log('error', error);
      return [];
    } else{
      console.log('data', data);
      return data as TodoBrief[];
    }
  }

  addTodo() {
    const todoTask: Todo = {
      name: 'Test 1',
      description: 'description task'
    };

    this.subabaseClient.from('Todo').insert(todoTask).then(r => console.log(r));
  }
}

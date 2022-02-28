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

  async addTodo(todo: Todo): Promise<Todo|null> {
    const { data, error } = await this.subabaseClient.from<Todo>('Todo').insert(todo).single();
    if(error) {
      return null;
    } else {
      return data;
    }
  }
}

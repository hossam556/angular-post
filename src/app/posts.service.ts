import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Post } from './Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'


  constructor(private http:HttpClient) { }

  getPost(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl)
  }
}

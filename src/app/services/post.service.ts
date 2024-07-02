import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostGeneric } from '../models/post.model';
import { Observable } from 'rxjs';

const baseUrl = 'https://dummyjson.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<PostGeneric> {
    return this.http.get<PostGeneric>(`${baseUrl}?limit=10`); 
  }
  get(id: any): Observable<Post> {
    return this.http.get<Post>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
	  //console.log(data);
    return this.http.post(`${baseUrl}/add`, data);
  }
  update(id: any, data: Post): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data); //{responseType: 'text'}
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`); //, {responseType: 'text'});
  }
  findByTitle(search: any): Observable<PostGeneric> {
    return this.http.get<PostGeneric>(`${baseUrl}/search?q=${search}&limit=10`);
  }
}

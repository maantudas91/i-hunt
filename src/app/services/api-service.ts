import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiService{
  key :string = 'NvSdgfEuVjnDz1zfB4rP1a9n6MUQ_un7nqYLaH3kJns'

  constructor(private http: HttpClient) {}

  getImages( query: string, page=1) {
    return this.http.get(
      `https://api.unsplash.com/search/photos/?query=${query}&page=${page}&per_page=12&client_id=${this.key}`
    );
  }
}

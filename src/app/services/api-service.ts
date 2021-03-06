import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService{

  constructor(private http: HttpClient) {}

  /**
   * @param {string} query
   * @param {number} page 
   * @returns {any} Observable
   */
  getImages( query: string, page=1): Observable<any> {
    return this.http.get(
      `${environment.APIEndpoint}?query=${query}&page=${page}&per_page=12&client_id=${environment.UNSPLASH_KEY}`
    );
  }
}

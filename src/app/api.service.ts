import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'd4901e0759ef4962ac2b11f78b4c394c';

  constructor(private httpClient: HttpClient) { }
  public getNews(){
    return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
}

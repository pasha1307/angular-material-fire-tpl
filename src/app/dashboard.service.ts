import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
baseUrl = 'assets/data.json';
  constructor(private http: HttpClient) { }

  getAll() {
   return this.http.get(this.baseUrl);
  }

}

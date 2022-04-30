import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from 'src/app/help';

@Injectable({
  providedIn: 'root',
})
export class LoadResolutionsService {
  constructor(private http: HttpClient) {}
  public loadResolutions() {
    return this.http.get(`${baseURL}/resolution/`);
  }
}

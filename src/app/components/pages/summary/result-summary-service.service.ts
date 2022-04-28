import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from 'src/app/help';

@Injectable({
  providedIn: 'root',
})
export class ResultSummaryServiceService {
  constructor(private http: HttpClient) {}

  public getResultSummary(resId: any, optionId: any) {
    return this.http.get(`${baseURL}/result/${resId}/${optionId}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from 'src/app/help';

@Injectable({
  providedIn: 'root'
})
export class LoadQuestionsServiceService {

  constructor(private http:HttpClient) { }

  public loadQuestion()
{
  return this.http.get(`${baseURL}/question/`)
}

}

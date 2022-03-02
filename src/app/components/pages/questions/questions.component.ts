import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadQuestionsServiceService } from './load-questions-service.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  constructor(
    private questionservice: LoadQuestionsServiceService,
    private route: ActivatedRoute
  ) {}

  public questions = [
    {
      id: 1,
      name: 'What is your name?',
      isOptionAvailable: 0,
      type: 'text',
      options: [
        {
          id: 1,
          label: 'infj',
          lvalue: 1,
        },
      ],
    },
  ];
  // load metadata method call
  ngOnInit(): void {
    console.log('before calling function');
    this.questionservice.loadQuestion().subscribe(
      (data: any) => {
        this.questions = data;
        console.log('hi');
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  formSubmit() {}
}

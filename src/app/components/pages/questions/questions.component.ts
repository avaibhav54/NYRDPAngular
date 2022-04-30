import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadQuestionsServiceService } from './load-questions-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { ResHistory, User } from 'src/app/shared/shared-models';
import { questionControls, ResHistoryControls } from './questions-model';
import { FormControl } from '@angular/forms';
import { UserService } from './user.service';
import { LoadResolutionsService } from './load-resolutions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  constructor(
    private questionservice: LoadQuestionsServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private resolutionService: LoadResolutionsService
  ) {}

  questions = [] as Array<questionControls>;
  resolutions = [
    {
      id: 1,
      name: 'Give more effort at work',
      family: {
        id: 1,
        name: 'Career',
      },
    },
  ];
  // load metadata method call
  ngOnInit(): void {
    console.log('before calling function');
    this.questionservice.loadQuestion().subscribe(
      (data: any) => {
        this.questions = data.map((question: any) => {
          let _questionControl = {} as questionControls;
          _questionControl.question = question;
          _questionControl.control = new FormControl();
          if (question.isOptionAvailable === 2) {
            _questionControl.resHistoryControl = [];
          }
          console.log(_questionControl);
          return _questionControl;
        });
      },
      (error) => {
        console.log(error);
      }
    );

    this.resolutionService.loadResolutions().subscribe(
      (data: any) => {
        console.log(data);
        this.resolutions = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  saveUser() {
    //this.userService.addUser(this.user).subscribe();
  }
  handlePrev(paginator: MatPaginator) {
    paginator.previousPage();
  }
  handleNext(paginator: MatPaginator) {
    paginator.nextPage();
  }

  handleSaveUserDetails() {
    console.log('function called');
    let userDetailsReq = {} as User;
    this.questions.forEach((questionControl) => {
      if (questionControl.question.id === 1) {
        userDetailsReq.name = questionControl.control.value;
      }
      if (questionControl.question.id === 2) {
        userDetailsReq.ageGroupId = questionControl.control.value;
      }
      if (questionControl.question.id === 3) {
        userDetailsReq.gender = questionControl.control.value;
      }
      if (questionControl.question.id === 4) {
        userDetailsReq.personalityId = questionControl.control.value;
      }
      if (questionControl.question.id === 5) {
        userDetailsReq.sleepHabit = questionControl.control.value;
      }
      if (questionControl.question.id === 6) {
        userDetailsReq.spendWeekend = questionControl.control.value;
      }
      if (questionControl.question.id === 7) {
        userDetailsReq.modeOfPayment = questionControl.control.value;
      }
      if (questionControl.question.id === 8) {
        userDetailsReq.exerciseRegularly = questionControl.control.value;
      }
      if (questionControl.question.id === 9) {
        userDetailsReq.occupationId = questionControl.control.value;
      }
      if (questionControl.question.id === 10) {
        userDetailsReq.freeTimeId = questionControl.control.value;
      }
      if (questionControl.question.id === 11) {
        userDetailsReq.history = questionControl.resHistoryControl.map(
          (control) => {
            let _resHistory = {} as ResHistory;
            _resHistory.resolutionId = control.resolution.value;
            _resHistory.successRateId = control.successRate.value;
            return _resHistory;
          }
        );
      }
    });
    sessionStorage.setItem('user', JSON.stringify(userDetailsReq));
    console.log(userDetailsReq);
    this.userService.addUser(userDetailsReq).subscribe(
      (res) => {},
      (error) => {}
    );
    this.router.navigate(['/resolutions']);
  }

  handleAddResHistoryControl(resHistoryControls: Array<ResHistoryControls>) {
    let _resHistoryControls = {} as ResHistoryControls;
    _resHistoryControls.resolution = new FormControl();
    _resHistoryControls.successRate = new FormControl();
    resHistoryControls.push(_resHistoryControls);
  }
}

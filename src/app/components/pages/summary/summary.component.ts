import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultSummaryServiceService } from './result-summary-service.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private summaryService: ResultSummaryServiceService
  ) {}
  colorScheme = [
    { name: 'Male', value: '#F44336' },
    { name: 'Holiday/Trip', value: '#E91E63' },
    { name: 'Early Bird', value: '#9C27B0' },
    { name: '18-23', value: '#03A9F4' },
    { name: 'Debit Card/ Cash', value: '#009688' },
    { name: 'Student', value: '#CDDC39' },
    { name: 'Others', value: '#BCAAA4' },
  ];
  chartData: any[] = [];
  resName = '';
  resid = 0;
  results: any[] = [];
  ngOnInit(): void {
    this.resid = this.route.snapshot.params['resid'];
    this.resName = this.route.snapshot.params['name'];
    var user = JSON.parse(sessionStorage['user']);
    var result: any[] = [];
    var keys = Object.keys(user);
    keys.forEach(function (key) {
      result.push(user[key]);
    });
    for (var ob in result) {
      console.log(result[ob]);

      this.summaryService.getResultSummary(this.resid, result[ob]).subscribe(
        (res: any) => {
          console.log(res);
          let tdata = [
            { name: res.optionValue, value: res.value },
            { name: 'Others', value: 100 - res.value },
          ];
          console.log(tdata[0].value);
          this.chartData.push(tdata);
          this.results.push(res);
        },
        (error) => {}
      );
    }
    console.log(this.results);
  }
}

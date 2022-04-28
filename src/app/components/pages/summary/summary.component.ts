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

  chartData: any[] = [];

  resid = 0;
  results: any[] = [];
  ngOnInit(): void {
    this.resid = this.route.snapshot.params['resid'];

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
            { name: 'Other', value: 100 - res.value },
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

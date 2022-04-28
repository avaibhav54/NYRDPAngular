import { Component, OnInit } from '@angular/core';
import { LoadResolutionsServiceService } from './load-resolutions-service.service';

@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.css'],
})
export class ResolutionsComponent implements OnInit {
  constructor(private resolutionService: LoadResolutionsServiceService) {}

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
  ngOnInit(): void {
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
}

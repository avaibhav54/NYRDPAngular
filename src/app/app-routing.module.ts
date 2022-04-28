import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { QuestionsComponent } from './components/pages/questions/questions.component';
import { ResolutionsComponent } from './components/pages/resolutions/resolutions.component';
import { SummaryComponent } from './components/pages/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'questions',
    component: QuestionsComponent,
    pathMatch: 'full',
  },
  {
    path: 'resolutions',
    component: ResolutionsComponent,
    pathMatch: 'full',
  },
  {
    path: 'result/:resid',
    component: SummaryComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

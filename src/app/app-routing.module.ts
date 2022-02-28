import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { QuestionsComponent } from './components/pages/questions/questions.component';

const routes: Routes = [


  {
    path:'',
    component:HomeComponent,
    pathMatch:"full",
  },
  {
    path:'questions',
    component:QuestionsComponent,
    pathMatch:"full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

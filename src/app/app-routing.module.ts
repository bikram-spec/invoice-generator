import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchComponent} from '../app/client/branch/branch.component'
import { SubjectsComponent } from './client/subjects/subjects.component';
import { QuestionsComponent } from './client/questions/questions.component';
import { PapersComponent } from './client/papers/papers.component';
import { NavComponent } from './client/nav/nav.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { FormComponent } from './client/form/form.component';
import { SigninComponent } from './client/signin/signin.component';
import { SignupComponent } from './client/signup/signup.component';
const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:SigninComponent},
  {path:'', component:NavComponent, children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'branch', component:BranchComponent},
    {path:'subjects',component:SubjectsComponent},
    {path:'questions',component:QuestionsComponent},
    {path:'papers',component:PapersComponent},
    {path:'branch/form',component:FormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

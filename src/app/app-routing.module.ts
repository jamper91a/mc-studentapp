import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'guides', loadChildren: './guides/guides.module#GuidesPageModule' },
  { path: 'steps/:idguide/:stepNumber', loadChildren: './steps/steps.module#StepsPageModule' },
  { path: 'step/:stepId', loadChildren: './step/step.module#StepPageModule' },
  { path: 'schools', loadChildren: './schools/schools.module#SchoolsPageModule' },
  { path: 'school/:schoolId', loadChildren: './school/school.module#SchoolPageModule' },
  { path: 'courses/:schoolId', loadChildren: './courses/courses.module#CoursesPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

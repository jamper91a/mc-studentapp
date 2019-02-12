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
  { path: 'steps/:idguide/:nameguide', loadChildren: './steps/steps.module#StepsPageModule' },
  { path: 'step/:idstep/:namestep/:nameguide/:idguide', loadChildren: './step/step.module#StepPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

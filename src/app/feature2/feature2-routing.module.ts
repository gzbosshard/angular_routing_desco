import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page3Component } from './pages/page3/page3.component';

const routes: Routes = [{ path: 'page3', component: Page3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature2RoutingModule {}

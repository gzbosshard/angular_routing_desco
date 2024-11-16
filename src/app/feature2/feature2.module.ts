import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2RoutingModule } from './feature2-routing.module';
import { Page3Component } from './pages/page3/page3.component';

@NgModule({
  declarations: [Page3Component],
  imports: [CommonModule, Feature2RoutingModule],
})
export class Feature2Module {}

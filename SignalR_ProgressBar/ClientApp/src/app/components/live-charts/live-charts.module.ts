import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveChartsRoutingModule } from './live-charts-routing.module';
import { LiveChartsComponent } from './live-charts.component';


@NgModule({
  declarations: [
    LiveChartsComponent
  ],
  imports: [
    CommonModule,
    LiveChartsRoutingModule
  ]
})
export class LiveChartsModule { }

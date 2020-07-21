import { NgModule } from '@angular/core';

import { AppSkyModule } from './app-sky.module';
import { SkyAgGridModule } from '@skyux/ag-grid';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  exports: [
    AppSkyModule,
    SkyAgGridModule,
    AgGridModule
  ]
})
export class AppExtrasModule { }

import { NgModule } from '@angular/core';

import { AppSkyModule } from './app-sky.module';

import { AgGridModule } from 'ag-grid-angular';
// import { SkyDataEntryGridEditModalComponent } from './data-entry-grid-demo/data-entry-grid-edit-modal.component';


@NgModule({
  exports: [
    AppSkyModule,
    AgGridModule,
    // SkyDataEntryGridEditModalComponent    
  ]
})
export class AppExtrasModule { }

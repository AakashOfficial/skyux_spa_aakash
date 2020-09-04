import { NgModule } from '@angular/core';

import { AppSkyModule } from './app-sky.module';
// import { SkyVerticalTabDemoModule } from './components/vertical-tabs-demo.module';

@NgModule({
  exports: [
    AppSkyModule
    // SkyVerticalTabDemoModule
  ]
})
export class AppExtrasModule { }
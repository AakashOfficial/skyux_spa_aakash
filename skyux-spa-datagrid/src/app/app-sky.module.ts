import { NgModule } from '@angular/core';

import { SkyAvatarModule } from '@skyux/avatar';

import { SkyAlertModule, SkyKeyInfoModule } from '@skyux/indicators';

import { SkyFluidGridModule } from '@skyux/layout';

import { SkyNavbarModule } from '@skyux/navbar';

import { SkyAgGridModule } from '@skyux/ag-grid';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyToolbarModule } from '@skyux/layout';
import { SkySearchModule } from '@skyux/lookup';
import { SkyModalModule } from '@skyux/modals';

import { SkyDataEntryGridCMComponent } from './data-entry-grid-demo/data-entry-grid-context-menu.component';

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyAgGridModule,
    SkyDropdownModule,
    SkyToolbarModule,
    SkySearchModule,
    SkyModalModule,
    // SkyDataEntryGridCMComponent
  ],
  // declarations: [SkyDataEntryGridCMComponent],
  entryComponents: [SkyDataEntryGridCMComponent],
  providers:[SkyDataEntryGridCMComponent],
})
export class AppSkyModule { }

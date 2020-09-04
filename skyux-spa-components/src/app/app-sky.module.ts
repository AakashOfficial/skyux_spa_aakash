import { NgModule } from '@angular/core';

import { SkyAvatarModule } from '@skyux/avatar';

import { SkyAlertModule, SkyKeyInfoModule, SkyWaitModule } from '@skyux/indicators';

import { SkyFluidGridModule } from '@skyux/layout';

import { SkyNavbarModule } from '@skyux/navbar';

import { SkyActionButtonModule, SkyBackToTopModule, SkyToolbarModule } from '@skyux/layout';
// import { SkyAlertModule } from '@skyux/indicators';
import { SkyAutocompleteModule } from '@skyux/lookup';
import { SkyIconModule, SkyTokensModule } from '@skyux/indicators';
import { SkyCheckboxModule, SkyCharacterCounterModule } from '@skyux/forms';

import { SkyCardModule } from '@skyux/layout';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyCodeModule, SkyCodeBlockModule } from '@blackbaud/skyux-lib-code-block';
import { SkyColorpickerModule } from '@skyux/colorpicker';
import { SkyConfirmModule, SkyModalModule } from '@skyux/modals';
import { SkyClipboardModule } from '@blackbaud/skyux-lib-clipboard';
import { SkyCountryFieldModule } from '@skyux/lookup';
import { SkyProgressIndicatorModule } from '@skyux/progress-indicator';
// import { SkyTabsModule } from '@skyux/tabs';
import { SkyWizardDemoModalCustomizeComponent } from './components/wizard-demo-modal.component';
// import { SkyVerticalTabDemoModule } from './components/vertical-tabs-demo.module';

import { SkyUrlValidationModule } from '@skyux/validation';

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyActionButtonModule,
    SkyAlertModule,
    SkyAutocompleteModule,
    SkyIconModule,
    SkyAvatarModule,
    SkyCheckboxModule,
    SkyBackToTopModule,
    SkyCardModule,
    SkyDropdownModule,
    SkyCharacterCounterModule,
    SkyCodeModule,
    SkyCodeBlockModule,
    SkyColorpickerModule,
    SkyConfirmModule,
    SkyClipboardModule,
    SkyCountryFieldModule,
    SkyProgressIndicatorModule,
    SkyModalModule,
    SkyWaitModule,
    SkyUrlValidationModule,
    SkyToolbarModule,
    SkyTokensModule,
    // SkyVerticalTabDemoModule
    // SkyWizardDemoModalCustomizeComponent
  ],
  entryComponents: [ SkyWizardDemoModalCustomizeComponent ],
  providers: [ SkyWizardDemoModalCustomizeComponent ],
  // declarations: [SkyWizardDemoModalCustomizeComponent]
})
export class AppSkyModule { }

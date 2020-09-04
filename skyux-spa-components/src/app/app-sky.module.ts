import { NgModule } from '@angular/core';

import { SkyAvatarModule } from '@skyux/avatar';

import { SkyAlertModule, SkyKeyInfoModule } from '@skyux/indicators';

import { SkyFluidGridModule } from '@skyux/layout';

import { SkyNavbarModule } from '@skyux/navbar';

import { SkyActionButtonModule, SkyBackToTopModule } from '@skyux/layout';
// import { SkyAlertModule } from '@skyux/indicators';
import { SkyAutocompleteModule } from '@skyux/lookup';
import { SkyIconModule } from '@skyux/indicators';
import { SkyCheckboxModule, SkyCharacterCounterModule } from '@skyux/forms';

import { SkyCardModule } from '@skyux/layout';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyCodeModule, SkyCodeBlockModule } from '@blackbaud/skyux-lib-code-block';
import { SkyColorpickerModule } from '@skyux/colorpicker';
import { SkyConfirmModule, SkyModalModule } from '@skyux/modals';
import { SkyClipboardModule } from '@blackbaud/skyux-lib-clipboard';
import { SkyCountryFieldModule } from '@skyux/lookup';
import { SkyProgressIndicatorModule } from '@skyux/progress-indicator';
import { SkyWizardDemoModalCustomizeComponent } from './components/wizard-demo-modal.component';

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
    // SkyWizardDemoModalCustomizeComponent
  ],
  entryComponents: [SkyWizardDemoModalCustomizeComponent],
  providers:[SkyWizardDemoModalCustomizeComponent],
  // declarations: [SkyWizardDemoModalCustomizeComponent]
})
export class AppSkyModule { }

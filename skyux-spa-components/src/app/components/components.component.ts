import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { SkyAutocompleteSearchFunction, SkyAutocompleteSearchFunctionFilter,
    SkyAutocompleteSearchFunctionResponse, SkyAutocompleteSelectionChange,
    SkyCountryFieldCountry } from '@skyux/lookup';

import { SkyFileItem } from '@skyux/forms';

import { SkyConfirmButtonAction, SkyConfirmInstance, SkyConfirmService, SkyConfirmType } from '@skyux/modals';

import { SkyModalService } from '@skyux/modals';

import { SkyWizardDemoModalCustomizeComponent } from './wizard-demo-modal.component';

@Component({
  selector: 'component',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentComponent {

    // Avatar
    public name = 'Robert C. Hernandez';
    public showImage = true;
    public avatarUrl: string | File = 'https://imgur.com/tBiGElW.png';

    public get src(): string | File {
        return this.showImage ?  this.avatarUrl : undefined;
    }

    public updateSrc(fileItem: SkyFileItem) {
        /*
        This is where you might upload the new avatar,
        but for this demo we'll just update it locally.
        */
        if (fileItem) {
        this.avatarUrl = fileItem.file;
        }
    }

    // Cards
    public showTitle = true;
    public showContent = true;
    public showAction = true;
    public showCheckbox = true;

    // Active Buttons
    public url = {
        url: 'https://developer.blackbaud.com/skyux/components'
    };

    public routerlink = {
        route: {
        extras: {
            queryParams: {
            component: 'SkyCheckboxDemoComponent'
            }
        }
        }
    };

    // Character Count
    public characterCountForm: FormGroup;
    public description: FormControl;
    public comments: FormControl;
    public maxDescriptionCharacterCount: number = 60;
    public maxCommentsCharacterCount: number = 250;
    public transaction: { description: string, comments: string } = {description: '', comments: ''};

    public reactiveForm: FormGroup;
    public templateDrivenModel: any = {
        favoriteColor: { name: 'Red' }
    };

    public selectedColor: any;
    public colors: any[] = [
        { name: 'Red' },
        { name: 'Blue' },
        { name: 'Green' },
        { name: 'Orange' },
        { name: 'Pink' },
        { name: 'Purple' },
        { name: 'Yellow' },
        { name: 'Brown' },
        { name: 'Turquoise' },
        { name: 'White' },
        { name: 'Black' }
    ];

    public largestOcean: any;
    public oceans: any[] = [
        { title: 'Arctic', id: 1 },
        { title: 'Atlantic', id: 2 },
        { title: 'Indian', id: 3 },
        { title: 'Pacific', id: 4 }
    ];

    public farthestPlanet: any;
    public planets: any[] = [
        { name: 'Mercury', description: 'Mercury is a planet in our solar system.' },
        { name: 'Venus', description: 'Venus is a planet in our solar system.' },
        { name: 'Earth', description: 'Earth is a planet in our solar system.' },
        { name: 'Mars', description: 'Mars is a planet in our solar system.' },
        { name: 'Jupiter', description: 'Jupiter is a planet in our solar system.' },
        { name: 'Saturn', description: 'Saturn is a planet in our solar system.' },
        { name: 'Uranus', description: 'Uranus is a planet in our solar system.' },
        { name: 'Neptune', description: 'Neptune is a planet in our solar system.' }
    ];

    public searchFilters: SkyAutocompleteSearchFunctionFilter[] = [
        (searchText: string, item: any): boolean => {
        return (item.name !== 'Red');
        }
    ];

    public selectedAction: SkyConfirmButtonAction;

    public selectedText: string;

    constructor(
        private formBuilder: FormBuilder,
        private confirmService: SkyConfirmService,
        private modal: SkyModalService
    ) { }

    // Wizard
    public openWizard(): void {
        this.modal.open(SkyWizardDemoModalCustomizeComponent);
    }

    // Confirm
    public openOKConfirm() {
        const dialog: SkyConfirmInstance = this.confirmService.open({
        message: 'Do you wish to continue?',
        type: SkyConfirmType.OK
        });

        dialog.closed.subscribe((result: any) => {
        this.selectedText = undefined;
        this.selectedAction = result.action;
        });
    }

    public openYesCancelConfirm() {
        const dialog: SkyConfirmInstance = this.confirmService.open({
        message: 'Do you wish to continue?',
        type: SkyConfirmType.YesCancel
        });

        dialog.closed.subscribe((result: any) => {
        this.selectedText = undefined;
        this.selectedAction = result.action;
        });
    }

    public openYesCancelConfirmWithBody() {
        const dialog: SkyConfirmInstance = this.confirmService.open({
        message: 'Do you wish to continue?',
        body: 'This could be dangerous!',
        type: SkyConfirmType.YesCancel
        });

        dialog.closed.subscribe((result: any) => {
        this.selectedText = undefined;
        this.selectedAction = result.action;
        });
    }

    public openYesNoCancelConfirm() {
        const dialog: SkyConfirmInstance = this.confirmService.open({
        message: 'Do you wish to continue?',
        type: SkyConfirmType.YesNoCancel
        });

        dialog.closed.subscribe((result: any) => {
        this.selectedText = undefined;
        this.selectedAction = result.action;
        });
    }

    public openCustomConfirm() {
        const buttons = [
        { text: '1', action: 'foo', styleType: 'primary' },
        { text: '2', action: 'bar' },
        { text: '3', action: 'baz', autofocus: true }
        ];

        const dialog: SkyConfirmInstance = this.confirmService.open({
        message: 'What option are you going to select?',
        type: SkyConfirmType.Custom,
        buttons
        });

        dialog.closed.subscribe((result: any) => {
        this.selectedAction = result.action;

        buttons.some((button: any) => {
            if (button.action === result.action) {
            this.selectedText = button.text;
            return true;
            }
        });
        });
    }

    // Country Fields
    public countryControl: FormControl;

    public countryData: SkyCountryFieldCountry;

    public countryForm: FormGroup;
    
    public ngOnInit(): void {
        this.createForm();

        this.description = this.formBuilder.control('Boys and Girls Club of South Carolina donation');
        this.comments = this.formBuilder.control(`Donation to the Boys and Girls Club will be used to refurbish safe playground equipment and purchase new laptops. The laptops will be used to complete homework and improve technological skills.`);

        this.characterCountForm = this.formBuilder.group({
            description: this.description,
            comments: this.comments
        });

        this.countryControl = new FormControl();
        this.countryControl.setValue({
            name: 'Australia',
            iso2: 'au'
        });
        this.countryForm = new FormGroup({
            'countryControl': this.countryControl
        });

        this.countryControl.setValidators([Validators.required]);
    
    }

    // Check Box
    public checkboxItems = [
        { label: 'Checkbox 1' },
        { label: 'Checkbox 2', checked: true },
        { label: 'Disabled', disabled: true },
        { label: 'Disabled and selected', checked: true, disabled: true }
    ];

    public iconCheckboxGroup = [
        { label: 'Bold', checked: true, icon: 'bold' },
        { label: 'Italic', checked: false, icon: 'italic' },
        { label: 'Underline', checked: true, icon: 'underline' }
    ];

    public iconCheckboxItems = [
        { label: 'Info icon checkbox 1', checked: true, icon: 'info' },
        { label: 'Disabled info icon checkbox 1', checked: true, disabled: true, icon: 'strikethrough' },
        { label: 'Success icon checkbox', checked: true, icon: 'star', checkboxType: 'success' },
        { label: 'Warning icon checkbox', checked: true, icon: 'exclamation-triangle', checkboxType: 'warning' },
        { label: 'Danger icon checkbox', checked: true, icon: 'ban', checkboxType: 'danger' }
    ];

    public filterActionClick() {
        alert('Filter action clicked');
    }

    public openActionClick() {
        alert('Open action clicked');
    }

    Clicked(btntype:string){
        alert(btntype +" Button Clicked") ;
    }

    public submitTemplateForm(formData: any): void {
        alert('Form submitted with: \n' + JSON.stringify(formData));
    }

    public submitReactiveForm(): void {
        alert('Form submitted with: \n' + JSON.stringify(this.reactiveForm.value));
    }

    public onPlanetSelection(args: SkyAutocompleteSelectionChange): void {
        alert(`You selected ${args.selectedItem.name}`);
    }

    public getOceanSearchFunction(): SkyAutocompleteSearchFunction {
        const searchFunction = (searchText: string, oceans: any[]): SkyAutocompleteSearchFunctionResponse => {
        return new Promise((resolve: Function) => {
            const searchTextLower = searchText.toLowerCase();

            const results = oceans.filter((ocean: any) => {
            const val = ocean.title;
            const isMatch = (val && val.toString().toLowerCase().indexOf(searchTextLower) > -1);
            return isMatch;
            });

            // Simulate an async request.
            setTimeout(() => {
            resolve(results);
            }, 500);
        });
        };

        return searchFunction;
    }

    private createForm(): void {
        this.reactiveForm = this.formBuilder.group({
        favoriteColor: undefined,
        farthestPlanet: {},
        largestOcean: { title: 'Arctic', id: 1 }
        });
    }
}
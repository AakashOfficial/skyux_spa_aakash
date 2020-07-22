// import { Component, OnInit } from '@angular/core';

// import { GridApi, GridReadyEvent, GridOptions, ValueFormatterParams } from 'ag-grid-community';

// import {SkyCellType, SkyAgGridService } from '@skyux/ag-grid';

// import { SKY_AG_GRID_DEMO_DATA } from './data-entry-grid-demo-data';

// @Component({
//   selector: 'app-viewdata',
//   templateUrl: './viewdata.component.html',
//   styleUrls: ['./viewdata.component.scss']
// })
// export class ViewdataComponent implements OnInit {
//   public gridData = SKY_AG_GRID_DEMO_DATA;
  
//   public columnDefs = [
//     { field: 'selected', type: SkyCellType.RowSelector },
//     { colId: 'context', headerName: '', maxWidth: 50, sortable: false },
//     { field: 'name', headerName: 'Name' },
//     { field: 'age', headerName: 'Age', type: SkyCellType.Number, maxWidth: 60 },
//     { field: 'startDate', headerName: 'Start Date', type: SkyCellType.Date, sort: 'asc' },
//     { field: 'endDate', headerName: 'End Date', type: SkyCellType.Date, valueFormatter: this.endDateFormatter },
//     { field: 'department', headerName: 'Department', type: SkyCellType.Autocomplete },
//     { field: 'jobTitle', headerName: 'Title', type: SkyCellType.Autocomplete }
//   ];

//   public gridApi: GridApi;
//   public gridOptions: GridOptions;
//   public searchText: string;

//   constructor(
//     private agGridService: SkyAgGridService,
//   ) { }

//   public ngOnInit(): void {
//     this.gridOptions = {
//       columnDefs: this.columnDefs,
//       onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
//     };
//     this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
//   }

//   public onGridReady(gridReadyEvent: GridReadyEvent): void {
//     this.gridApi = gridReadyEvent.api;

//     this.gridApi.sizeColumnsToFit();
//   }

//   private endDateFormatter(params: ValueFormatterParams): string {
//     const dateConfig = { year: 'numeric', month: '2-digit', day: '2-digit' };
//     return params.value ? params.value.toLocaleDateString('en-us', dateConfig) : 'N/A';
//   }
// }










// import { Component, OnInit } from '@angular/core';

// import { SkyGridMessage, SkyGridSelectedRowsModelChange } from '@skyux/grids';

// import { ListSortFieldSelectorModel } from '@skyux/list-builder-common';

// import { BehaviorSubject } from 'rxjs';

// import { Subject } from 'rxjs';

// @Component({
//   selector: 'app-viewdata',
//   templateUrl: './viewdata.component.html',
//   styleUrls: ['./viewdata.component.scss']
// })
// export class ViewdataComponent implements OnInit {

//   public data = [
//     { id: '1', name: 'Niels Bohr', email: 'niels.bohr@example.com', amount: 170.75, status: 'Paid' },
//     { id: '2', name: 'Ada Lovelace', email: 'ada.lovelace@example.com', amount: 114.13, status: 'Paid' },
//     { id: '3', name: 'Marie Curie', email: 'marie.curie@example.com', amount: 111, status: 'Past due' },
//     { id: '4', name: 'Barbara McClintock', email: 'barbara.mcclintock@example.com', amount: 84.63, status: 'Paid' },
//     { id: '5', name: 'Michael Faraday', email: 'michael.faraday@example.com', amount: 83.97, status: 'Paid' },
//     { id: '6', name: 'Enrico Fermi', email: 'enrico.fermi@example.com', amount: 74.5, status: 'Past due' },
//     { id: '7', name: 'Mae C. Jemison', email: 'mae.jemison@example.com', amount: 70.86, status: 'Paid' }
//   ];

//   public dataForMultiselect = this.data.slice(0);

//   public asyncHeading = new BehaviorSubject<string>('');

//   public selectedRows: string;

//   public gridController = new Subject<SkyGridMessage>();

//   public ngOnInit() {
//     // Simulate async request:
//     setTimeout(() => {
//       this.asyncHeading.next('Amount');
//     }, 1000);
//   }

//   public onSortChangeForGrid(activeSort: ListSortFieldSelectorModel) {
//     this.data = this.sortGridData(activeSort, this.data);
//   }

//   public onSortChangeForMultiselectGrid(activeSort: ListSortFieldSelectorModel) {
//     this.dataForMultiselect = this.sortGridData(activeSort, this.dataForMultiselect);
//   }

//   public onMultiselectSelectionChange(value: SkyGridSelectedRowsModelChange) {
//     this.selectedRows = value.selectedRowIds.toString();
//   }

//   private sortGridData(activeSort: ListSortFieldSelectorModel, data: any[]) {
//     const sortField = activeSort.fieldSelector;
//     const descending = activeSort.descending;

//     return data.sort((a: any, b: any) => {
//       let value1 = a[sortField];
//       let value2 = b[sortField];

//       if (value1 && typeof value1 === 'string') {
//         value1 = value1.toLowerCase();
//       }

//       if (value2 && typeof value2 === 'string') {
//         value2 = value2.toLowerCase();
//       }

//       if (value1 === value2) {
//         return 0;
//       }

//       let result = value1 > value2 ? 1 : -1;

//       if (descending) {
//         result *= -1;
//       }

//       return result;
//     }).slice();
//   }
// }




import { Component, OnInit } from '@angular/core';

import { DataService} from '../services/data.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.scss']
})
export class ViewdataComponent implements OnInit {

  constructor(private userservice : DataService){}
  
  rowData = '' ;

  columnDefs = [
        {headerName: 'First Name', field: 'firstname',sortable: true, filter: true },
        {headerName: 'Last Name', field: 'lastname',sortable: true, filter: true },
        {headerName: 'Contact', field: 'contact',sortable: true, filter: true },
        {headerName: 'Email', field: 'email',sortable: false, filter: true },
        {headerName: 'DateOfBirth', field: 'dob' },
        {headerName: 'Address', field: 'address'}
    ];

    // rowData = [
    //     { firstname: 'A', lastname: 'A', contact: '9898989898', email: 'a@gmail.com', dob: '1998-12-26', address: 'Test' },
    //     { firstname: 'B', lastname: 'B', contact: '9898989898', email: 'b@gmail.com', dob: '1998-12-26', address: 'Test' },
    //     { firstname: 'C', lastname: 'C', contact: '9898989898', email: 'c@gmail.com', dob: '1998-12-26', address: 'Test' }
    // ];

  public ngOnInit(): void {
    this.rowData = this.userservice.getUser();
  }

}
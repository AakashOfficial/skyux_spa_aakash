import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  public nav = [
    {
      titleKey: 'app_nav_home',
      path: '/'
    },
    {
      titleKey: 'app_nav_about',
      path: '/about'
    },
    {
      titleKey: 'Datagrid',
      path: '/datagridexample'
    },
    {
      titleKey: 'add_data',
      path: '/adddata'
    },
    {
      titleKey: 'view_saved_data',
      path: '/viewdata'
    },
    {
      titlekey: 'entrygrid',
      path: '/data-entry-grid-demo'
    }
  ];
}

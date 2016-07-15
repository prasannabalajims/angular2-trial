import 'rxjs/Rx'
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {FlightListComponent} from './components/flight-list';
import {disableDeprecatedForms, provideForms} from '@angular/forms'

bootstrap(FlightListComponent);

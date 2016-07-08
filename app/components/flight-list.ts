import {Component, OnInit, Input} from '@angular/core'
import {FlightsListService} from '../services/flight-list.service'
import {Flight} from '../models/flight'

@Component({
    selector: 'flight-list',
    templateUrl: 'app/templates/flight-list.html',
    providers: [FlightsListService]
})
/**
 * FlightListComponent class acts as a Component for providing an 
 * interface to display the list of flights available 
 */
export class FlightListComponent implements OnInit {
    @Input() flightList: Flight[];
    @Input() selectedFlight= new Flight();
    constructor(private flightListService: FlightsListService) {

    }

    ngOnInit() {
        this.flightListService.getFlightsList()
            .then(flightList => {
                this.flightList = flightList;
                this.selectedFlight = this.flightList[0];                
            })
    }

    onSelected(flight: Flight) {
        this.selectedFlight = flight;
    }
}


import {Component, OnInit, Input} from '@angular/core'
import {FlightsListService} from '../services/flight-list.service'
import {Flight} from '../models/flight'
import {FlightNoValidator} from '../utils/flightNoValidator'
import {ControlGroupHelper} from '../utils/controlGroupHelper'
import {FormGroup, FormControl, Validators, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms'

@Component({
    selector: 'flight-list',
    templateUrl: 'app/templates/flight-list.html',
    providers: [FlightsListService],
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
/**
 * FlightListComponent class acts as a Component for providing an 
 * interface to display the list of flights available / departing
 */
export class FlightListComponent implements OnInit {
    @Input() flightList: Flight[];
    @Input() selectedFlight = new Flight();
    serviceProviders = []
    flightInfo = new Flight();
    flightInfoForm: FormGroup

    validationMessage = {
        cannotContainSpace: 'Cannot contain spaces',
        minlength: 'Less than Minimum length',
        required: 'Required',
        invalidCharacters: 'Invalid Characters'
    }

    attributeNames: string[] = ['flightNo', 'model', 'serviceProviderName', 'destinationCode', 'arrivalTime', 'departureTime', 'ticketFare'];

    constructor(private _flightListService: FlightsListService) {
        this.flightInfoForm = new FormGroup({
            'flightNo': new FormControl(this.flightInfo.flightNo,
                Validators.compose([Validators.required, FlightNoValidator.cannotContainSpace,
                    FlightNoValidator.specialCharacterValidator, Validators.minLength(4)])),
            'model': new FormControl(this.flightInfo.model, Validators.required),
            'serviceProviderName': new FormControl(this.flightInfo.serviceProviderName, Validators.required),
            'destinationCode': new FormControl(this.flightInfo.destinationCode, Validators.required)
        });
    }

    /**
     * Fetches list of flights from service
     *  
     */
    ngOnInit() {
        this._flightListService.getFlightsList()
            .then(flightList => {
                this.flightList = flightList;
                this.selectedFlight = this.flightList[0];
            })

        this._flightListService.getServiceProvidersList()
            .then(serviceProvidersList => {
                this.serviceProviders = serviceProvidersList;
            });
    }

    /**
     * Assign flight information based on selection from the grid
     * @param flight 
     */
    onSelected(flight: Flight) {
        this.selectedFlight = this.flightInfo = flight;
        ControlGroupHelper.updateControls(this.flightInfoForm, this.selectedFlight, this.attributeNames)
    }

    /**
     * Update model values based on the form data manipulation on 
     * form submit
     * @param event
     */
    onSubmit(event) {
        console.log(this.flightInfoForm);
        ControlGroupHelper.updateModel(this.flightInfoForm, this.flightInfo, this.attributeNames);
    }
}


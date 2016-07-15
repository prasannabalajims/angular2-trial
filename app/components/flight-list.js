"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var flight_list_service_1 = require('../services/flight-list.service');
var flight_1 = require('../models/flight');
var flightNoValidator_1 = require('../utils/flightNoValidator');
var controlGroupHelper_1 = require('../utils/controlGroupHelper');
var forms_1 = require('@angular/forms');
var FlightListComponent = (function () {
    function FlightListComponent(_flightListService) {
        this._flightListService = _flightListService;
        this.selectedFlight = new flight_1.Flight();
        this.serviceProviders = [];
        this.flightInfo = new flight_1.Flight();
        this.validationMessage = {
            cannotContainSpace: 'Cannot contain spaces',
            minlength: 'Less than Minimum length',
            required: 'Required',
            invalidCharacters: 'Invalid Characters'
        };
        this.attributeNames = ['flightNo', 'model', 'serviceProviderName', 'destinationCode', 'arrivalTime', 'departureTime', 'ticketFare'];
        this.flightInfoForm = new forms_1.FormGroup({
            'flightNo': new forms_1.FormControl(this.flightInfo.flightNo, forms_1.Validators.compose([forms_1.Validators.required, flightNoValidator_1.FlightNoValidator.cannotContainSpace,
                flightNoValidator_1.FlightNoValidator.specialCharacterValidator, forms_1.Validators.minLength(4)])),
            'model': new forms_1.FormControl(this.flightInfo.model, forms_1.Validators.required),
            'serviceProviderName': new forms_1.FormControl(this.flightInfo.serviceProviderName, forms_1.Validators.required),
            'destinationCode': new forms_1.FormControl(this.flightInfo.destinationCode, forms_1.Validators.required)
        });
    }
    /**
     * Fetches list of flights from service
     *
     */
    FlightListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._flightListService.getFlightsList()
            .then(function (flightList) {
            _this.flightList = flightList;
            _this.selectedFlight = _this.flightList[0];
        });
        this._flightListService.getServiceProvidersList()
            .then(function (serviceProvidersList) {
            _this.serviceProviders = serviceProvidersList;
        });
    };
    /**
     * Assign flight information based on selection from the grid
     * @param flight
     */
    FlightListComponent.prototype.onSelected = function (flight) {
        this.selectedFlight = this.flightInfo = flight;
        controlGroupHelper_1.ControlGroupHelper.updateControls(this.flightInfoForm, this.selectedFlight, this.attributeNames);
    };
    /**
     * Update model values based on the form data manipulation on
     * form submit
     * @param event
     */
    FlightListComponent.prototype.onSubmit = function (event) {
        console.log(this.flightInfoForm);
        controlGroupHelper_1.ControlGroupHelper.updateModel(this.flightInfoForm, this.flightInfo, this.attributeNames);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FlightListComponent.prototype, "flightList", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlightListComponent.prototype, "selectedFlight", void 0);
    FlightListComponent = __decorate([
        core_1.Component({
            selector: 'flight-list',
            templateUrl: 'app/templates/flight-list.html',
            providers: [flight_list_service_1.FlightsListService],
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [flight_list_service_1.FlightsListService])
    ], FlightListComponent);
    return FlightListComponent;
}());
exports.FlightListComponent = FlightListComponent;
//# sourceMappingURL=flight-list.js.map
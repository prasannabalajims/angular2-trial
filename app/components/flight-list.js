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
var FlightListComponent = (function () {
    function FlightListComponent(flightListService) {
        this.flightListService = flightListService;
        this.selectedFlight = new flight_1.Flight();
    }
    FlightListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flightListService.getFlightsList()
            .then(function (flightList) {
            _this.flightList = flightList;
            _this.selectedFlight = _this.flightList[0];
        });
    };
    FlightListComponent.prototype.onSelected = function (flight) {
        this.selectedFlight = flight;
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
            providers: [flight_list_service_1.FlightsListService]
        }), 
        __metadata('design:paramtypes', [flight_list_service_1.FlightsListService])
    ], FlightListComponent);
    return FlightListComponent;
}());
exports.FlightListComponent = FlightListComponent;
//# sourceMappingURL=flight-list.js.map
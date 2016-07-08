import {Fare} from './fare'

export class Flight {

    flightNo: string;
    model: string;
    serviceProviderName: string;
    destinationCode: string;
    arrivalTime: string;
    departureTime: string;
    ticketFare: Fare;
}
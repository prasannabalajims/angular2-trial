import {Injectable} from '@angular/core'
import {Flight} from '../models/flight'
import {FLIGHTS} from '../resources/mocks/flight-mock'

@Injectable()
export class FlightsListService {

    getFlightsList() {
        return Promise.resolve(FLIGHTS);
    }

    getServiceProvidersList() {
        return Promise.resolve(['British Airways', 'Fly Emirates', 'Lufthansa', 'Cathay Pacific']);
    }
}
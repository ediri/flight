import * as angular from 'angular';
import {Flight} from "../entities/flight";
import {Passenger} from "../entities/passenger";
import {FlightService} from "../services/flight.service";
import {PassengerService} from "../services/passenger.services";

export class FlightSearchController {

    constructor(private flightService:FlightService, private passengerService:PassengerService) {
    }

    from:string = 'Graz';
    to:string = 'Hamburg';
    selectedFlight:Flight;

    flights:Array<Flight> = [];

    passengerName:string = 'Muster';
    passengers:Array<Passenger> = [];
    selectedPassenger:Passenger;

    findPassenger() {
        this.passengerService.find(this.passengerName)
            .then(resp => {
                this.passengers = <any> resp.data;
            })
            .catch(resp => {
                console.error("Error fetching data via HTTP");
                console.error(resp);
            })
    }

    selectPassenger(f:Passenger) {
        this.selectedPassenger = f;
    }

    search() {
        this.flightService
            .find(this.from, this.to)
            .then(resp => {
                this.flights = resp.data;
            })
            .catch(resp => {
                console.error("Error fetching data via HTTP");
                console.error(resp);
            })
    }

    select(f:Flight) {
        this.selectedFlight = f;
    }

}
import * as angular from 'angular';
import {FlightSearchController} from "./flight-search/flight-search.controller";
import {FlightService} from "./services/flight.service";
import {PassengerService} from "./services/passenger.services";
import {passengerStatusFilter} from "./filter/passengerFilter";
import {createCityFilter} from "./filter/city.filter";

var app = angular.module('flight-app', []);

app.controller("flightSearch", FlightSearchController);
app.service("flightService", FlightService);
app.service("passengerService", PassengerService)
app.filter("passengerStatus", passengerStatusFilter)
app.filter("city", createCityFilter);
app.constant("baseURL", "http://www.angular.at")


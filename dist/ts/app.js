"use strict";
var angular = require('angular');
var flight_search_controller_1 = require("./flight-search/flight-search.controller");
var flight_service_1 = require("./services/flight.service");
var passenger_services_1 = require("./services/passenger.services");
var passengerFilter_1 = require("./filter/passengerFilter");
var city_filter_1 = require("./filter/city.filter");
var app = angular.module('flight-app', []);
app.controller("flightSearch", flight_search_controller_1.FlightSearchController);
app.service("flightService", flight_service_1.FlightService);
app.service("passengerService", passenger_services_1.PassengerService);
app.filter("passengerStatus", passengerFilter_1.passengerStatusFilter);
app.filter("city", city_filter_1.createCityFilter);
app.constant("baseURL", "http://www.angular.at");
//# sourceMappingURL=app.js.map
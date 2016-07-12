"use strict";
var FlightSearchController = (function () {
    function FlightSearchController(flightService, passengerService) {
        this.flightService = flightService;
        this.passengerService = passengerService;
        this.from = 'Graz';
        this.to = 'Hamburg';
        this.flights = [];
        this.passengerName = 'Muster';
        this.passengers = [];
    }
    FlightSearchController.prototype.findPassenger = function () {
        var _this = this;
        this.passengerService.find(this.passengerName)
            .then(function (resp) {
            _this.passengers = resp.data;
        })
            .catch(function (resp) {
            console.error("Error fetching data via HTTP");
            console.error(resp);
        });
    };
    FlightSearchController.prototype.selectPassenger = function (f) {
        this.selectedPassenger = f;
    };
    FlightSearchController.prototype.search = function () {
        var _this = this;
        this.flightService
            .find(this.from, this.to)
            .then(function (resp) {
            _this.flights = resp.data;
        })
            .catch(function (resp) {
            console.error("Error fetching data via HTTP");
            console.error(resp);
        });
    };
    FlightSearchController.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    return FlightSearchController;
}());
exports.FlightSearchController = FlightSearchController;
//# sourceMappingURL=flight-search.controller.js.map
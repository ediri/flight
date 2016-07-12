"use strict";
var FlightService = (function () {
    function FlightService($http, baseURL) {
        this.$http = $http;
        this.baseURL = baseURL;
    }
    FlightService.prototype.find = function (from, to) {
        var url = this.baseURL + "/api/flight";
        var params = {
            from: from,
            to: to
        };
        return this
            .$http
            .get(url, { params: params });
    };
    return FlightService;
}());
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map
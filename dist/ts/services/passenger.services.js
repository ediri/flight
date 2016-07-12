/**
 * Created by Engin.Diri on 11.07.2016.
 */
"use strict";
var PassengerService = (function () {
    function PassengerService($http, baseURL) {
        this.$http = $http;
        this.baseURL = baseURL;
    }
    PassengerService.prototype.find = function (name) {
        var url = this.baseURL + "/api/passenger";
        var params = {
            name: name,
        };
        return this
            .$http
            .get(url, { params: params });
    };
    return PassengerService;
}());
exports.PassengerService = PassengerService;
//# sourceMappingURL=passenger.services.js.map
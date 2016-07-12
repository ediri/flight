import * as angular from 'angular';
import {Flight} from "../entities/flight";

export class FlightService {

    constructor(private $http:angular.IHttpService,
                private baseURL:string) {
    }

    find(from:string, to:string):angular.IHttpPromise<Flight[]> {

        var url = this.baseURL + "/api/flight";
        var params = {
            from: from,
            to: to
        };

        return this
            .$http
            .get(url, {params});
    }
}
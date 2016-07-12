/**
 * Created by Engin.Diri on 11.07.2016.
 */

export class PassengerService {
    constructor(private $http:angular.IHttpService,
                private baseURL:string) {
    }

    find(name:string) {
        var url = this.baseURL + "/api/passenger";
        var params = {
            name: name,
        };

        return this
            .$http
            .get(url, {params: params})

    }
}
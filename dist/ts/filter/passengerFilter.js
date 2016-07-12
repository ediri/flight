/**
 * Created by Engin.Diri on 11.07.2016.
 */
"use strict";
function passengerStatusFilter() {
    return function (status, fmt) {
        var short;
        var long;
        switch (status) {
            case "A":
                short = "SEN";
                long = "Senator";
                break;
            case "B":
                short = "FTL";
                long = "Frequent Travellor";
                break;
            default:
                short = "M";
                long = "Meilenprogramm";
        }
        if (fmt == 'short')
            return short;
        return long;
    };
}
exports.passengerStatusFilter = passengerStatusFilter;
//# sourceMappingURL=passengerFilter.js.map
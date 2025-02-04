var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createVehicle(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        getDetails: function () {
            return "Make: ".concat(this.make, ", Model: ").concat(this.model, ", Year: ").concat(this.year);
        },
    };
}
function createCar(make, model, year, fuelType) {
    return __assign(__assign({}, createVehicle(make, model, year)), { fuelType: fuelType, getDetails: function () {
            return "Make: ".concat(this.make, ", Model: ").concat(this.model, ", Year: ").concat(this.year, ", Fuel Type: ").concat(this.fuelType);
        } });
}
var myCar = createCar("Toyota", "Corolla", 2021, "Petrol");
console.log(myCar.getDetails());

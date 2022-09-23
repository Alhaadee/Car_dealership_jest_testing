const Car = require("./car.js");
const { prototype } = require("events");

const Dealership = function(name,capacity){
    this.name = name;
    this.capacity = capacity;
    this.stock = []
}


Dealership.prototype.countStock = function(){return this.stock.length};
Dealership.prototype.addStock = function(car){
    if(this.countStock()<this.capacity){
        this.stock.push(car)};
    };
    
Dealership.prototype.findManufacturers = function(){
    return this.stock.map((car)=> car.manufacturer)
};

Dealership.prototype.filterByManufacturer = function(manufacturer){
    // uses filter
    return this.stock.filter((car)=> car.manufacturer === manufacturer)
}
Dealership.prototype.totalValue = function(){
// use reduce
return this.stock.reduce((total,car)=> total + car.price,0)
}

module.exports = Dealership;


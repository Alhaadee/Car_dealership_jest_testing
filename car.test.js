const Car = require("./car");

describe("car properties test",()=>{
    
test("checks all properties",()=>{
const car1 = new Car("bmw",100,"petrol");
expect(car1.manufacturer).toBe("bmw");
expect(car1.price).toBe(100);
expect(car1.engineType).toBe("petrol");

})


});
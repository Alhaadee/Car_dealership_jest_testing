const Dealership = require("./dealership");
const Car = require("./car");

let dealership1;
let car1;
let car2;
let car3;

beforeEach(()=>{
     dealership1 = new Dealership("The Car Shop",3);
     car1 = new Car("bmw",100,"petrol");
     car2 = new Car("bmw",200,"petrol");
     car3 = new Car("toyota",200,"petrol");
     car4 = new Car("toyota",200,"petrol");

})

describe("testing adding stock",()=>{
    test("add car to stock",()=>{
        dealership1.addStock(car1);
        expect(dealership1.stock.length).toBe(1);
    })
    test("add car to stock if full, should stay as 3",()=>{
        dealership1.addStock(car1);
        dealership1.addStock(car2);
        dealership1.addStock(car3);
        dealership1.addStock(car4);
        expect(dealership1.stock.length).toBe(3);
    })
})


test("count cars in stock",()=>{
    dealership1.addStock(car1);
    dealership1.addStock(car2);
    expect(dealership1.countStock()).toBe(2);
});

test("show array of manufacturers",()=>{
    dealership1.addStock(car1);
    dealership1.addStock(car2);
    dealership1.addStock(car3);
    
    expect(dealership1.findManufacturers()).toStrictEqual(["bmw","bmw","toyota"])
});

test("calcualtes total value",()=>{
    dealership1.addStock(car1);
    dealership1.addStock(car2);
    dealership1.addStock(car3);
    
    expect(dealership1.totalValue()).toBe(500);
})

test("filters by manufacturer",()=>{
    dealership1.addStock(car1);
    dealership1.addStock(car2);
    dealership1.addStock(car3);
    
    expect(dealership1.filterByManufacturer("bmw")).toStrictEqual([car1,car2])
});
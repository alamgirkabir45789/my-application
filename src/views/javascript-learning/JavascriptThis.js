const car = {
  name: "BMW",
  invent: "1910",
  price: 50000,

  carDetails: function () {
    console.log(this);
    console.log(
      `${this.name} is made on ${this.invent} and price is ${this.price}`
    );
  },
};
const car2 = {
  color: "Red",
  name: "VOXY",
};
console.log(car.carDetails.call(car2));
///Class and Object
class myCar {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
    console.log(this.name);
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} is run fast as ${this.speed} km/hrs`);
    this.drive();
  }
  drive() {
    console.log(`Dont drive more than ${this.speed} km/hrs`);
  }
  age(condition) {
    let date = new Date();
    return `The ${this.name} Car,${
      date.getFullYear() - this.year
    } years ${condition}`;
  }
}
const myCar1 = new myCar("BMW", 5000, "2010");
console.log(myCar1);
myCar1.run(300);
console.log(myCar1.age("old"));
//JSON
const jsonData = {
  person: [{ name: "Kabir" }, { name: "Rakib", age: 33 }],
};
console.log(JSON.stringify(jsonData.person));

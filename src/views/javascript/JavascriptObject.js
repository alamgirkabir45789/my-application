const person = {
  isHuman: false,
  address: { flatNo: 393 },
  printDetails: function () {
    console.log(` ${this.name} is human?${this.isHuman}`);
  },
};
console.log(person);
const d = JSON.parse(JSON.stringify(person));
d.address.flatNo = 88;
console.log(d);
const test = Object.create(person);
test.id = 44;
test.address.flatNo = 44;
console.log(test.address.flatNo);

test.printDetails();

console.log(person);

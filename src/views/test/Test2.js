class Father {
  constructor(name, profession) {
    this.name = name;
    this.profession = profession;
  }
  get fName() {
    return this.name;
  }
  set fName(name) {
    return (this.name = name);
  }
}

class Children extends Father {
  constructor(name, profession, chdName, chdAge) {
    super(name, profession);
    this.chdName = chdName;
    this.chdAge = chdAge;
  }
  details() {
    return `${this.chdName}'s Father name is ${this.name} and Profession is ${this.profession}`;
  }
}
const obj = new Children("Rahim", "Doctor", "Habib", 44);
console.log(obj);
console.log(obj.details());
obj.fName = "Shakib";
console.log(obj.fName);

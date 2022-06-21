const data = {
  status: "success",
  0: {
    deviceID: "D100",
    date: "2022-01-13",
    "Funded/non-funded": "Funded",
    County: '[{"id":"5b7b1afa27db302daca17ef7","identifier":"Vilas County"}]',
    "Eligible Time": "8922",
    Trail: '{"id":"5fe11eb1bf577306800f483c","identifier":"15"}',
  },
  1: {
    deviceID: "D100",
    date: "2022-01-13",
    "Funded/non-funded": "Non-Funded",
    County: '[{"id":"5b7b1afa27db302daca17ef7","identifier":"Vilas County"}]',
    "Eligible Time": "0",
    Trail: '{"id":"5fe11eb1bf577306800f483e","identifier":"15"}',
  },
  2: {
    deviceID: "D100",
    date: "2022-01-13",
    "Funded/non-funded": "Funded",
    County: '[{"id":"5b7b1afa27db302daca17ef7","identifier":"Vilas County"}]',
    "Eligible Time": "8898",
    Trail: '{"id":"5fe11ec5bf577306800f4a28","identifier":"6"}',
  },
};
const { status, ...rest } = data;
console.log(Object.keys(rest).map((i) => rest[i]));

// const { status, ...rest } = data;
// const array = Object.keys(rest).map((key) => rest[key]);
//   console.log(array)

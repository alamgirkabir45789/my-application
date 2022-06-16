const marks = 90;
const paymentStatus = true;
function enroll(callback) {
  console.log("Corse enrolement is in progress");
  setTimeout(() => {
    if (paymentStatus) {
      callback();
    } else {
      console.log("payment failed");
    }
  }, 2000);
}
function progress(callback) {
  console.log("Course in progress......");
  setTimeout(() => {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not earn enough marks for get certificate");
    }
  }, 3000);
}

function certificate() {
  console.log("Congrates");
}
enroll(function () {
  progress(certificate);
});

//Promise
const status = true;
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (status) {
      resolve();
    } else {
      reject();
    }
  }, 5000);
});
promise
  .then(function (val) {
    console.log(val);
  })
  .catch(function (err) {
    console.log(err.message);
  });

console.log("Task 1");
setTimeout(() => {
  if (status) {
    console.log("Task 2");
  } else {
    console.log("Failed");
  }
}, 2000);
console.log("Task 3");

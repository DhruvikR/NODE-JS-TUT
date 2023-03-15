console.log("Exe st.");

// setTimeout(() => {
//   console.log("Exe In.");
// }, 2000);

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(555);
  }, 2000);
});

waitingData.then((data) => {
  console.log(data);
});
console.log("Exe Run.");

console.log("Exe End.");

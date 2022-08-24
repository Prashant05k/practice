let datas = [
  { name: "Ajay", profession: "Engr" },
  { name: "Vivek", profession: "Engr" },
];

function getdatas() {
  setTimeout(() => {
    datas.forEach((data) => console.log(data.name));
  }, 500);
}

function createdata(newdata) {
  return new Promise((resolve, reject) => {
    if (1) {
      setTimeout(() => {
        datas.push(newdata);
        resolve();
      }, 2000);
    } else {
      reject(console.log("Failure"));
    }
  });
}

async function start() {
  await createdata({ name: "Prashant", profession: "Engr" });
  console.log("run first");
  getdatas();
}

start();

// async function start() {
//   try {
//     await createdata({ name: "Prashant", profession: "Engr" });
//     getdatas();
//   } catch {
//     (e) => console.log(e);
//   } finally {
//     console.log("Finally");
//   }
// }

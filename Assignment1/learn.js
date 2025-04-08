"use strict";


// 闭包

// (() => { console.log("test") }) ();

// { const test = 1; }
// // debugger;

// function displayTest() {
//     console.log(test);
// }


// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   let newFunc = myFunc;
//   newFunc = null;
//   myFunc();


// const counter = (function () {
//     let privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
  
//     return {
//       increment() {
//         changeBy(1);
//       },
  
//       decrement() {
//         changeBy(-1);
//       },
  
//       value() {
//         return privateCounter;
//       },
//     };
//   })();
  
//   console.log(counter.value()); // 0
  
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // 2
  
//   counter.decrement();
//   console.log(counter.value()); // 1


// this

// const e = 10;
// function sum() {
//   return () => console.log(this);
// }

// console.log(sum()());


const obj1 = { value: {} };
console.log(typeof obj1.value);


// ts泛型
// function identity<T extends string | number = string>(arg: T): T {
//     return arg;
//   }
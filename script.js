// document.write('hello world');
// console.log('hello');
// const x = 'Hello World';
// document.getElementById('idOne').innerHTML = x;

// var myValue = document.getElementById('idOne');
// var info = myValue.textContent;
// console.log(typeof myValue);
// console.log(typeof info);
// console.info(info);
// console.warn(info);
// console.error(info);
// console.log('%c Hello', 'color:green; font-weight:bold');
// console.log('%c Hello', 'color:white;background:blue; font-weight:bold');

//console.dir(document);
// const hh = document.querySelector('#header');
// hh.textContent = 'New Header';

// const hh = document.querySelector('li');
// hh.textContent = 'New Header';
// const getID = document.getElementById('header');
// getID.textContent = "new Value";
// const byTag = document.getElementsByTagName("li");
// console.log(byTag);
// byTag[4].textContent = "UPDATED ------";

// const el1 = document.querySelector('h1');
// console.log(el1);
// const el2 = document.querySelector('.row');
// console.log(el2);
// const el3 = document.querySelector('#header');
// console.log(el3);
// el1.textContent = "hello";
// console.log(el3.textContent);

// const myVal = document.querySelectorAll("a[href*=\"JS\"]");
// console.log(myVal);

// for (let i=0; i<myVal.length;i++) {
//     console.log(myVal[i].href);
//     myVal[i].textContent = "Changed " + i;
//     myVal[i].href = "http://www.discoveryvip.com";
// }

// const container = document.querySelector("ul.nav");
// console.log(container);
// const liActive = container.querySelectorAll("li.active");
// console.log(liActive)
// console.log(liActive[0]);

const myImgs = document.getElementsByTagName("img");
console.log(myImgs);

for(let i=0;i<myImgs.length;i++) {
    console.log(myImgs[i]);
    myImgs[i].height = 20;
    myImgs[i].title = myImgs[i].alt;
    console.log(myImgs[i]);
}
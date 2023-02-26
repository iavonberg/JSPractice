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

// const myImgs = document.getElementsByTagName("img");
// console.log(myImgs);

// for(let i=0;i<myImgs.length;i++) {
//     console.log(myImgs[i]);
//     myImgs[i].height = 20;
//     myImgs[i].title = myImgs[i].alt;
//     console.log(myImgs[i]);
// }

// const ul1 = document.getElementsByTagName('ul')[1];
// console.log(ul1.childNodes);
// console.log(ul1.children);

// for (let i=0; i<ul1.children.length; i++){
//     console.log(ul1.children[i]);
//     console.log[ul1.children[i].nodeType];
// }

// for (let i=0; i<ul1.childNodes.length; i++) {
//     console.log(ul1.childNodes[i]);
//     console.log(ul1.childNodes[i].nodeTypes);
// }

// const el1 = document.querySelectorAll('div')[3];
// console.log(el1);
// console.dir(el1.childNodes[1].childNodes[0]);

// const headerElement = document.getElementById('header');
// headerElement.innerHTML = "New Content";
// headerElement.style.backgroundColor = 'yellow';
// headerElement.style.fontFamily = "Verdana";
// headerElement.style.border = "5px solid green";
// headerElement.style.textAlign = "center";

// const rowElement = document.getElementsByClassName('row');

// for (let i = 0; i < rowElement.length; i++) {
//     console.log(rowElement[i]);
//     let el = rowElement[i];
//     el.style.textAlign = 'center';
//     el.style.color = 'blue';
//     el.style.backgroundColor = 'yellow';
//     el.style.border = "4px solid black";
// }

// const rows = document.querySelectorAll('.row');

// for (let i = 0; i < rows.length; i++) {
//     console.log(rows[i].className);
//     rows[i].className += ' blue';
// };

// rows.forEach(function (el,index) {
//     console.log(el);
//     console.log(index);
//     // el.classList.add('red');
//     el.classList.remove('blue');
//     el.classList.toggle('red');
// })

const btn = document.querySelector('button');
btn.setAttribute('id','myButton');
console.log(btn.id);
btn.removeAttribute('id', 'myButton');
console.log(btn.id);
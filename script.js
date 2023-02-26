const hh = document.querySelector('h1');
hh.textContent = "New Header";
const getID = document.getElementById('header');
getID.textContent = "New Value";
const byTag = document.getElementsByTagName('li');
console.log(byTag);
byTag[4].textContent = "UPDATED ---------";
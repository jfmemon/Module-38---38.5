// localStorage.clear();
// localStorage.setItem('Name', 'Sakib khan');
// localStorage.setItem('Age', 25);
// console.log(localStorage.getItem('Name'));
// console.log(localStorage.getItem('Age'));
// localStorage.removeItem('Name');
// localStorage.removeItem('Age');


// set a object as local storage item. The object is {firstName:'Abraham', lastName:'Linkon'}
// 1) creating an object
const createObject = {
    firstName: 'Abraham',
    lastName: 'Linkon'
}

// convert into string with stringify
const inJson = JSON.stringify(createObject);
// set stringified value into local storage
localStorage.setItem('FullName', inJson);

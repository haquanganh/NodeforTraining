// function greet() {
//     console.log('hi');
// }
// greet();
// // functions are first class
// function logGreeting(fn) {
//     fn();
// }
// logGreeting(greet);
// // functions expression
// var greetMe = function () {
//     console.log('Hi Astro');
// }
// greetMe();
// //  it's first class
// logGreeting(greetMe);
// // use a function express on the fly
// logGreeting(function () {
//     console.log('Hi Astro!!!');
// });
// -----------------------------------
// var greet = require('./greet');
// greet();
// -----------------------------------
// var person = {
//     firstname: 'Astro',
//     lastname: 'Handsome',
//     greet: function () {
//         console.log('Hi ' + this.firstname + ' ' + this.lastname);
//     }
// }
// person.greet();
// console.log(person['firstname']);
// -----------------------------------
// function Person(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
// Person.prototype.greet = function () {
//     console.log('Hello, ' + this.firstname + ' ' + this.lastname);
// }
// var astro = new Person('Astro', 'Anh');
// astro.greet();
// -----------------------------------
// pass by value
// function change(b) {
//     b = 2;
// }
// var a = 1;
// change(a);
// console.log(a);
// // pass by reference
// function changeObj(d) {
//     d.prop1 = function(){};
//     d.prop2 = {};
// }
// var c = {};
// c.prop1 = {};
// changeObj(c);
// console.log(c);
// -----------------------------------
// var firstname = 'People';
// (function (lastname) {
//     var firstname = 'Astro';
//     console.log(firstname);
//     console.log(lastname);
// } ('Anh'));
// console.log(firstname);
// -----------------------------------
// var greet = require('./greet');
// greet.english();
// greet.spanish();
// -----------------------------------
// var greet1 = require('./greet1');
// greet1();
// var greet2 = require('./greet2').greet;
// greet2();
// var greet3 = require('./greet3');
// greet3.greet();
// greet3.greeting = "Change to hello world";
// var greet3b = require('./greet3');
// console.log(greet3b.greeting);
// var Greet4 = require('./greet4');
// var grtr = new Greet4();
// grtr.greet();
// var greet5 = require('./greet5').greet;
// greet5();
// -----------------------------------
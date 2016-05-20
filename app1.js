// var obj = {
//     greet: 'Hello'
// };
// console.log(obj.greet);
// console.log(obj['greet']);
// var prop = 'greet';
// console.log(obj[prop]);
// var arr = [];
// arr.push(function () {
//     console.log('Hello world 1');
// });
// arr.push(function () {
//     console.log('Hello world 2');
// });
// arr.push(function () {
//     console.log('Hello world 3');
// });
// arr.forEach(function (item) {
//     item();
// });
// ---------------------------
// var Emitter = require('events');
// var events = require('./config').events;
// var emtr = new Emitter();
// emtr.on(events.GREET,function () {
//     console.log('Somewhere, someone said hello');
// });
// emtr.on(events.GREET,function () {
//     console.log('Somewhere, someone said hola');
// });
// console.log('Hello');
// emtr.emit(events.GREET);
// ----------------------------
// var Person = {
//     firstname: '',
//     lastname: '',
//     greet: function () {
//         return this.firstname + ' ' + this.lastname;
//     }
// }
// var astro = Object.create(Person);
// astro.firstname = 'Astro';
// astro.lastname = 'Anh';
// console.log(astro.greet());
// var astro1 = Object.create(Person);
// astro1.firstname = 'Astro1';
// astro1.lastname = 'Anh';
// console.log(astro1.greet());
// -----------------------------
// var EventEmiiter = require('events');
// var util = require('util');
// function Greetr() {
//     this.greeting = 'Hello world!';
// }
// util.inherits(Greetr, EventEmiiter);
// Greetr.prototype.greet = function (data) {
//     console.log(this.greeting + ': ' + data);
//     this.emit('greet', data);
// }
// var greeter1 = new Greetr();

// greeter1.on('greet', function (data) {
//     console.log('Someone greeted!: ' + data);
// });

// greeter1.greet('QuangAnh');
// -----------------------------
// var obj = {
//     name: 'Astro Anh',
//     greet: function () {
//         console.log('Hello, ' + this.name);
//     }
// };
// obj.greet();
// obj.greet.call({ name: 'Anh Dep Zai' });
// obj.greet.apply({ name: 'Anh cu te' });
// -----------------------------
// var util = require('util');
// function Person() {
//     this.firstname = 'Astro';
//     this.lastname = 'Anh';
// }
// Person.prototype.greet = function () {
//     console.log('Hello, ' + this.firstname + ' ' + this.lastname);
// }
// function PoliceMan() {
//     Person.call(this);
//     this.badgenumber = '1234';
// }
// util.inherits(PoliceMan,Person);
// var officer = new PoliceMan();
// officer.greet();
// -----------------------------
// 'use strict';
// class Person{
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log('Hello, ' + this.firstname + ' ' + this.lastname);
//     }
// }
// var astro = new Person('Astro','Anh');
// astro.greet();
// -----------------------------
// 'use strict';
// var EventEmiiter = require('events');
// class Greetr extends EventEmiiter {
//     constructor() {
//         super();
//         this.greeting = 'Hello World!';
//     }
//     greet(data) {
//         console.log(`${this.greeting} : ${data}`);
//         this.emit(`greet`, data);
//     }
// }
// var greeter1 = new Greetr();
// greeter1.on('greet',function (data) {
//    console.log('Someone greeted!: ' + data); 
// });
// greeter1.greet('Anh dep zai');
/**
 * Created by mlimansk on 14/09/15.
 */
//Creating one genertic global var
var myAppVar = {
    name : 'marcin',
    surname : 'limanski'
};

//Then we can add any other global vars  to the generic global
myAppVar.car = {
    engine : '1.1 liter',
    doors : 5,
    make : 'mazda'

};

console.log(myAppVar.car.engine);
console.log(myAppVar.name);
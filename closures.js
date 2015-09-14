/**
 * Created by mlimansk on 11/09/15.
 */

//Closure = What this means is that an inner function always has access to the vars and
// parameters of its outer function, even after the outer function has returned.



function accountObject(userName){

    "use strict";
    var name = userName;
    var balance = 20; //this is a private var
    return {
        getName: function(){
            return name;
        },
        showBalance: function(){
            return balance;
        }
    }
}

//We do not need to use the new keyword because we are returning a object
var marcinObject = accountObject('marcin');

//console.log(marcinObject.getName());
//console.log(marcinObject.showBalance());

////////////////////////////////////////Seeing how bullet proof the code is

function addMachine(){

    var num = 1;

    return {
        getNumber : function(){
            return num;
        },
        addToNumber : function(num2){
            return num + num2;
        }

    }
}


var objectOne = addMachine();
var objectTwo = addMachine();

console.log('objectOne number:' + objectOne.getNumber());
console.log(objectOne.addToNumber(2));
console.log('objectOne number:' + objectOne.getNumber());

console.log('objectTwo number: '+objectTwo.getNumber());


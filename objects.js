/**
 * Created by mlimansk on 14/09/15.
 */
//An object is a cointainer of properties

var app = {

    Employee : function(){
        var salary = 100; // private member
        this.name = '';
        var employeeInfo = function(){
            return name + ' ' + salary
        };

        return {

            setName : function(userName){
                name = userName;
            },
            getName : function(){
                return name;
            },
            //Privelige object access
            accessEmployeeInfo : function() {
                return employeeInfo();
            }
        }
    }


};



var marcin = app.Employee();
var paul = app.Employee();

marcin.setName('marcin');
console.log(marcin.accessEmployeeInfo());



/////////////////Retreving data from object
//We can use . notaion or []
paul.setName('paul');

///////////////////Objects are passed by Reference NOT COPIED
var stooge = {
  nickname : ''
};
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
console.log(nick); //Curly

var a = {}, b = {}, c = {};
// a, b, and c each refer to a
// different empty object
a = b = c = {};
// a, b, and c all refer to
// the same empty object

//////////////////////////////Checking the type of the property in object

var typeCheck = typeof  marcin.getName();
console.log(typeCheck);
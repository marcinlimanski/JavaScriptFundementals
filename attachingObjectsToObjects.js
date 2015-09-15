/**
 * Created by mlimansk on 15/09/15.
 */

var object = {

    name : 'objects',
    doSomething : function(){
        return this.name;
    }

};

//////////No we will create another two objects that will use 'doSomethiong' function from object

var marcinObject = {
    name : 'marcin'
};

var paulObject = {
    name : 'paul'
};

//To attach the dosomethign function to marcin we need to use apply
//the applu method is modigying how do something will execute
//instead of printing name it will print marcin.
console.log(object.doSomething.apply(marcinOÅbject));
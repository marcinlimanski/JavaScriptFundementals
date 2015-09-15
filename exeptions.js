/**
 * Created by mlimansk on 15/09/15.
 */

var app = {


    init : function (){
        //init any vars
    },
    add : function(a, b){

        if(typeof a !== 'number'  || typeof b !== 'number'){
            throw {
                name : 'TypeError',
                message : 'add needs numbers'
            };
        }
        else{
            return a + b;
        }

    }

};

console.log(app.add(2, 2));
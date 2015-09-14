/**
 * Created by mlimansk on 14/09/15.
 */

function manyArguments(){

    for (var i = 0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}

manyArguments('hello', 3, 'me');
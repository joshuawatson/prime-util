"use strict";

function append(array, items){
    array.push.apply(array, items)
    return array
}

module.exports = append

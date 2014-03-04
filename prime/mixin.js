"use strict";

var prime = require("prime")
var slice = require("mout/array/slice")
var create = require("mout/lang/createObject")

function mixin(object){

    var mixins = slice(arguments, 1)

    for (var i = 0; i < mixins.length; i++){
        object.implement(create(mixins[i].prototype))
    }

    return object

}

module.exports = mixin

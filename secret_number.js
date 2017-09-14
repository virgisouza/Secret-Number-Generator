'use strict';
module.exports = function() {
    var num = Math.floor(Math.random() * 1000001);
  return function(){
    return num;
  }

};
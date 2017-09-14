'use strict';
module.exports = function() {
    var num = Math.floor(Math.random() * 1000000+1);
  return function(){
    return num;
  }

};
/**
 * Created by Nicolas on 04/09/2014.
 */

function simpleFunction(alpha){
  return true;
}

function nestedFunction0(alpha, beta){
  function nestedFunction0_0(alpha){
    return alpha;
  }
  return nestedFunction0_0(alpha);
}

var obj = {};

obj.test0 = function(a){
  return "John snow is in the kitchen";
};

obj.test1 = {
  test10: function(test){

    function test10_0(test){
      return "Nested function inside an object";
    }

    test10_0(test);

    return "Another test";
  },
  test11: function(test){
    return 3;
  }
};
/*

 This script runs the tests.js test suite 
 on the console via node.js
 
 */

var fs = require('fs');
var vm = require('vm');

var includeInThisContext = function(path) {
    var code = fs.readFileSync(path);
    vm.runInThisContext(code, path);
}.bind(this);

includeInThisContext(__dirname+"/regex.js");
includeInThisContext(__dirname+"/tests.js");

var Tests = 0;
var Passed = 0;
var Failed = 0 ;

function run_test(regex,string,expected) {

  var dresult = dregex_match(regex,string) ;

  Tests++ ;

  if (dresult == expected) {
    console.log("Correct: " + regex +
                (expected ? " matched " : " did not match ") + 
                string) ;
    Passed++ ;
  } else {
    console.log("Incorrect: " + regex +
                     (expected ? " should have matched " : " should not have matched ") + 
                     string) ;
    Failed++ ;
  }
}


function run_tests() {
  for (var i = 0; i < RegexTests.length; i++) {
    var test = RegexTests[i];
    run_test(test[0], test[1], test[2]) ;
  }

  console.log("--") ;
  
  console.log("Student ID: " + StudentID) ;
  
  console.log("Name: " + FirstName + " " + LastName) ;
  
  console.log("Score: " + Passed + " / " + Tests) ;
}


run_tests() ;

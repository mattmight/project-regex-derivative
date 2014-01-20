
var FirstName = "First" ;

var LastName = "Last" ;

var StudentID = "uNNNNNNN"; // Replace with your student ID.


function dregex_match(regex,string) {
  var re = new RegExp("^(" + regex + ")$") ;
 
  /* Implement your own regex matching here,
     instead of using JavaScript's RegExp. */

  /* You will want to write a recursive descent parser
     to parse regular expressions themselves. */

  /* You will want to use derivatives to match them. */ 

  return !!string.match(re) ;
}




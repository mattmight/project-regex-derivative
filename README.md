Implementing Regular Expressions
================================

In this project, you will parse and evaluate [regular expressions].

The recommended technique for this is [Brzozowski's derivative].

You will be implementing this project in JavaScript.

The EBNF grammar of regular expressions is:

    
    <regex>  ::= <term> { <termop> <term> }
    <termop> ::= '|' | '&'
    <term>   ::= { <factor> }
    <factor> ::= <base> { '*' }
    <base>   ::= [ '~' ] <atom>
    <atom>   ::= '\' <char>
              |  <char>
              |  '(' <regex> ')'
   

In this special dialect of regex, the operator `~` is complement (or negation)
and the operator `&` is intersection (or and). 


Requirements
------------

To complete the assignment, modify `regex.js` to use your own regular
expression implementation instead of the internal JavaScript implementation.

To aid the suite testing, your page should export the function
`dregex_match(regex,string)`:

 * `dregex_match(regex,string)` returns 
    `true` if `regex`  exactly matches `string`.

 * `dregex_match(regex,string)` returns
    `false` if `regex` does not match `string`.



Pointers
--------

* [Firebug] is a great extension for interactively debugging JavaScript.

* [Node.js] lets you run JavaScript at the console (among other features).

* For an implementation of regular expressions with derivatives in Java,
  see the [slides on lexing].

* An implementation of [regular expressions with derivatives in Scheme]
  covers the basic theory of derivatives of regular expressions.

* An implementation of [parsing regular expressions with recursive descent]
  in Java is available on the blog.


Manifest
--------

* `Makefile`:     Run tests with `make test`.
* `regex.js`:     Modify this file to complete the assignment.
* `tests.js`:     A database of tests.
* `test.html`:    A web page that runs the tests in `tests.js` in the browser.
* `node-test.js`: A node.js program that runs the tests in `tests.js` 
                  at the console.
* `index.html`:   An interactive interface for testing `regex.js`.


Testing
-------

The file `tests.js` contains a test suite.

If nodejs is installed, you can run the test suite against your current
implementation with `make test`.

Without nodejs, you can open `test.html` in a browser to run the test suite.


[regular expressions]: http://matt.might.net/articles/sculpting-text/

[Brzozowski's derivative]: http://matt.might.net/articles/implementation-of-regular-expression-matching-in-scheme-with-derivatives/

[the instructor]: http://matt.might.net/

[slides on lexing]: https://www.dropbox.com/sh/1tkk3v86dwqxlca/N3VF74ovFH

[regular expressions with derivatives in Scheme]: http://matt.might.net/articles/implementation-of-regular-expression-matching-in-scheme-with-derivatives/

[parsing regular expressions with recursive descent]: http://matt.might.net/articles/parsing-regex-with-recursive-descent/

[Firebug]: https://getfirebug.com/

[Node.js]: http://nodejs.org/

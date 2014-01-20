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

* For an implementation of regular expressions with derivatives in Java,
  see the [slides on lexing].


* An implementation of [regular expressions with derivatives in Scheme]
  covers the basic theory of derivatives of regular expressions.
  

* An implementation of [parsing regular expressions with recursive descent]
  in Java is available on the blog.


Manifest
--------

* `regex.js`: Modify this file to complete the assignment.
* `test.html`: Open this file to run a battery of provided tests.
* `tests.js`: A database of tests for `test.html`.
* `index.html`: An interactive interface for testing `regex.js`.



Turnin
------

To turn in this project, submit a URL from your public html directory on the
clas server to this file.

To prevent your assignment from being copied, place it it the subdirectory
`~/public_html/p2/`.

Then, disable public reads of this directory, while allowing public execution:

    chmod o-r $HOME/public_html/p2
    chmod o+x $HOME/public_html
   

Directories with incorrect permissions set will receive an automatic 0.

Rename template.html to a random filename (ending in .html), e.g., 1701.html

The filename must have at least 20 characters.

Then, email [the instructor] the link.
   


[regular expressions]: http://matt.might.net/articles/sculpting-text/

[Brzozowski's derivative]: http://matt.might.net/articles/implementation-of-regular-expression-matching-in-scheme-with-derivatives/

[the instructor]: http://matt.might.net/

[slides on lexing]: https://www.dropbox.com/sh/1tkk3v86dwqxlca/N3VF74ovFH

[regular expressions with derivatives in Scheme]: http://matt.might.net/articles/implementation-of-regular-expression-matching-in-scheme-with-derivatives/

[parsing regular expressions with recursive descent]: http://matt.might.net/articles/parsing-regex-with-recursive-descent/

var RegexTests =
 [ ["foo","foo",true] 
 , ["foo|bar","foo",true]
 , ["foo|bar","bar",true]
 , ["foo|bar","cat",false]
 , ["(foo)*","",true]
 , ["(foo)*","foo",true]
 , ["(foo|bar)*","",true]
 , ["(foo|bar)*","foobar",true]
 , ["(foo|bar)*","foobar",true]
 , ["(foo|bar)*","barbar",true]
 , ["(foo|bar)*","fooba",false]
 , ["(foo|bar)*baz","foobarbaz",true]
 , ["\\\\","\\",true]
 
 // Extended regex:
 , ["foo&bar","foo",false]

 , ["((0|1|2|3|4|5|6|7|8|9)*(0|2|4|6|8))&((0|1|2|3|4|5|6|7|8|9)*(0|5))","20",true]

 , ["((0|1|2|3|4|5|6|7|8|9)*(0|2|4|6|8))&((0|1|2|3|4|5|6|7|8|9)*(0|5))","25",false]

 , ["~(foo)","foo",false]

 , ["~(foo)","bar",true]

 , ["ab~((b|a|0|1)*ba(b|a|0|1)*)ba", "ab00101001ba", true]


 , ["ab~((b|a|0|1)*ba(b|a|0|1)*)ba", "abbaba", false]


 // Tricky cases:
 , ["abc|","",true]
 , ["abc|","abc",true]
 , ["|","",true]
 , ["&","",true]
 , ["&e","",false]
 , ["~foo","ffoo",true]
 , ["~foo","aoo",true]
 , ["~foo","foo",false]
 , ["~foo","oo",true]


 ] ;

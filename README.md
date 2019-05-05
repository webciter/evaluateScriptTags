# evaluateScriptTags
Takes a string and processes the JavaScript contained within.

Loop through a html string and processes the script tags, with a single function

<pre>

evaluateScriptTags("&lt;div&gt;&lt;/div&gt;<script>alert("working");</script>");

</pre>

I know people say its not good practice to use eval() but sometimes you may have to.

# Momentary

A JavaScipt plugin for updating the time stamp in your webpages. 

##### Example: 
 - 1 minute ago <br>
 - 5 days ago
 
 
##### Usage:

Include the `momentary.js` file in the `<body>` section of your page.
<br>
Use: 
`<span class="relativetime" title="2015-09-17 18:25:08"></span>` in your HTML code. Add the time stamp in the title attribute via your scriping language.<br>

eg: `<span class="relativetime" title="{{ $post->created_at }}"></span>`

##### output: 
1 minute ago

---
permalink: /search/
layout: page
header:
  title: Soroka Clinical Research Center 
  image_fullwidth: twodudes.png
title: "Search"
---
<head>
  <link href="{{site.urlass}}tipuesearch/tipuesearch.css" rel="stylesheet">
  
</head>


<form action="http://sorokacrc.org/results.html">
<input type="text" name="q" id="tipue_search_input" autocomplete="off" required>
</form>

<script>
var $j = jQuery.noConflict();

$j(document).ready(function() {
     $j('#tipue_search_input').tipuesearch({
          'mode': 'live',
          'liveDescription': '.header',
          'liveContent': '.row t30'
     });
});
</script>

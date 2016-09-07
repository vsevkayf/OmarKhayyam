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

<div id="tipue_search_content"></div><div id="tipue_search_content"><div class="tipue_search_spinner"><div class="tipue_search_rect1"></div><div class="tipue_search_rect2"></div><div class="tipue_search_rect3"></div></div></div>


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

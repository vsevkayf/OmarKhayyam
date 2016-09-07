---
permalink: /search/
layout: page
header:
  title: Soroka Clinical Research Center 
  image_fullwidth: twodudes.png
title: "Search"
---

<form action="/search">
<input type="text" name="q" id="tipue_search_input" list="search" autocomplete="off" required>
</form>
<datalist id="search">
<option>Research</option>
<option>Event</option>
<option>"Prof. Victor Novack MD, PhD"</option>
<option>"Ruthie Bekore, B.Sc"</option>
<option>Map</option>
<option>Soroka</option>
</datalist>


<div id="tipue_search_content"><div class="tipue_search_spinner"><div class="tipue_search_rect1"></div><div class="tipue_search_rect2"></div><div class="tipue_search_rect3"></div></div></div>


<script>
var $j = jQuery.noConflict();

$j(document).ready(function() {
     $j('#tipue_search_input').tipuesearch({
          'mode': 'live',
          'liveDescription': '.header',
          'liveContent': '.medium-8 columns medium-offset-2 end'
      });
});
</script>

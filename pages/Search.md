---
permalink: /Search/
layout: page
header:
  title: Soroka Clinical Research Center 
  image_fullwidth: twodudes.png
title: "Search"
---

<form action="/Search">
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



<script type="text/javascript">

  var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);

  function setCookie(name, value)
  {
    document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
  }

</script>

<script type="text/javascript">

  function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }

</script>

<script type="text/javascript">

  function storeValues(form)  
  {
    setCookie("q", form.q.value);
    return true;
  }

</script>
<script type="text/javascript">      
  document.write(getCookie("q"));
</script>

<script>

var $j = jQuery.noConflict();

$j(document).ready(function() {
     $j('#tipue_search_input').tipuesearch({
          'mode': 'live',
          'liveDescription': '.medium-8 columns medium-offset-2 end'
      });
});
</script>

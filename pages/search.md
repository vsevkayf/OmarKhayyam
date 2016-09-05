---
permalink: /search/
layout: page
header:
  title: Soroka Clinical Research Center 
  image_fullwidth: twodudes.png
title: "Search"
---

<form action="/search.html" method="get">
  <label for="search-box">Search</label>
  <input type="text" id="search-box" name="query">
  <input type="submit" value="search">
</form>

{% include _google_search1.html %}

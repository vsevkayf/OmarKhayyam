---
layout: page
header:
  title: Soroka Clinical Research Center
  image_fullwidth: microdude.jpg
title: "Grants"
meta_title: "Grants"
subheadline: ""
teaser: ""
permalink: "/Grants/"
---
<div class="row">
		<dl class="accordion" data-accordion>
			{% assign counter = 1 %}
			{% for grant in site.data.grants limit:200 %}
			<dd class="accordion-navigation">
			<a href="#panel{{ counter }}"><span class="iconfont"></span> {% if grant.date %}{{ grant.date }} › {% endif %}<strong>{{ grant.title }}</strong></a>
				<div id="panel{{ counter }}" class="content">
					{% if grant.source %}<p>{{ grant.source | strip_html | escape }}</p>{% endif %}
          				{% if grant.PIdr %}<p>{{ grant.PIdr | strip_html | escape }}</p>{% endif %}
					<br><br>
				</div>
			</dd>
			{% assign counter=counter | plus:1 %}
			{% endfor %}
		</dl>
</div><!-- /.row -->

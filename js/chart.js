/*! Github-Tools-for-WordPress - v1.3.4 - 2015-08-03 */"use strict";var CHART=function(a,b,c){var d=function(a){return nv.models.discreteBarChart().x(function(a){return a.date}).y(function(a){return a.value}).staggerLabels(!1).tooltips(!0).showValues(!1).transitionDuration(250).margin({top:15,right:10,bottom:20,left:20}).color(function(b){return a.color}).tooltipContent(function(a,b,c,d,e){return 1!==parseInt(c,10)?"<h3>"+c+" commits</h3>":"<h3>"+c+" commit</h3>"})},e=function(a,c){b.isNumeric(c.width)&&c.width>0&&a.style("width",c.width),b.isNumeric(c.height)&&c.height>0&&a.style("height",c.height),a.style("background",c.background)},f=function(a){a.xAxis.tickFormat(function(a){return d3.time.format("%e %b")(new Date(a))}),a.yAxis.tickFormat(d3.format("d"))};return a.init=function(){nv.addGraph(function(){d3.selectAll(".github-chart svg").each(function(a,b){var g=d3.select(this),h=c[g.attr("id")],i=d(h);f(i),e(g,h),g.datum([{key:"Github Repository",values:h.data}]).call(i),nv.utils.windowResize(i.update)})})},a}(CHART||{},jQuery,window);jQuery(document).ready(CHART.init);
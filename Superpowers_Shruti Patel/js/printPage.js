//Got this javascript from page 539 in the textbook
var $ = function (id) {return document.getElementById(id);}

var printPage = function() {window.print()}

window.onload = function() {$("printbutton").onclick = printPage;


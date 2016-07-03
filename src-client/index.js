
var gamecontext = localStorage.getItem("mathematicalfield");
if(gamecontext){
	window.mathematicalfield = JSON.parse(gamecontext);
}else{
	window.mathematicalfield = {};
	localStorage.setItem("mathematicalfield",window.mathematicalfield);
}

var socket = io();

(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
$(document).ready(function() {
  $("form#triangle").submit(function() {
  var side1 = parseInt($("input#side1").val());
  var side2 = parseInt($("input#side2").val());
  var side3 = parseInt($("input#side3").val());
  console.log("side2: " + side2)
  console.log("side3: " + side3)
  debugger;
    if ((side1 === side2) && (side2 === side3) && (side1 === side3)) {
    $('#equilateral').show();
    }
    else if ((side1 === side2) || (side2 === side3) || (side1 === side3)) {
    $('#isosceles').show();
    }
    else if ((side1 !== side2) && (side2 !== side3) && (side1 !== side3)) {
    $('#scalene').show();
    }
    else {
    $('#notATriangle').show();
    }
    event.preventDefault();
  });
});

},{}]},{},[1]);

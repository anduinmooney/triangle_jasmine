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

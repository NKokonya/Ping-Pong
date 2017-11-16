//Back-end code

function pingPong() {
 $('#number-chooser').submit(function(event) {
    event.preventDefault();

console.log($('#number-choice').val());
var input = $('#number-choice').val();

var fizzArray = [];
for (i=1; i<=input; i++) {

if (i % 15 === 0){
  fizzArray.push("fizzbuzz");
}
else if (i % 5 === 0) {
  fizzArray.push("buzz");
}
else if (i % 3 === 0){
  fizzArray.push("fizz");
}
else fizzArray.push(i);
}
console.log(fizzArray);

fizzArray.forEach(function(thing) {
  var newSpan = $( '<div class="fizz-buzz-item"><span>' + thing + '</span></div>');
  if (thing === "fizz" || thing === "buzz" || thing === "fizzbuzz") {
    newSpan.addClass(thing);}

$('.js-results').append(newSpan);
});
});
}

$(pingPong);

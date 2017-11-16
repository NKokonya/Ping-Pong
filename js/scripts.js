//Back-end code

function pingPong() {
 $('#number-chooser').submit(function(event) {
    event.preventDefault();

console.log($('#number-choice').val());
var input = $('#number-choice').val();

var pingpongArray = [];
for (i=1; i<=input; i++) {

if (i % 15 === 0){
  pingpongArray.push("Ping Pong!");
}
else if (i % 5 === 0) {
  pingpongArray.push("Pong");
}
else if (i % 3 === 0){
  pingpongArray.push("Ping");
}
else pingpongArray.push(i);
}
console.log(pingpongArray);

pingpongArray.forEach(function(thing) {
  var newSpan = $( '<div class="ping-pong-output"><span>' + thing + '</span></div>');
  if (thing === "ping" || thing === "pong" || thing === "pingpong") {
    newSpan.addClass(thing);}

$('.js-results').append(newSpan);
});
});
}

$(pingPong);

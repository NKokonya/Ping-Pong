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

pingpongArray.forEach(function(square) {
  var newSpan = $( '<div class="ping-pong-output"><span>' + square + '</span></div>');
  if (square === "ping" || square === "pong" || square === "pingpong") {
    newSpan.addClass(square);}

$('.pingpong-results').append(newSpan);
});
});
}

$(pingPong);

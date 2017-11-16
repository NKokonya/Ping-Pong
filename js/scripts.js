/*function pingPong(number) {
  const divisibleBy5 = number % 5 === 0;
  const divisibleBy3 = number % 3 === 0;
  let result = "";

  if (divisibleBy5 && divisibleBy3) {
    result = "pingpong";
  }
  else if (divisibleBy3) {
    result = "ping";
  }
  else if (divisibleBy5) {
    result = "pong";
  }
  else {
    result = number;
  }

  return result;
}

$("form#run-pingpong").submit(function(event) {
  event.preventDefault();
  const input = $("#numberchooser").val();
  console.log(input);
  const output = pingPong(input);

  $("#result-pinpong").append(`
    <div class="ping-pong-item">
      <span>${output}</span>
    </div>
  `
  );
});
*/

var pingPong = function (enterNumber){
  for (var i = 0; i <=enterNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      $("result-pinpong").append("<li> + Ping-Pong!")
    }

    else if (i % 3 === 0) {
      $("result-pinpong").append("<li> + Ping")
    }

    else if (i % 5 === 0) {
      $("result-pingpong").append("<li> + Pong")
    }

    else {
      $("result-pingpong").append("<li> + enterNumber")
    }

  }


$(document).ready(function() {
  $("form#run-pingpong").submit(function(event) {
    event.preventDefault();
    pingPong();
  })
})


/*$(document).ready(function() {
  $("form#run-pingpong").submit(function(event){
    event.preventDefault();
    pingPong();

  });
}); */

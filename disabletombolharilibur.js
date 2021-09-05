<html>
<head>
<title>Page Title</title>
</head>
<body>
<style>
.disabled {
  background: grey;
}
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<button id="myButton">Press me only on weekday</button>

<script>
$(function() {
  var now = new Date(),
      days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      day = days[now.getDay()],

      $button = $('#myButton');

  if (day === days[0] || day === days[6]) {
      $button.addClass('disabled');
  }

  $button.click(function() {
      if ($(this).hasClass('disabled')) {
          alert('We are not accepting entries during weekends.')
          return;
      }
  });
})
</script>

</body>
</html>

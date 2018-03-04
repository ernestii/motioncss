// After DOM is ready
$(document).ready(function() {

  const $sw = $('#switch');

  // When the switch is clicked
  $sw.on('click', function() {
    $sw.toggleClass('active');
    $('body').toggleClass('night');
  });

});

// After DOM is ready
$(document).ready(function() {

  const $sw = $('#switch');

  // When the switch is clicked
  $sw.on('click', function() {
    $sw.toggleClass('active');
    $('body').toggleClass('night');

    if ( ! $('body').hasClass('night') ) {

      // Clouds animation
      let i = 0;
      $('.cloud').each(function() {
        const $this = $(this);

        /* Add delay for each cloud using setTimeout */
        setTimeout(function() {
          $this.animate({
            opacity: .6,
            bottom: '1vh',
          }, { 
            duration: 2000,
            easing: 'easeOutQuart'
          });
        }, i * 200);
        
        i++;
      });
    } else {
      
      // Clouds animation
      let i = 0;
      $('.cloud').each(function() {
          $(this).animate({
            opacity: 0,
            bottom: '-100%',
          }, { 
            duration: 1000 + i * 100,
            easing: 'easeInOutQuart'
          });
        i++;
      });

    }
    
  });

  

});

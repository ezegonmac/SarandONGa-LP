$(document).ready(function(){

    $('.count').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count'),
          type = $this.attr('data-type');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 5000,
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          var text = $this.text();
          if(type != 'exact') {
            text += '+';
          }
          $this.text(text);
        }
      });
    });
    
    });
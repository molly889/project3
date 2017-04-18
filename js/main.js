//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    // TODO: Create a function to listen for clicks on the "login" button.
    //      1. When a user clicks the "login" button, hide the login
    //          form elements on the page.
    //      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)
    $('#login-form').keyup(function(){
        var yourname = $('.form-control').val();
        $('.user-fullname').text(yourname);
        });
        $('.btn-sm').click(function(e){
          $('.user-info').show();
            $('#login-form').hide();
          e.preventDefault();
        });

    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
    //      2. Within that parent, find all the elements that have the class `details`.
    //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.

    $('.view-details').click(function(e){

      if ($(this).hasClass('closed')){
        $(this).parents('div').find('.details').show(1000);
        $(this).html("Hide Details");
        $(this).removeClass('closed');
        $(this).addClass('open');
      }
      else if ($(this).hasClass('open')){
        $(this).parents('div').find('.details').hide(1000);
        $(this).html("View details &raquo;");
        $(this).addClass('closed')
        $(this).removeClass('open');
      }

      else {
        echo('error');
      }
    });


    //}
    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.

    $('.vote').click(function(e) {
      console.log($(this).attr('data-vote'));
      if ( $(this).attr('data-vote') ==="great"  ) {
        console.log("text matches");
        var oldWidth =$('.great-progress').css('width');
        console.log(oldWidth);
        var width = parseInt(oldWidth,10);
        var newWidth = width + 50;
        console.log(newWidth);
        $('.great-progress').css('width',newWidth);
      }
      else if ( $(this).attr('data-vote') ==="greatest" ) {
        console.log("this text matches");
        var oldWidth =$('.greatest-progress').css('width');
        console.log(oldWidth);
        var width = parseInt(oldWidth,10);
        var newWidth = width + 50;
        console.log(newWidth);
        $('.greatest-progress').css('width',newWidth);
      }
    });
});

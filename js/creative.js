(function($) {
    "use strict"; // Start of use strict

    // Services modal boxes
    // Get the modalOne
    var modalOne = document.getElementById('myModalOne');

    // Get the button that opens the modal
    var btnOne = document.getElementById("myBtnOne");

    // Get the <span> element that closes the modal
    var spanOne = document.getElementById("closeOne");

    // When the user clicks on the button, open the modal 
    btnOne.onclick = function() {
        modalOne.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spanOne.onclick = function() {
        modalOne.style.display = "none";
    }

    // Get the modalTwo
    var modalTwo = document.getElementById('myModalTwo');

    // Get the button that opens the modal
    var btnTwo = document.getElementById("myBtnTwo");

    // Get the <span> element that closes the modal
    var spanTwo = document.getElementById("closeTwo");

    // When the user clicks on the button, open the modal 
    btnTwo.onclick = function() {
        modalTwo.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spanTwo.onclick = function() {
        modalTwo.style.display = "none";
    }
    // Get the modalThree
    var modalThree = document.getElementById('myModalThree');

    // Get the button that opens the modal
    var btnThree = document.getElementById("myBtnThree");

    // Get the <span> element that closes the modal
    var spanThree = document.getElementById("closeThree");

    // When the user clicks on the button, open the modal 
    btnThree.onclick = function() {
        modalThree.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spanThree.onclick = function() {
        modalThree.style.display = "none";
    }
    // Get the modalFour
    var modalFour = document.getElementById('myModalFour');

    // Get the button that opens the modal
    var btnFour = document.getElementById("myBtnFour");

    // Get the <span> element that closes the modal
    var spanFour = document.getElementById("closeFour");

    // When the user clicks on the button, open the modal 
    btnFour.onclick = function() {
        modalFour.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spanFour.onclick = function() {
        modalFour.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modalOne) {
            modalOne.style.display = "none";
        }
        else if (event.target == modalTwo) {
            modalTwo.style.display = "none";
        }
        else if (event.target == modalThree) {
            modalThree.style.display = "none";
        }
        else if (event.target == modalFour) {
            modalFour.style.display = "none";
        }
    }


    // jQuery for text animation - requires morphext plugin
    $('#js-rotating').Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "zoomIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2500,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

})(jQuery); // End of use strict



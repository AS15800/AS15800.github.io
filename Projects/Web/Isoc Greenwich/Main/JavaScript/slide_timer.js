function slideshow() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        //Set every image inactive
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        //Increase the slide index
        slideIndex++;

        //At the end of the image list, go back to the first one
        if (slideIndex > slides.length) {
            slideIndex = 1
        }

        /*
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        */

        slides[slideIndex - 1].style.display = "block";

        dots[slideIndex - 1].className += " active";

        //Run the function every 2 seconds
        setTimeout(showSlides, 5000);
    }
}

function timer() {
    // Set the date we're counting down to
    var countDownDate = new Date("March 23, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("event_timerId").style.visibility = "hidden";
        }
    }, 1000);
}
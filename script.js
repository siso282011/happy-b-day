// Set the date we're counting down to
var countDownDate = new Date("June 14, 2024 00:00:00").getTime();

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

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "HAPPY BIRTHDAY";
        showPage(1);
    }
}, 1000);

function showPage(pageNumber) {
    if (pageNumber === 1) {
        document.getElementById("page1").style.display = "block";
        document.getElementById("page2").style.display = "none";
        document.getElementById("pagination").style.display = "block";
        setTimeout(function() {
            showPage(2);
        }, 10000); // Show page 2 after 10 seconds
    } else if (pageNumber === 2) {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
        setTimeout(function() {
            document.getElementById("page2").style.display = "none";
            document.getElementById("pagination").style.display = "none";
        }, 10000); // Hide everything after 10 seconds
    }
}

$(document).ready(function() {

    // Display the current date and time
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'))

    // add click listener for save-button
    $('.saveBtn').on('click', function () {
        console.log(this);
        // get values
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        // put data in local storage
        localStorage.setItem(time, text);
    })

    // Get data from local storage
    $('#t9am .description').val(localStorage.getItem('t9am'));
    $('#t10am .description').val(localStorage.getItem('t10am'));
    $('#t11am .description').val(localStorage.getItem('t11am'));
    $('#t12pm .description').val(localStorage.getItem('t12pm'));
    $('#t1pm .description').val(localStorage.getItem('t1pm'));
    $('#t2pm .description').val(localStorage.getItem('t2pm'));
    $('#t3pm .description').val(localStorage.getItem('t3pm'));
    $('#t4pm .description').val(localStorage.getItem('t4pm'));
    $('#t5pm .description').val(localStorage.getItem('t5pm'));


    var elements = $(".time-block");
    var d = new Date();
    var h = d.getHours();
       
    // loop over time block    
    for (i = 0; i < elements.length; i++) {
        var t = parseInt(elements[i].getAttribute("data-hour"));

        // check if we've moved past this time and change the color
        if (h < t) {
            elements[i].classList.add('future');
            elements[i].classList.remove('past');
            elements[i].classList.remove('present');
        }  else if (h > t) {
            elements[i].classList.add('past');
            elements[i].classList.remove('future');
            elements[i].classList.remove('present');
        } else if (h === t) {
            elements[i].classList.add('present');
            elements[i].classList.remove('future');
            elements[i].classList.remove('past');
        } else if (h > 16 && h < 9) {
            elements[i].classList.add('future');
            elements[i].classList.remove('past');
            elements[i].classList.remove('present');
        }
    } 
})
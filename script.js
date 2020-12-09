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


    function timeTracker() {
        var thisTime = moment().hour();

        // loop over time blocks
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('hour')[1]);
            console.log (blockHour, thisTime);

            // if moved past this time
            if (blockHour < thisTime) {
                $(this).addClass('past');
                $(this).removeClass('future');
                $(this).removeClass('present');
            } 
            else if (blockHour === thisTime) {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future');  
            }
            else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');  
            }
        })
    }
    timeTracker();
})
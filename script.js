$(document).ready(function() {

// Display the current date and time
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'))

// add click listener for save-button
$('saveBtn').on('click', saveMySchedule())

function saveMySchedule() {
    // console.log(this);
// get values
    var text = $(this).siblings('.describtion').val();
    var time = $(this).parent().attr('id');
// put data in local storage
    localStorage.setItem(time, text);
}

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














})
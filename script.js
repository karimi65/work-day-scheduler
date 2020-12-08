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















})
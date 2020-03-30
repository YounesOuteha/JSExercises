/* 3. Create a simple to do list from a prompt.
     * Create a button and when you click the button, it will "Add an item to the list" as a promt message
     * When you promt a task, it will write inside the page as a list */

$(document).ready(function(){
    $('#btn').click(function(){
        let li = $('#todoList').val();
        $("#menu").append(`<li>${li}</li>`);
        $('#todoList').val('');
    })





})
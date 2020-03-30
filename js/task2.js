/* 2. Create a script which calculates how old someone is based on their birth year.
     * Redo task #1 but based on birth year and this year (2020)
     * In this case, use switch case the solution and a function
*/

$(document).ready(function(){
$('#btn').click(()=>{
    let year = $('#YOB').val();
    let time = new Date();
    let currentYear = time.getFullYear();
    let Result = currentYear - year;
    $('#result').val(Result);
    let inRes = parseInt(Result);
    switch(true) {
        
        case (inRes < 18):
          // code block
          alert('You are not allowed to drive');
          break;

        case inRes > 17:
          // code block
          alert('You are allowed to drive');
          break;

        case inRes>75:
            // code block
            alert('You are not allowed to drive');
            break;

      } 
      
});
$('#YOB').val('');
$('#result').val('');
})
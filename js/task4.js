/* 4. Find the biggest element in an array of numbers
    * Create a script that prompts for a few numbers and which then gets added to the above array and find the biggest number again.
    * I want to see function, for loop and if statement in your solution. Please think a solution which uses all of them
 */

 $(document).ready(function(){
    let listArray = [];
    let cup;
    $('#btn').click(()=>{
        listArray.push($('#myInput').val());
        $("#menu").append(`<li>${$('#myInput').val()}</li>`);
        $('#myInput').val('');
        
/*          cup = listArray[0];
         for(let i = 0; i <= listArray.length; i++){
            if (cup < listArray[i] ){
                cup = listArray[i];
            }
        }
        $('#biggest').val(cup);   */

        

        cup = listArray[0];
        listArray.forEach(item=>{
        if (cup < item){
            cup = item;
        }
        $('#biggest').val(cup);
        })
        
    })

    $('#biggest').val('');




 })
/* 6. Create a script that lists everyone in the class from a prompt, 1 prompt per name
     * Ask "How many students are there in the class" and 'what is student #2 name' by prompt */

$(document).ready(function(){

     let namesArray = [];
     
     $('#btn').click(()=>{
          namesArray.push($('#myInput').val());
          console.log(namesArray);
          $('#myInput').val('');
     })
     
     $('#show').click(()=>{
          let myVar = $('#studentId').val();
          /* let indexVar=namesArray.indexOf();
          console.log(indexVar); */
           /* [1][2][3][4][5][6] */
          //findIndex(function);
          /* function checkIndex(myVar) {
          return age >= 18;
          } */

          for(i=1; i<=namesArray.length; i++){ 
              
               if(myVar == i){

                    $('#menu').append(`<li>${namesArray[i-1]}</li>`);
               }
          }
          
     })
     $('#studentId').val('');
})
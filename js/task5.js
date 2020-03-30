/* 5. Create a random number checker
     * Create an array from 1 to 6 with 6 elements
     * Use map method to make them double (like 1 x 2 = 2)
     * Add a button and when you click the button show your random value inside the new array (because of map)
     * Write your normal array above the button inside the page */


    

   $('document').ready(function(){
        let myArray = [];
        let newArray=[];
        let vv;
        $('#btn').click(function(){
            myArray.push($('#myInput').val());
            $('#menu').append(`<li>${$('#myInput').val()}</li>`);
            myArray.map(item=>{
                vv = parseInt(item)  * 2; 
            });
            newArray.push(vv);
            console.log(myArray);
            console.log(newArray);
            $('#result').append(`<li>${vv}</li>`);
            $('#myInput').val('');
        })
        $('#container').css("display", "flex");

       $('#show').click(()=>{
             let number = Math.floor(Math.random() * newArray.length);//return random number between 0 and 6  
             console.log(newArray[number]); 
            
            $('#result1').val(newArray[number]);
        })
        $('#result1').val('');













         let newArray1 = ['Hello', 'hi','how are you', 'Goodbye'];
        $('#showText').click(()=>{
             let myVar = Math.floor(Math.random() * newArray1.length);   
            $('#result2').val(newArray1[myVar]);                           
            
              for(let i = 0; i<newArray1.length; i++){
                    setInterval(function() {
                            $('#result2').val(newArray1[i]);
                    },1000);
                            }
            
            
            
        })
        /* $('#result2').val(''); */
        

    

})
      /*   let show = document.getElementById("show");
        let result = document.getElementById("result1");
        show.addEventListener("click", function(e) {
        result.value = "hello";});*/
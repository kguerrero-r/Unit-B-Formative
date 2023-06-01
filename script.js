// DO NOT ALTER THE CODE BETWEEN LINES 1 - 5
let button = document.querySelector("button");

button.onclick = function() {

//Step 1: Using HTML, change the image above to an image of your favorite animal.
      
  //  Step 2: On line 10, declare a variable named "favAnimal" and set it equal to the value of the h1 tag with the class of "animal".
    
   let favAnimal=document.querySelector(".animal");
    
    
//Step 3: On line 14, use the .innerHTML method we learned today to change the sentence "My Animal Here" to the name of your favorite animal.   
favAnimal.innerHTML="orca";
    
//Step 4: On line 18, use the .style method we learned today to change the color of the text of your favorite animal when you click the "change me" button. 
   

// DO NOT ALTER THE CODE BELOW THIS LINE    

};

document.getElementById("greetButton").addEventListener("click", function() {
    alert("Administrator");
   });
   document.getElementById("secondComputation").addEventListener("click", function() {
    let total = sumOfTwoNumbers(firstNumber, secondNumber);
    alert("Total computation: " + total);
   });
   function displayName(name) {
    document.write("Name: " + name);
   }
   function sumOfTwoNumbers(a, b, elementId) {
    let sum = a + b;
    if (elementId) {
        document.getElementById(elementId).textContent = "Sum: " + sum;
    }
    return sum;
   }
   function computeGrade() {
       let name = prompt("Please enter your name: ");
       let totalItem = parseInt(prompt("Please enter your items: "));
       let totalScore = parseInt(prompt("Please enter your total score: "));
       let grade = formula(totalItem, totalScore).toFixed(2);
       alert("Your Name Is: " + name + "\nYour Grade: " + grade + "\nResult: " + checkResult(grade));
       document.write("Your Name Is: " + name + "<br>Your Grade: " + grade + "<br>Result: " + checkResult(grade));
       document.write("<br>");
       console.log("Your Name Is: " + name + "<br>Your Grade: " + grade + "Result: " + checkResult(grade));
   }
   function checkResult(grade) {
       if(grade<=3.00){
           return "You're Passed";
       }
       else{
           return "You're Failed";
       }
   }
   function formula(totalItem, totalScore){
       return -4* (totalScore/totalItem) + 5;
   }
   computeGrade();
   
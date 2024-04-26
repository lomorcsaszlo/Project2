const check = document.getElementById("check")
const inputtext = document.getElementById("input1")
const outp = document.getElementById("output1")
const correctanswer1 = "cat" /* helyes válasz */
var actcorrect = correctanswer1
const correct = document.getElementById("correct")
const incorrect = document.getElementById("incorrect")
const thxbut = document.getElementById("thx")
const uno = document.getElementById("uno")
let count = 0


check.addEventListener("click", function () {
    if (actcorrect == inputtext.value) {
        correct.style.display = "block"
        thxbut.addEventListener("click", function () {
            correct.style.display = "None";
            inputtext.style.display="None"
            check.style.display="None"
            outp.innerHTML = "The answer was: "+ inputtext.value 
        })
    
    }else{
        alert("Incorrect Answer :(")
        
    }
   
 
})



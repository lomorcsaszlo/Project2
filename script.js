const check = document.getElementById("check")
const inputtext = document.getElementById("input1")
const outp = document.getElementById("output1")
const help = document.getElementById("Help")
const hint = document.getElementById("clue")
const correctanswer1 = "wow you exist" /* helyes válasz, elvileg csak ezt kell kicserélni*/
var actcorrect = correctanswer1
const correct = document.getElementById("correct")
const incorrect = document.getElementById("incorrect")
const thxbut = document.getElementById("thx")
const uno = document.getElementById("uno")


/* Dark Mode consts */
const but = document.getElementById("dmb")

let count = 0



check.addEventListener("click", function () {
    if (actcorrect == inputtext.value) {
        alert("Correct! Congratulations!")
        outp.innerHTML = "The correct answer was:" + correctanswer1




    } else {
        alert("Incorrect Answer :(")

    }


})

help.addEventListener("click", function(){
    hint.style.display = "block"
})


/* Dark Mode Button */



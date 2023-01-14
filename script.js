

// var x = document.getElementById("myText").value;
// document.getElementById("demo").innerHTML = x;

let textBox=document.getElementById("evaluatedText");
textBox.addEventListener("keyup", function () {
        let textEntered = textBox.value;
        let output = document.getElementById("letterCount");
        output.innerHTML = textEntered.length;
    })

// ()=>{rollDice(btns[i].id)}
// function handle(){
//     var inText=document.getElementById("#evaluatedText").value;

// document.getElementById("#letterCount").innerHTML=inText.length;
// }



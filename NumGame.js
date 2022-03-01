let n1 = Math.floor(Math.random() * 100 + 1);
console.log(n1);

let adds = n1;
function Game() {
    let user = document.getElementById("intext2").value;
    if (user == adds) {
        document.getElementById("ans").innerHTML = "Qoyil. Siz yashirin sonni topdingiz ";
        n1 = Math.floor(Math.random() * 100 + 1);
        document.getElementById("show-answer").style = (style = "background:rgb(22, 248, 78)")
        console.log(n1);
        adds = n1;
        document.getElementById("intext2").value = "";
        document.getElementById("intext2").placeholder = "Enter the result!";
        document.getElementById("num1").placeholder = "?";
    } else {
        (user > adds) ? document.getElementById("ans").innerHTML = "Kerakli son bu sondan kichik!" :
            document.getElementById("ans").innerHTML = "Kerakli son bu sondan kotta!";
        document.getElementById("intext2").value = "";
        document.getElementById("intext2").placeholder = "Try again!";
        document.getElementById("show-answer").style = (style = "background:#F43A30")
    }
 }
function help() {
    document.getElementById("num1").placeholder = n1;
    console.log(n1);
}  n1 = Math.floor(Math.random() * 100 + 1);
console.log(n1);

 adds = n1;
function Game() {
    let user = document.getElementById("intext2").value;
    if (user == adds) {
        document.getElementById("ans").innerHTML = "Qoyil. Siz yashirin sonni topdingiz ";
        n1 = Math.floor(Math.random() * 100 + 1);
        document.getElementById("show-answer").style = (style = "background:rgb(22, 248, 78)")
        console.log(n1);
        adds = n1;
        document.getElementById("intext2").value = "";
        document.getElementById("intext2").placeholder = "Enter the result!";
        document.getElementById("num1").placeholder = "?";
    } else {
        (user > adds) ? document.getElementById("ans").innerHTML = "Kerakli son bu sondan kichik!" :
            document.getElementById("ans").innerHTML = "Kerakli son bu sondan kotta!";
        document.getElementById("intext2").value = "";
        document.getElementById("intext2").placeholder = "Try again!";
        document.getElementById("show-answer").style = (style = "background:#F43A30")
    }
}
// function help() {
//     document.getElementById("num1").placeholder = n1;
// }
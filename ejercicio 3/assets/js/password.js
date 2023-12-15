let passwordEnter = document.querySelector ("#psbtn");

function passwordCheck () {
    let pass1 = document.querySelector("#password-1").value;
    let pass2 = document.querySelector("#password-2").value;
    let pass3 = document.querySelector("#password-3").value;

    if (pass1 === "9" && pass2 === "1" && pass3 === "1"){
        document.querySelector("#pswtext").innerHTML = "Password 1 Correcta" ;
        
        
    } else if (pass1 === "7" && pass2 === "1" && pass3 === "4"){
        document.querySelector("#pswtext").innerHTML = "Password 2 Correcta";


    } else document.querySelector("#pswtext").innerHTML = "Password Incorrecta "

}

 passwordEnter.addEventListener("click", passwordCheck); 
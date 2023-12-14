//elementos del DOM 
function changeBorder () {
    const logo = document.getElementById ("myMusic");
    const validation = logo.classList.contains("border")
    if (validation == false) {
        logo.classList.add("border")}
        else{ 
            logo.classList.remove("border")
        }
    }
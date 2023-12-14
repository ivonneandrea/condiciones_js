let stickerTotal = document.querySelector ("#Total");

function calculateTotal () {
    let num1 = document.querySelector("#stickers-a").value;
    let num2 = document.querySelector("#stickers-b").value;
    let num3 = document.querySelector("#stickers-c").value;

    let total = +num1 + +num2 + +num3;
    if (total <= 10) {
        document.querySelector("#text").innerHTML =
        "Tienes " + total +  "stickers" ;

    }else 
    document.querySelector("#text").innerHTML =
        "Llevas demasiados stickers"
}

stickerTotal.addEventListener("click", calculateTotal);
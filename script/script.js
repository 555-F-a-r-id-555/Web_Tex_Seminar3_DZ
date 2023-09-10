function hello() {
    let res;
    let writeText = document.querySelector(".p");

    alert("Давайте знакомиться !");
    res = prompt("Как вас зовут ?");

    if (res !== null) {
        if (res != "") {
            writeText.textContent = `Привет, ${res}!`;
            // console.log(`Привет, ${res}!`);
        } else {
            writeText.textContent = "Привет !) Но вы так и не представились...";
            // console.log("Привет !) Но вы так и не представились...");
        }

    } else {
        writeText.textContent = "Привет, Вы не представились, попробуйте еще раз...";
        // console.log("Привет, Вы не представились, попробуйте еще раз...");
        if (confirm("Вы готовы, попробовать еще раз?")) {
            hello();
        }
    }
}

let click = document.querySelector(".click");

click.addEventListener("click", hello);
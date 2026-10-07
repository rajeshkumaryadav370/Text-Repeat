const input = document.querySelector(".input");
const w = document.querySelector(".w");
const btn = document.querySelector(".btn");
const text = document.querySelector("#text");

btn.addEventListener("click", function () {
    if (Number(input.value) >= 500 || w.value.length >= 20) {
        alert('Please Enter Valid Number\n Choice Should be >=500 \n Text >= 25')
    } else {
        for (let i = 1; i <= Number(input.value); i++) {
            document.querySelector(".container").style.display = "none"
            document.querySelector(".x").style.display = "block"
            text.innerHTML += `${w.value} <br>`;

        }
    }

})

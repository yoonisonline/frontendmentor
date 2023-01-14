// change color of rating when clicked
const buttons = document.querySelectorAll("label");
for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = changeColor;
    buttons[i].onclick = getValue;
    }


function changeColor() {
    this.style.backgroundColor = "#959eac";
    this.style.fontWeight = 700;
    this.style.color = "white"
}

function getValue() {
    this.classList.add('selected')
}
//show selected rating on thank you page





// show thank you page when submit is pressed
const submit = document.querySelector('.submit');
const before = document.querySelector(".before")
const after = document.querySelector(".after")

const thankyou = () => {
    before.style.display = "none";
    after.style.display = "flex";
};

submit.addEventListener("click", thankyou);


//
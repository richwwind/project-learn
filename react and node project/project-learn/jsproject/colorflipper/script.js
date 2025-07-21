const changeBackground = (value) => document.body.style.backgroundColor = value;


const input = document.getElementById("color-picker");
const [btn] = document.getElementsByTagName("button");
btn.addEventListener("click",() => changeBackground(input.value));
let value = 0;
const btn = document.getElementsByTagName("button");
const num = document.getElementById("number");
const action = ["reset","increase","decrease"];


const btnAction = (action) =>{
    if(action === "reset")value = 0;
    else if(action === "increase") value++;
    else value--;
    console.log(value);
    num.textContent = value;
}

for(let i = 0;i<btn.length;i++){
    btn[i].addEventListener("click", () => btnAction(action[i]));
}


const userInput = document.getElementById("userInput");
const passInput = document.getElementById("passInput");
const sign = document.getElementById("sign");
// console.log(sign)

sign.addEventListener("click",() => {
    const input = userInput.value;
    const pass = passInput.value;

    if(input !== "admin"){
        userInput.value = "";
        userInput.focus();
        alert("Wrong Username");
        return;
    }

    if(pass !== "admin123"){
        passInput.value = "";
        passInput.focus();
        alert("Wrong Password");
        return;
    }
    else{
        window.location.assign("home.html");
    }
})
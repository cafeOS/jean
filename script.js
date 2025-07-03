
function validerNom() {
    const password = document.getElementById('password').value.trim();
    const messageDiv = document.getElementById('message');
    const email = document.getElementById('email').value.trim();

    if (password === "" || email === "") {
        alert("veiller entrer votre  email et password pour acceder au site cafeOS .");
        return false;

    } else {
        localStorage.setItem("nomUtulisateur", password, email);
        window.location.href = "inex.html";
        return false;
    }

}

const enbourger= document.getElementById("enbourger");
const cafe= document.querySelector(".cafe");

enbourger.addEventListener("click",()=>{
        console.log("enbourger");
        
        
})
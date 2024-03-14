let card1 = document.querySelector(".cardlar1");
let card2 = document.querySelector(".cardlar2");
let card3 = document.querySelector(".cardlar3");
function leftfunction () {
    let img = document.querySelector("#imgcontent");
    if(img.src == "https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-White-Dark-Background-Logo.wine.svg"){
        img.src = "https://static.vecteezy.com/system/resources/previews/019/136/299/original/acer-logo-acer-icon-free-free-vector.jpg";
        card1.style.display = "none";
        card2.style.display = "flex";
        card3.style.display = "none";
    }else if(img.src == "https://static.vecteezy.com/system/resources/previews/019/136/299/original/acer-logo-acer-icon-free-free-vector.jpg"){
        img.src = "https://www.logodesign.org/wp-content/uploads/2022/12/pasted-image-0.png";
        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "flex";  
    }else{
        img.src = "https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-White-Dark-Background-Logo.wine.svg";
        card1.style.display = "flex";
        card2.style.display = "none";
        card3.style.display = "none";
    }
}

let imgimg = document.querySelector("#imgcontent");
function rightfunction () {
    let imgimg = document.getElementById("imgcontent");
    if(imgimg.src == "https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-White-Dark-Background-Logo.wine.svg") {
        imgimg.src = "https://www.logodesign.org/wp-content/uploads/2022/12/pasted-image-0.png";
        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "flex";  

    }else if(imgimg.src == "https://www.logodesign.org/wp-content/uploads/2022/12/pasted-image-0.png"){
        imgimg.src = "https://static.vecteezy.com/system/resources/previews/019/136/299/original/acer-logo-acer-icon-free-free-vector.jpg";
        card1.style.display = "none";
        card2.style.display = "flex";
        card3.style.display = "none";
    }else{
        imgimg.src = "https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-White-Dark-Background-Logo.wine.svg";
        card1.style.display = "flex";
        card2.style.display = "none";
        card3.style.display = "none";
    }
}





function log(){
    let a = document.getElementById("in").value;
    
    if(a != "2012"){
        alert("❌ Error, password incorrect");
        document.querySelector("#ass").href = "";
    }else{
        alert("✅ Login Successfully");
        document.querySelector("#ass").href = "main.html";
    }
}


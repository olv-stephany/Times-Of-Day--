window.addEventListener('load',(e) =>{
    let text = document.querySelector("#hour");
    let img = document.querySelector("#imgStyle");
    let data = new Date();
    let hour = data.getHours();

    if (hour >= 0 && hour < 12){
        text.textContent = "morning.";
        img.src = "css/img/morning.svg";
    } 
    else if (hour >= 12 && hour < 18){
        text.textContent = "afternoon.";
        img.src = "css/img/afternoon.svg";
    }
    else{
        text.textContent = "night.";
        img.src = "css/img/night.svg";
    }
});
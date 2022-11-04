//for nav bar 
function scroll(){
    let header = document.getElementById("header")
    let logo = document.getElementById("logo")
    let home = document.getElementById("home")
    let windowPosition = window.scrollY
    if(windowPosition > 200){
        header.classList.remove("header-nav-content")
        header.classList.add("header-scroll")
        header.classList.add("header-scroll1")
        logo.classList.remove("logo")
        logo.classList.add("logo-scroll")
        home.classList.remove("home")
        home.classList.add("home-scroll")
    
       
    } else{
        if(windowPosition < 200){
            header.classList.remove("header-scroll")
            header.classList.add("header-nav-content")
            logo.classList.remove("logo-scroll")
            logo.classList.add("logo")
            home.classList.remove("home-scroll")
            home.classList.add("home")
        }
    }
    // console.log(windowPosition)
}

window.addEventListener('scroll', scroll);

//for carousels

document.querySelectorAll(".carousel").forEach(carousel => {
const slides = carousel.querySelectorAll(".carousel-item");
const btns = carousel.querySelectorAll(".carousel-btns");
btns.forEach((btn,i)=>{
btn.addEventListener("click", () =>{
    slides.forEach(item => item.classList.remove
    ("current-slide"));
    btns.forEach(btn => btn.classList.remove
    ("current-btn"))

    slides[i].classList.add("current-slide")
    btn.classList.add("current-btn")
});
});

slides[0].classList.add("current-slide")
btns[0].classList.add("current-btn")
}); 


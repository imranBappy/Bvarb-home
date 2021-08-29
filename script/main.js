(function(){
    console.log(200);

    const menu = document.getElementById("menu");
    const menuContainer = document.querySelector(".menu-container");
    const cancel = document.querySelector('#cancel')
    const overlay = document.querySelector(".nav-overlay");
    const menuOption = document.querySelector('#menu-option');
    menuOption.onclick = ()=>{
        menu.classList.add("menu-link-active");
        overlay.style.display = 'block';
        menuContainer.classList.add("nav-open");
        console.log(200);
    }
    cancel.onclick = ()=>{
        menu.classList.remove("menu-link-active");
        overlay.style.display = 'none'
    }
    window.onclick = function(event) {
    if (event.target == overlay) {
        menu.classList.remove("menu-link-active");
        overlay.style.display = 'none'
    }
    }
    
})()
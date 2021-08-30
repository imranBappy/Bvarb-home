(function(){
    const scroll_effect = (classNames, top = 1, animate) => {
        window.addEventListener('scroll',()=>{
            const section = document.querySelector(classNames);
            const contentPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / top
            if(contentPosition < screenPosition){
                section.classList.add('active')
            }else{
                section.classList.remove('active')
            }
        });
    };

    scroll_effect('#introduce', 1, 'active');
    scroll_effect('#crypto', 1, 'active');
    
    scroll_effect('#nft', 1, 'active');

    scroll_effect('#arbitrage', 1, 'active')
    scroll_effect('#football', 1, 'active')
    

    scroll_effect('#testimonial', 1, 'active')
    scroll_effect('#footer', 1, 'active');
    scroll_effect('.footer-menu', 1,  'active')
    scroll_effect('.card__container1', 1,  'active')
    scroll_effect('.card__container2', 1,  'active')
   
})();


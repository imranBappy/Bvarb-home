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

    // footer
    scroll_effect('#footer', 1,  'active')
    scroll_effect('.footer-menu', 1,  'active')

    // index_pages
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

    // crypto-two
    scroll_effect('.deme1', 1,  'active')
    scroll_effect('.deme12', 1,  'active')
    scroll_effect('.deme13', 1,  'active')
    scroll_effect('.deme14', 1,  'active')
    scroll_effect('.deme15', 1,  'active')

    // crypto-currency
    scroll_effect('.deme2', 1,  'active')

    // crypto-sports
    scroll_effect('.deme3', 1,  'active')

    // crypto-three
    scroll_effect('.deme4', 1,  'active')

    // about
    scroll_effect('.section2', 1,  'active')
    scroll_effect('.section3', 1,  'active')
    scroll_effect('.section4', 1,  'active')
    scroll_effect('.about5', 1,  'active')
    scroll_effect('#footer', 1,  'active')

  
    
    

    const loading_animation = (className) =>{
        const element = document.querySelector(className);
        window.addEventListener('load', ()=>{
            element.classList.add('active')
        })
    }
    // about
    loading_animation('.first__section');
    loading_animation('.header__ani');





})();


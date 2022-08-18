const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.modal')
        const modalClose =document.querySelector('.modal-close')
        const modlaContainer = document.querySelector('.modal-container')
        function showBuyTicket(){
            modal.classList.add('open')
        }
        function hideBuyTicket(){
            modal.classList.toggle('open')
        }
        for(const buyBtn of buyBtns){
           buyBtn.addEventListener('click', showBuyTicket)
        }

        modalClose.addEventListener('click', hideBuyTicket)
        modal.addEventListener('click', hideBuyTicket)
        modlaContainer.addEventListener('click',function (event){
            event.stopPropagation()
        })
var header  = document.getElementsByClassName('.header');
// mobile devices
var mobile  = document.getElementsByClassName('.mobile-menu');
mobile.onclick = function() {
    var isclosed = header.clientHeight() === 46;
    if(isclosed){
        header.style.height = 'auto';
    }else{
        header.style.height= null;
    }
}



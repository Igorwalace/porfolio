addEventListener("scroll",function(){
    var header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 350)
})
    $('ul a').click(function(){
        var href = $(this).attr('href')
        var endereco = $(href).offset().top;

        $('html, body').animate({'scrollTop':endereco-130},1000);
        return false;
    })

    $(function(){
        $('.menu').click(function(){
            $('.mobile').slideToggle()
        })
    })

var el = document.getElementById('projeto1')

el.addEventListener('click', ()=>{
    let interno = document.querySelectorAll('.box-cobrir')
    interno[0].style.display = 'block'

    let link2 = document.querySelectorAll('.two')[0]
    link2.addEventListener('click',()=>{
        open('https://jokenpo-igor.netlify.app/')
    })
    
    document.querySelectorAll('.cobrir img')[0]
    .addEventListener('click', ()=>{
        interno[0].style.display = 'none'
    })
})
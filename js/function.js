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

    // projeto
    var el = document.getElementById('projeto1')
    el.addEventListener('click', ()=>{
    var interno = document.querySelectorAll('.box-cobrir')
    interno[0].style.display = 'block'

    let link2 = document.querySelectorAll('.two h1')[0]
    link2.addEventListener('click',()=>{
        open('https://jokenpo-igor.netlify.app/')
    })

    let link3 = document.querySelectorAll('.tree h1')[0]
    link3.addEventListener('click', ()=>{
        let cobriNone = document.querySelectorAll('.cobrir')[0]
        var b1 = document.querySelectorAll('.sobre-blur')[0]
        b1.style.display = 'flex'
        cobriNone.style.display = 'none'

        document.querySelectorAll('.sobre-blur img')[0]
        .addEventListener('click', ()=>{
            b1.style.display = 'none'
            cobriNone.style.display = 'flex'
        })
    })
    
    document.querySelectorAll('.cobrir img')[0]
    .addEventListener('click', ()=>{
        interno[0].style.display = 'none'
    })
})
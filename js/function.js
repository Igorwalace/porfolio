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

    var menu = document.querySelectorAll('header .menu')[0]
    menu.addEventListener('click',()=>{
        let menu1 = document.querySelectorAll('header .mobile')[0]
        let img = document.querySelectorAll('header .menu img')[0]
        if(menu1.classList.contains('show')){
            menu1.classList.remove('show')
            img.src = '../imagens/MENU MOBILE.png'
        }else{
            menu1.classList.add('show')
            setTimeout(()=>{
                img.src = '../imagens/MENU CLOSE.png'
            },100)
        }
    })
    
    // projeto1
    var elP1 = document.getElementById('projeto1')
    elP1.addEventListener('click', ()=>{
    var internoP1 = document.querySelectorAll('.box-cobrir-projeto1')
    internoP1[0].style.display = 'block'

    let linkP1 = document.querySelectorAll('.two h1')[0]
    linkP1.addEventListener('click',()=>{
        open('https://jokenpo-igor.netlify.app/')
    })

    let sobreP1 = document.querySelectorAll('.tree h1')[0]
    sobreP1.addEventListener('click', ()=>{
        let cobriNone = document.querySelectorAll('.cobrir-projeto1')[0]
        var p1 = document.querySelectorAll('.sobre-blur-projeto1')[0]
        p1.style.display = 'flex'
        cobriNone.style.display = 'none'

        document.querySelectorAll('.sobre-blur-projeto1 img')[0]
        .addEventListener('click', ()=>{
            p1.style.display = 'none'
            cobriNone.style.display = 'flex'
        })
    })
    
    document.querySelectorAll('.cobrir-projeto1 img')[0]
    .addEventListener('click', ()=>{
        internoP1[0].style.display = 'none'
    })
})


    // projeto2
    var elP2 = document.getElementById('projeto2')
    elP2.addEventListener('click', ()=>{
    var internoP2 = document.querySelectorAll('.box-cobrir-projeto2')
    internoP2[0].style.display = 'block'

    var linkP2 = document.getElementById('twoH1')
    linkP2.addEventListener('click',()=>{
        open('https://pokedex-igor.netlify.app/')
    })

    let sobreP2 = document.getElementById('treeH1')
    sobreP2.addEventListener('click', ()=>{
        let cobriNoneP2 = document.querySelectorAll('.cobrir-projeto2')[0]
        var p2 = document.querySelectorAll('.sobre-blur-projeto2')[0]
        p2.style.display = 'flex'
        cobriNoneP2.style.display = 'none'

        document.querySelectorAll('.sobre-blur-projeto2 img')[0]
        .addEventListener('click', ()=>{
            p2.style.display = 'none'
            cobriNoneP2.style.display = 'flex'
        })
    })
    
    document.querySelectorAll('.cobrir-projeto2 img')[0]
    .addEventListener('click', ()=>{
        internoP2[0].style.display = 'none'
    })
})

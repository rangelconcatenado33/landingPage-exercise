var primeiraFuncao = function () {
    var cor2 = 'white'
    var cor1 = 'orangered'
    var cor3 = 'black'
    var item1 = window.document.getElementById("option1")

    item1.addEventListener('click', function () {
        
        item1.style.backgroundColor = cor1

        item1.style.color = cor2

    });

    item1.addEventListener('mouseleave', function () {
        
        item1.style.backgroundColor = cor2

        item1.style.color = cor3
    })  
    
    item1.addEventListener('touchend', function () {
        
        item1.style.backgroundColor = cor2

        item1.style.color = cor3
    })  

    var item2 = window.document.getElementById("option2")

    item2.addEventListener('click', function () {
        
        item2.style.backgroundColor = cor1

        item2.style.color = cor2

    });

    item2.addEventListener('mouseleave', function () {
        
        item2.style.backgroundColor = cor2

        item2.style.color = cor3
    })  
    
    item2.addEventListener('touchend', function () {
        
        item2.style.backgroundColor = cor2

        item2.style.color = cor3
    })
    
    var item3 = window.document.getElementById("option3")

    item3.addEventListener('click', function () {
        
        item3.style.backgroundColor = cor1

        item3.style.color = cor2

    });

    item3.addEventListener('mouseleave', function () {
        
        item3.style.backgroundColor = cor2

        item3.style.color = cor3
    })  
    
    item3.addEventListener('touchend', function () {
        
        item3.style.backgroundColor = cor2

        item3.style.color = cor3
    })
    
    var item4 = window.document.getElementById("option4")

    item4.addEventListener('click', function () {
        
        item4.style.backgroundColor = cor1

        item4.style.color = cor2

    });

    item4.addEventListener('mouseleave', function () {
        
        item4.style.backgroundColor = cor2

        item4.style.color = cor3
    })  
    
    item4.addEventListener('touchend', function () {
        
        item4.style.backgroundColor = cor2

        item4.style.color = cor3
    }) 

     var item5 = window.document.getElementById("option5")

    item5.addEventListener('click', function () {
        
        item5.style.backgroundColor = cor1

        item5.style.color = cor2

    });

    item5.addEventListener('mouseleave', function () {
        
        item5.style.backgroundColor = cor2

        item5.style.color = cor3
    })  
    
    item5.addEventListener('touchend', function () {
        
        item5.style.backgroundColor = cor2

        item5.style.color = cor3
    }) 
    
    var botaoSuperior = window.document.getElementById("botaoSuperior")

    botaoSuperior.addEventListener('click', function () {
        
        botaoSuperior.style.color = cor3

    })

    botaoSuperior.addEventListener('mouseleave', function () {
        
        botaoSuperior.style.color = cor2

    });

    botaoSuperior.addEventListener('touchend', function () {
        
        botaoSuperior.style.color = cor2

    })

    var botaoIntermedio = window.document.getElementById('botao');

    botaoIntermedio.addEventListener('click', function () {
        
        botaoIntermedio.style.color = cor2
    })

    botaoIntermedio.addEventListener('mouseleave', function () {
        
        botaoIntermedio.style.color = cor3
    })

    botaoIntermedio.addEventListener('touchend', function () {
        
        botaoIntermedio.style.color = cor3
    });

    var subButton1 = window.document.querySelector('#subButton1');

    subButton1.addEventListener('click', function () {

        subButton1.style.color = cor3
    });

    subButton1.addEventListener('mouseleave', function () {

        subButton1.style.color = cor2
    })

    var subButton2 = window.document.querySelector('#subButton2');

    subButton2.addEventListener('click', function () {

        subButton2.style.color = cor3
    });

    subButton2.addEventListener('mouseleave', function () {

        subButton2.style.color = cor2
    })

    var subButton3 = window.document.querySelector('#subButton3');

    subButton3.addEventListener('click', function () {

        subButton3.style.color = cor3
    });

    subButton3.addEventListener('mouseleave', function () {

        subButton3.style.color = cor2
    })
}

primeiraFuncao()

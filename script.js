
document.addEventListener('DOMContentLoaded', function() {
    const conhecaNelitoButton = document.querySelector('.conheca-nelito');
    const modal = document.querySelector('.modal');

    conhecaNelitoButton.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    const closeModalButton = document.querySelector('.close button');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

class carrossel{
    constructor(cards){
        this.cards = Array.from(cards)
    }

    //Atualizacao os itens do carrossel
    updateCarrossel = ()=>{

        this.cards.forEach((card, index)=>{
            card.classList.remove('card-1')
            card.classList.remove('card-2')
            card.classList.remove('card-3')


    
        })

        this.cards.slice(0,3).forEach((el, i)=>{
            el.classList.add(`card-${i+1}`)


        })
        console.log(this.cards)
    }
    nextCard = ()=>{
        //tira o ultimo item do array e retorna esse ultimo item
        var ultimoCard = this.cards.pop();

        //adiciona o ultimo item no primeiro espaço do array
        this.cards.unshift(ultimoCard);
        this.updateCarrossel()
        this.atualizarTitulo()

    }
    previusCard = ()=>{
        // remove e retorna o primeiro item do array 
        var primeiroCard = this.cards.shift();

        //adiciona no ultimo espaço do array
        this.cards.push(primeiroCard)
        this.updateCarrossel();
        this.atualizarTitulo();

    }
    atualizarTitulo = ()=>{

        var info = document.querySelectorAll(".info-paragraph")
        info.forEach(el=>{
            el.classList.remove("active")
        })
        var meio = Math.floor(this.cards.length/2)
        var identityIndex = this.cards[meio].getAttribute("data-identity");
        
        document.querySelector(`.info-paragraph[data-identity="${identityIndex}"]`).classList.add("active")
    }
}
document.addEventListener("DOMContentLoaded", function(){

    var cards = Array.from(document.querySelectorAll(".card")); 

    var carrosselAtivo = new carrossel(cards);
    
    carrosselAtivo.atualizarTitulo()
    
    var buttonNext = document.getElementById("next");

    var buttonPrevius = document.getElementById("previus");

    buttonNext.addEventListener("click", function(){
        carrosselAtivo.nextCard()
    })

    buttonPrevius.addEventListener("click", function(){
        carrosselAtivo.previusCard()
    })



    
})


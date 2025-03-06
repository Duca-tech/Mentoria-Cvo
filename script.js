var carrossel
var controls
var carrosse_item
var autoresDescricao
document.addEventListener("DOMContentLoaded",function(){
     carrossel = document.querySelector(".carrossel")

     controls = document.querySelector(".containerButtonCarrossel")
    
     carrosse_item = document.querySelectorAll('.containerInicial .carrossel .carrossel-item');
    
     autoresDescricao = document.querySelectorAll(".containerInicial .carrossel .carrossel-item .autoresDescricao");
})



// var carrossel = 


class Carrousel {
    constructor(container, items, controls, desc) {
        this.carouselContainer = container;
        this.carrouselControls = controls
        this.carousselArray = [...items],
        this.desc = [...desc]
    }

    // updateModulo(){
    //     this.carousselArray.forEach(el=>{
    //         el.
    //     })
    // }

    updateGallery() {
        this.carousselArray.forEach(el => {
            el.classList.remove('item-1')
            el.classList.remove('item-2')
            el.classList.remove('item-3')
        })

        this.carousselArray.slice(0, 3).forEach((el, i) => {
            console.log("indice: ", i )
            console.log("el: ", el)
            el.classList.add(`item-${i + 1}`)
            if(i+ 1 == 2){
                let descricao = el.querySelector(".autoresDescricao");
            descricao.style.display = 'block';
            // el.classList.add("hidden")

            descricao.classList.add("visible")
            }
            
        })
    }

    removeDesc(){
        this.desc.forEach(el=>{
            console.log("el desc: ", el)
            el.classList.remove("visible")
            el.classList.add("hidden")

            el.style.display = 'none'
        })
    }

    setCurrentState(direction) {
        this.removeDesc();
        if (direction.className == 'previus') {
            this.carousselArray.unshift(this.carousselArray.pop())
        } else {
            this.carousselArray.push(this.carousselArray.shift())
        }
        this.updateGallery();
    }

    useControl() {
        document.querySelectorAll(".containerButtonCarrossel button").forEach(button => {
            button.addEventListener("click", e => {
                e.preventDefault();
                this.setCurrentState(button);
            })
        })
    }
}
document.addEventListener("DOMContentLoaded", function(){
    console.log(carrosse_item )
    const carrosselAtivo = new Carrousel(carrossel, carrosse_item, controls, autoresDescricao)
    const carrosselModulo = new Carrousel()
    carrosselAtivo.useControl();
})


document.addEventListener('DOMContentLoaded', function () {
    var cards = Array.from(document.querySelectorAll(".card"));
    var modal = document.querySelector(".modal")
    cards.forEach(el => {
        el.addEventListener("click", function () {
            console.log("Card: ", el);
            var attrname = el.getAttribute("data-name");
    
            var div = document.querySelector(".modal");
    
            var img = div.querySelector(".modal-img img");
            if (!img) {
                img = document.createElement("img");
                div.querySelector(".modal-img").appendChild(img);
            }
    
            var Modaltext = div.querySelector(".modal-text");
            Modaltext.innerHTML = ""; // Limpa antes de adicionar novos elementos
    
            var socialMedia = div.querySelector("div.socialMedia-modal");
    
            switch (attrname) {
                case "Nelito":
                    img.setAttribute("src", "img/webp/nelito.webp");
                    img.setAttribute("alt", "Nelito Filho");
    
                    var tituloH1 = document.createElement("h1");
                    tituloH1.textContent = "NELITO FILHO";
                    Modaltext.insertBefore(tituloH1, socialMedia);
    
                    var SubTituloH4 = document.createElement("h4");
                    SubTituloH4.textContent = "ESPECIALISTA EM TRÁFEGO ORGÂNICO";
                    Modaltext.insertBefore(SubTituloH4, socialMedia);
    
                    var TextoP1 = document.createElement("p");
                    TextoP1.textContent = "Sou Nelito Filho, o Professor Nelito! Minha jornada no marketing digital me proporcionou uma transformação completa, alcançando a tão desejada liberdade financeira e geográfica. Ao longo dessa trajetória, construí um negócio sólido, ultrapassando a marca de R$ 100.000 em faturamento. O diferencial? Desenvolvi e refinei estratégias orgânicas altamente eficazes, que me permitiram crescer e prosperar no mundo digital sem depender de recursos no início.";
                    Modaltext.insertBefore(TextoP1, socialMedia);
    
                    var TextoP2 = document.createElement("p");
                    TextoP2.textContent = "Acredito que o marketing digital é uma ferramenta poderosa que deve estar ao alcance de todos. Por isso, me dedico a guiar outros empreendedores em suas jornadas. Seja você um iniciante buscando construir sua base ou um profissional experiente em busca de novas estratégias, ofereço orientação prática, insights valiosos e as ferramentas necessárias para que você alcance seus objetivos e transforme seus projetos em negócios lucrativos.";
                    Modaltext.insertBefore(TextoP2, socialMedia);
                    break;
    
                case "JoaoVitor":
                    img.setAttribute("src", "img/webp/joaovitu.webp");
                    img.setAttribute("alt", "João Vitor");
    
                    var tituloH1 = document.createElement("h1");
                    tituloH1.textContent = "JOÃO VITOR";
                    Modaltext.insertBefore(tituloH1, socialMedia);
    
                    var SubTituloH4 = document.createElement("h4");
                    SubTituloH4.textContent = "EMPRESÁRIO & GESTOR DE TRÁFEGO";
                    Modaltext.insertBefore(SubTituloH4, socialMedia);
    
                    var TextoP1 = document.createElement("p");
                    TextoP1.textContent = "Sou João Vitor, especialista em gestão de tráfego e estratégias de crescimento para empresas. Minha missão é potencializar negócios através de campanhas altamente otimizadas e direcionadas, garantindo o melhor retorno sobre investimento.";
                    Modaltext.insertBefore(TextoP1, socialMedia);
    
                    var TextoP2 = document.createElement("p");
                    TextoP2.textContent = "Com uma vasta experiência no mercado digital, ajudo empreendedores a escalar seus negócios utilizando tráfego pago e estratégias personalizadas. Acredito que cada empresa tem um DNA único e, por isso, desenvolvo soluções sob medida para maximizar seus resultados.";
                    Modaltext.insertBefore(TextoP2, socialMedia);
                    break;
    
                case "Guilherme":
                    img.setAttribute("src", "img/webp/guilherme.webp");
                    img.setAttribute("alt", "Guilherme");
    
                    var tituloH1 = document.createElement("h1");
                    tituloH1.textContent = "GUILHERME";
                    Modaltext.insertBefore(tituloH1, socialMedia);
    
                    var SubTituloH4 = document.createElement("h4");
                    SubTituloH4.textContent = "GESTOR DE EMPRESAS";
                    Modaltext.insertBefore(SubTituloH4, socialMedia);
    
                    var TextoP1 = document.createElement("p");
                    TextoP1.textContent = "Sou Guilherme, gestor de empresas com foco em inovação e crescimento sustentável. Minha paixão é ajudar negócios a atingirem seu máximo potencial, criando estratégias eficazes de gestão e expansão.";
                    Modaltext.insertBefore(TextoP1, socialMedia);
    
                    var TextoP2 = document.createElement("p");
                    TextoP2.textContent = "Com anos de experiência no setor corporativo, auxilio empresas a otimizarem processos, melhorarem a produtividade e aumentarem sua lucratividade. Meu compromisso é transformar desafios em oportunidades e garantir que cada decisão seja baseada em dados e estratégias bem estruturadas.";
                    Modaltext.insertBefore(TextoP2, socialMedia);
                    break;
    
                default:
                    console.log("Nenhum nome correspondente encontrado.");
                    break;
            }
    
            div.style.display = "block";
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

class carrossel {
    constructor(cards) {
        this.cards = Array.from(cards)
    }

    //Atualizacao os itens do carrossel
    updateCarrossel = () => {

        this.cards.forEach((card, index) => {
            card.classList.remove('card-1')
            card.classList.remove('card-2')
            card.classList.remove('card-3')



        })

        this.cards.slice(0, 3).forEach((el, i) => {
            el.classList.add(`card-${i + 1}`)


        })
        console.log(this.cards)
    }
    nextCard = () => {
        //tira o ultimo item do array e retorna esse ultimo item
        var ultimoCard = this.cards.pop();

        //adiciona o ultimo item no primeiro espaço do array
        this.cards.unshift(ultimoCard);
        this.updateCarrossel()
        this.atualizarTitulo()

    }
    previusCard = () => {
        // remove e retorna o primeiro item do array 
        var primeiroCard = this.cards.shift();

        //adiciona no ultimo espaço do array
        this.cards.push(primeiroCard)
        this.updateCarrossel();
        this.atualizarTitulo();

    }
    atualizarTitulo = () => {

        var info = document.querySelectorAll(".info-paragraph")
        info.forEach(el => {
            el.classList.remove("active")
        })
        var meio = Math.floor(this.cards.length / 2)
        var identityIndex = this.cards[meio].getAttribute("data-identity");

        document.querySelector(`.info-paragraph[data-identity="${identityIndex}"]`).classList.add("active")
    }
}
document.addEventListener("DOMContentLoaded", function () {

    var cards = Array.from(document.querySelectorAll(".card"));

    var carrosselAtivo = new carrossel(cards);

    carrosselAtivo.atualizarTitulo()

    var buttonNext = document.getElementById("next");

    var buttonPrevius = document.getElementById("previus");

    buttonNext.addEventListener("click", function () {
        carrosselAtivo.nextCard()
    })

    buttonPrevius.addEventListener("click", function () {
        carrosselAtivo.previusCard()
    })



    document.querySelector("button.fecharModal").addEventListener("click", function(){
        document.querySelector("div.modal").style.display = "none"
    })
    

})


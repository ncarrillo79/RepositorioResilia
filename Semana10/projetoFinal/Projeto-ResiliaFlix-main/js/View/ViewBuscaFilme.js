class ViewBuscaFilme {
    constructor() {
        this.mostra = document.getElementById('navbarToggleExternalContent')
    }
    pequisaFilme(result) {


        //cria tag da div dos filmes
        this.mostra.innerHTML = `<div id="div-p" class="letter-color p-2  pt-3 div-mostra-pesquisa">
        <span class="letter-color" id="img" ></span>
        <div class="letter-color titulo-pesquisa" id="titulo"></div>
    </div>`

        //pegando elemento da API e mostrando na tag criada
        let img = document.getElementById('img')
        let titulo = document.getElementById('titulo')

        if (result.getTitulo() !== undefined) {
            img.innerHTML = ` <a href="#" onclick="controlaImagem.NovoFilme('${result.getTitulo()}')"><img src="${result.getPoster()}" alt="" class="imagem-pesquisa"></a>`
            titulo.innerHTML = ` ${result.getTitulo()}  (${result.getAno()})`
        } else {
            this.mostra.style.display = 'none';
        }
    }

}
class ControllerBuscaFilme {
    constructor() {
        this.mostra = document.getElementById('navbarToggleExternalContent')
        this.nomePesquisa = document.getElementById('filme')
    }

    adiciona() {

        //mostra barra do filme pesquisado
        this.mostra.style.display = 'block';
        let model = new ModelResiliaFlix()
        model.buscarDados(this.nomePesquisa.value)



        let visualiza = new ViewBuscaFilme()
        visualiza.pequisaFilme(model)

    }
    remove() {
        //desmostra barra do filme pesquisado
        this.mostra.style.display = 'none';
        this.nomePesquisa.value = ""

    }




}
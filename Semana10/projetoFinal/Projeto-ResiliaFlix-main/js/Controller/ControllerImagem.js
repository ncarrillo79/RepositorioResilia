class ControllerImagem {

    NovoFilme(nome) {

        let Model = new ModelResiliaFlix();
        Model.buscarDados(nome);

        let visual = new ViewImagem();
        visual.RecebeModelo(Model);
    }
}
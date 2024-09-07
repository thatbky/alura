function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento no console para verificação
  
let campoPesquisa = document.getElementById("campo-pesquisa").value

// se campoPesquisa for uma sting vazia
if(!campoPesquisa){
    // entao, faca...
    section.innerHTML = "<Exemplo:>Campo de pesquisa vazio, tente novamente. Exemplo: 'Impressionismo' </p>"
    return  
}

campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa 
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                // Constrói o HTML para cada item do resultado da pesquisa, usando template literals
            resultados += `
            <div class="item-resultado">
            <h2>${dado.titulo}</h2>
             <p class="descricao-meta">${dado.descricao} </p> 
            
            <p>Para mais informações <a href=${dado.link} target="_blank"> clique aqui</a></p>
            
            <p> Obra de mais famosa:<a href=${dado.img} target="_blank"> Visualizar</a> </p> </div>
        `;
        }
        //entao, faça...
        console.log(dado.titulo.includes(campoPesquisa))
    }

    if(!resultados) {
        resultados = "<p>Nenhum resultado encontrado</p>"
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }








//ABA NOTICIAS 

document.getElementById('carregarMais').addEventListener('click', function() {
    // Novas notícias para adicionar
    const novasNoticias = [
        {
            titulo: "Benfica vence o Sporting com golo de última hora",
            data: "20/02/2025",
            descricao: "O Benfica conquistou uma vitória dramática sobre o Sporting com um golo nos minutos finais, garantindo 3 pontos importantes na luta pelo título.",
            link: "#"
        },
        {
            titulo: "Elogios à jovem promessa João Neves",
            data: "19/02/2025",
            descricao: "João Neves tem sido uma das revelações da temporada, com atuações notáveis no meio-campo, levando os adeptos a acreditar no futuro do clube.",
            link: "#"
        },
        {
            titulo: "Benfica anuncia novos reforços para a próxima temporada",
            data: "18/02/2025",
            descricao: "O Benfica anunciou a contratação de dois jogadores internacionais, com o objetivo de fortalecer a equipa para os desafios da próxima temporada.",
            link: "#"
        }
    ];

    // Selecionar o container onde as notícias serão adicionadas
    const noticiasContainer = document.getElementById('noticias');
    const botaoCarregarMais = document.getElementById('carregarMais');

    // Adicionar as novas notícias ao container
    novasNoticias.forEach(noticia => {
        const divNoticia = document.createElement('div');
        divNoticia.classList.add('noticia');
        
        const h3 = document.createElement('h3');
        h3.textContent = noticia.titulo;
        
        const pData = document.createElement('p');
        pData.classList.add('data');
        pData.textContent = noticia.data;
        
        const pDescricao = document.createElement('p');
        pDescricao.textContent = noticia.descricao;
        
        const a = document.createElement('a');
        a.href = noticia.link;
        a.textContent = "Ler mais...";

        // Organizar os elementos dentro do div
        divNoticia.appendChild(h3);
        divNoticia.appendChild(pData);
        divNoticia.appendChild(pDescricao);
        divNoticia.appendChild(a);
        
        // Adicionar a nova notícia ao container
        noticiasContainer.appendChild(divNoticia);
        noticiasContainer.appendChild(document.createElement('hr'));  // Adicionar um separador <hr>
    });

    // Mover o botão para o final, após as novas notícias
    noticiasContainer.appendChild(botaoCarregarMais);


    // Desabilitar ou esconder o botão para que não apareça mais
    botaoCarregarMais.disabled = true; // Desabilita o botão
    // botaoCarregarMais.style.display = 'none'; // Alternativamente, pode esconder o botão

    console.log("Novas notícias carregadas!");
});

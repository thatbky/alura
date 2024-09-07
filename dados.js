let dados = [
    {
        titulo : "Impressionismo",
        descricao : "O Impressionismo foi um movimento artístico que revolucionou a pintura no século XIX. Os artistas impressionistas se afastaram das técnicas tradicionais e buscaram capturar a realidade de forma mais espontânea e subjetiva, focando principalmente nos efeitos da luz e da cor na natureza",
        link : "https://pt.wikipedia.org/wiki/Impressionismo",
        img : "https://miro.medium.com/v2/resize:fit:1200/1*Q95_AQ2ozF9PD9HWYQudhQ.jpeg",
        tags: "luz natureza cor"
    },

    {
        titulo : "Surrealismo",
        descricao : "O Surrealismo, surgido nas primeiras décadas do século XX, buscava explorar o inconsciente e o mundo dos sonhos. Os artistas surrealistas utilizavam técnicas como a associação livre e a distorção da realidade para criar imagens oníricas e chocantes, desafiando a lógica e a razão.",
        link : "https://pt.wikipedia.org/wiki/Surrealismo",
        img : "https://coletivolirico.com.br/wp-content/uploads/2023/10/the-persistence-of-memory-1931-jpg-halfhd-cke.jpg",
        tags: "surreal imaginativo irreal"
    },

    {
        titulo : "Barroco",
        descricao : "O Barroco, surgido no século XVII, era caracterizado pelo exagero, dramaticidade e emoção. As obras barrocas buscavam o impacto visual e a representação teatral dos temas religiosos, mitológicos e históricos.",
        link : "https://pt.wikipedia.org/wiki/Barroco",
        img : "https://upload.wikimedia.org/wikipedia/commons/a/a3/The_Calling_of_Saint_Matthew_by_Carvaggio.jpg",
        tags: "exagero igrejas drama"
    },

    {
        titulo : "Simbolismo",
        descricao : "O Simbolismo, surgido no final do século XIX, buscava expressar ideias e emoções através de símbolos e sugestões, valorizando a intuição e o subjetivo. Os artistas simbolistas exploravam temas como a morte, o amor, a natureza e o misticismo.",
        link : "https://pt.wikipedia.org/wiki/Simbolismo",
        img : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie7obbvW1rlBrIOYB5t92HlTFJW-9Lx2MY8LOMh-atITHe3ksDpTCzBxgWSmxdfw_6ei4h5GAQMGb8hIIGTXgF65dwdDA1C3-EJ7Ii05MsLj1BAUIDF4OihoAf0-wyGkf0HDkdlkOPhYWQ/s1600/Klimt_the_kiss_1907_8+para+ORKUT.gif",
        tags: "emoções emocoes emoção emocao expressão expressao simbolos"
    },

    {
        titulo : "Renascimento ",
        descricao : "Marcado pelo humanismo, o Renascimento, valorizava a razão e o indivíduo. A Renascença foi um período de grande efervescência cultural, marcado por avanços nas ciências e nas artes, e pela transição da Idade Média para a Idade Moderna. A arte renascentista buscava a representação realista da natureza e da figura humana, com o uso da perspectiva e da anatomia.",
        link : "https://pt.wikipedia.org/wiki/Renascimento",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        tags: "realismo Leonardo daVinci Rafael Michelangelo anatomia razao razão"
    },

    {
        titulo : "Rococó ",
        descricao : "Com um estilo leve e elegante, o Rococó floresceu nas cortes europeias, refletindo o luxo e a vida aristocrática da época, com ênfase em temas amorosos, pastoris e alegorias. A decoração exuberante e a utilização de cores pastel eram características marcantes.",
        link : "https://pt.wikipedia.org/wiki/Rococó",
        img : "https://santhatela.com.br/wp-content/uploads/2017/03/fragonard-balanco-d.jpg",
        tags: "leves clara elegante luxo feliz colorido"
    },

    {
        titulo : "Neoclassicismo ",
        descricao : "O Neoclassicismo surgiu em um contexto de revoluções e mudanças sociais, trazendo o retorno aos ideais da arte clássica, buscando inspiração nos valores da Antiguidade Clássica com valorização da razão, da ordem e da beleza idealizada. As obras neoclássicas eram marcadas pela clareza, pela sobriedade e pela representação de temas históricos e mitológicos.",
        link : "https://pt.wikipedia.org/wiki/Neoclassicismo",
        img : "https://guiadolouvre.com/wp-content/uploads/2021/05/Jacques-Louis_David_Le_Serment_des_Horaces_capa.jpg",
        tags: "revolução revolucao ordem beleza ideal classico clássico clareza temas históricos historicos mitologicos mitológicos"
    },
    {
        titulo : "Romantismo ",
        descricao : "O Romantismo surgiu como uma reação ao racionalismo do Iluminismo e às transformações sociais e políticas da época, trazendo a valorização da emoção, da subjetividade e da individualidade. Os artistas românticos buscavam expressar seus sentimentos e suas visões de mundo, muitas vezes idealizando a natureza e o passado.",
        link : "https://pt.wikipedia.org/wiki/Romantismo ",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/1200px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg",
        tags: "romantico romântico emocao emoção individualidade sentimentos sentimental natureza"
    },
    {
        titulo : "Pós-Impressionismo",
        descricao : "O Pós-Impressionismo abriu caminho para as vanguardas artísticas do século XX, diversas tendências que se desenvolveram a partir do Impressionismo, como o Expressionismo (Van Gogh), o Pontilhismo (Seurat) e o Fauvismo (Matisse). Cada tendência tinha suas próprias características e buscava novas formas de expressão artística.",
        link : "https://pt.wikipedia.org/wiki/Pós-Impressionismo",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        tags: "pos impressionismo pos-impressionismo pós impressionismo pós-impressionismo van gogh Van Gogh expressao expressão"
    },
    {
        titulo : "Cubismo ",
        descricao : "O Cubismo revolucionou a arte, desafiando as noções tradicionais de representação e abrindo caminho para as vanguardas artísticas do século XX, apresentando fragmentação das formas em planos geométricos, múltiplas perspectivas e a busca pela representação simultânea de diferentes pontos de vista.",
        link : "https://pt.wikipedia.org/wiki/Cubismo ",
        img : "https://www.ladykflo.com/wp-content/uploads/2022/05/Les-Demoiselles.jpg",
        tags: "geometricas cubo linhas geométricas picasso pablo braque georges"
    },
    {
        titulo : "Futurismo",
        descricao : "O Futurismo surgiu na Itália e expressava o otimismo e a euforia da industrialização e da urbanização, celebração da velocidade, da tecnologia e da modernidade. Os futuristas buscavam capturar a energia e o dinamismo da vida moderna, utilizando linhas e formas dinâmicas.",
        link : "https://pt.wikipedia.org/wiki/Futurismo",
        img : "https://www.meisterdrucke.pt/kunstwerke/1260px/Umberto_Boccioni_-_Dynamism_of_a_Mans_Head_1914_-_%28MeisterDrucke-773409%29.jpg",
        tags: "futuro euforia velocidade otimismo tecnologia modernidade"
    },
    {
        titulo : "Expressionismo ",
        descricao : "O Expressionismo surgiu em um contexto de crise e incerteza, refletindo as angústias da sociedade moderna, dando ênfase na expressão das emoções e dos sentimentos do artista, com cores vibrantes e pinceladas expressivas. As obras expressionistas transmitem um forte sentimento de angústia e desespero.",
        link : "https://pt.wikipedia.org/wiki/Expressionismo ",
        img : "https://insightinteligencia.com.br/storage/2023/04/o-grito.png",
        tags: "angustia angústia incerteza crise emocao emoção sentimentos cores vibrantes desespero Van Gogh O grito Noite Estrelada"
    },
    {
        titulo : "Dadaísmo ",
        descricao : "O Dadaísmo surgiu como uma resposta à Primeira Guerra Mundial e à destruição causada pelo conflito, a revolta contra os valores tradicionais da arte e da sociedade, utilizando a ironia, a provocação e a aleatoriedade. As obras dadaístas eram muitas vezes absurdas e anti-artísticas.",
        link : "https://pt.wikipedia.org/wiki/Dadaísmo ",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Fontaine-Duchamp.jpg/1200px-Fontaine-Duchamp.jpg",
        tags: "revolta ironia aleatoridade absurdo crítica critica"
    },
    {
        titulo : "Abstracionismo ",
        descricao : "O Abstracionismo se desenvolveu em diversas vertentes, como o Expressionismo abstrato e a Arte Concreta, e influenciou a arte do século XX e XXI. Arte não figurativa, baseada na forma, na cor e na composição. Os artistas abstracionistas buscavam expressar emoções e ideias através de elementos visuais puros.",
        link : "https://pt.wikipedia.org/wiki/Abstracionismo ",
        img : "https://upload.wikimedia.org/wikipedia/commons/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
        tags: "abstrato linhas wassily kandinsky"
    },
    {
        titulo : "Pop Art",
        descricao : "A Pop Art surgiu nos Estados Unidos e na Inglaterra como uma reação ao Expressionismo Abstracto, buscando uma arte mais ligada à vida cotidiana e à cultura popular, utilizando de imagens da cultura popular, como publicidade, quadrinhos e produtos de consumo. A Pop Art celebrava a sociedade de consumo e a cultura de massa.",
        link : "https://pt.wikipedia.org/wiki/Pop_art",
        img : "https://s2-valor.glbimg.com/L8WWEdczfR5aabp9qeKbeGN5cjY=/0x0:666x667/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/y/z/vnhn6ETAe64B7FAwnzWA/o-retrato-shot-stage-blue-marilyn-por-andy-warhol-e-leiloado-na-christies-rep.png",
        tags: "arte cotidiana cultura popular quadrinhos consumo cultura de massa marilyn monroe"
    },
   
];


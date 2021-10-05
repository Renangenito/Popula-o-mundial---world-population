function criaPaises(paises){
    paises.forEach(pais => {

        var img = new Image(); // Image constructor
        img.classList.add("paises-imagens")
        img.src = pais.flags.png;
    
        const principalDiv = document.createElement("div");
        principalDiv.id = "paises";
        principalDiv.classList.add("card-paises")
        const titulo = document.createElement("h1");
        titulo.id = "meuId";
        titulo.classList.add("titulo-card")
        titulo.textContent = pais.name.common;
        const populacao = document.createElement("p")
        populacao.classList.add("populacao-card")
        populacao.textContent = "Population: " + pais.population;
        const regiao = document.createElement("p");
        regiao.classList.add("regiao-card")
        regiao.textContent = "Region: " + pais.region;
        const capital = document.createElement("p");
        capital.classList.add("capital-card")
        capital.textContent = "Capital: " + pais.capital;
    
        principalDiv.appendChild(img)
        principalDiv.appendChild(titulo);
        principalDiv.appendChild(populacao);
        principalDiv.appendChild(regiao);
        principalDiv.appendChild(capital);
    
    
    
        main.appendChild(principalDiv);
        
        
    })
}

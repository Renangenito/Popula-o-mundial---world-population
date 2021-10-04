// const botao = document.querySelector("#botao")

const main = document.querySelector("#menu-principal")


// botao.addEventListener("click", () => {
var xhr = new XMLHttpRequest(); //passo 1
xhr.withCredentials = true;
xhr.open("GET", "https://restcountries.com/v3.1/all") //carregando requisição //passo 2

xhr.addEventListener("load", () => {
	const resposta = xhr.responseText //Resposta da requisição porém está em Json ainda //passo3

	const paises = JSON.parse(resposta) //Convertendo Json para objeto javaScript //passo4
	console.log(paises)
	
		paises.forEach(pais => {

			var img = new Image(); // Image constructor
			img.classList.add("paises-imagens")
			img.src = pais.flags.png;
			
			const principalDiv = document.createElement("div");
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
			principalDiv.id = "paises"


			main.appendChild(principalDiv);
			
			// console.log(principalDiv)
		
		
		
	})			
		
})



xhr.send()










// const botao = document.querySelector("#botao")

const main = document.querySelector("#menu-principal")



var xhr = new XMLHttpRequest(); //passo 1
xhr.withCredentials = true;
xhr.open("GET", "https://restcountries.com/v3.1/all") //carregando requisição //passo 2

xhr.addEventListener("load", () => {
	const resposta = xhr.responseText //Resposta da requisição porém está em Json ainda //passo3

	const paises = JSON.parse(resposta) //Convertendo Json para objeto javaScript //passo4
	console.log(paises)

	criaPaises(paises);


})



xhr.send()


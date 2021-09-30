const botao = document.querySelector("#botao")
botao.addEventListener("click", () => {
    var xhr = new XMLHttpRequest(); //passo 1
    xhr.open("GET", "https://restcountries.com/v2/all") //carregando requisição //passo 2
    
    xhr.addEventListener("load", ()=>{
        const resposta = xhr.responseText //Resposta da requisição porém está em Json ainda //passo3
        
        const paises = JSON.parse(resposta) //Convertendo Json para objeto javaScript //passo4
		let contador = 0;
		paises.forEach(element => {
			
			console.log(element.name) // nome
			console.log(element.flags.svg) //imagem do pais
			console.log(element.capital) //capital
			console.log(element.languages[0].nativeName) //idioma
			contador++;
			console.log(contador)
		});
		
        // console.log(paises);
    })
    
    xhr.send()
    
})


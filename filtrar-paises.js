const campoFiltro = document.querySelector("#filtrar-paises");

		campoFiltro.addEventListener("input", function () {
			console.log(this.value);
			const pacientes = document.querySelectorAll("#paises");

			if (this.value.length > 0) {
				for (let i = 0; i < pacientes.length; i++) {
					const paciente = pacientes[i];
					const tdNome = paciente.querySelector("#meuId");
					const nome = tdNome.textContent;
                    const expressao = new RegExp(this.value, "i"); //Para filtrar qualquer
					if (!expressao.test(nome)) {
						paciente.classList.add("invisivel");
					} else {
						paciente.classList.remove("invisivel");
					}
				}
			} else {
				for (let i = 0; i < pacientes.length; i++) {
					const paciente = pacientes[i];
					paciente.classList.remove("invisivel");
				}
			}
		});
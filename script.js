
	
		const tipoVeiculo = document.getElementById("tipoVeiculo");
		const marcaVeiculo = document.getElementById("marcaVeiculo");
		const modeloVeiculo = document.getElementById("modeloVeiculo");
		const fipeVeiculo = document.getElementById("fipeVeiculo");
		let i="";
		let comissao= document.getElementById("comissao");
		let fipe=50000;
		let fipeTxt=document.getElementById("fipeTxt")
		let diferencaTxt=document.getElementById("diferencaTxt")
		
		const verificaMarca = function(){
			   i= marcaVeiculo.value;
				 if (i=="disabled selected")
					{modeloVeiculo.disabled=true}
  			 else {
        		modeloVeiculo.disabled=false;

				 }}
		

				function carregarModelosAudi() {
					const modelosAudi = ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "TT"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}
					
				
					modelosAudi.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect();
					})};


				function carregarModelosBMW() {
					const modelosBMW = ["Série 1", "Série 2", "Série 3", "Série 4", "Série 5", "Série 6", "Série 7", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4"];

					while (modeloVeiculo.firstChild) {
							modeloVeiculo.removeChild(modeloVeiculo.firstChild);
						}
					
					modelosBMW.forEach((modelo) => {
							const option = document.createElement("option");
							option.value = modelo;
							option.textContent = modelo;
							modeloVeiculo.appendChild(option);
							modeloVeiculoSelect();
						});
					}

				function carregarModelosChevrolet() {
					const modelosChevrolet = ["Onix", "Prisma", "Cruze", "Spin", "Tracker", "S10", "Camaro"];
					while (modeloVeiculo.firstChild) {
							modeloVeiculo.removeChild(modeloVeiculo.firstChild);
						}

					modelosChevrolet.forEach((modelo) => {
						const option = document.createElement("option");
							option.value = modelo;
							option.textContent = modelo;
							modeloVeiculo.appendChild(option);
							modeloVeiculoSelect()
						});
					}

					function carregarModelosFord() {
						const modelosFord = ["Ka", "Fiesta", "Focus", "Fusion", "EcoSport", "Ranger", "Mustang"]; // 
						while (modeloVeiculo.firstChild) {
							modeloVeiculo.removeChild(modeloVeiculo.firstChild);
						}

						modelosFord.forEach((modelo) => {
							const option = document.createElement("option");
							option.value = modelo;
							option.textContent = modelo;
							modeloVeiculo.appendChild(option);
							modeloVeiculoSelect()
						});
					}

					function carregarModelosHonda() {
						const modelosHonda = ["Civic", "City", "Fit", "HR-V", "WR-V", "CR-V", "Accord"];
						while (modeloVeiculo.firstChild) {
							modeloVeiculo.removeChild(modeloVeiculo.firstChild);
						}

						modelosHonda.forEach((modelo) => {
							const option = document.createElement("option");
							option.value = modelo;
							option.textContent = modelo;
							modeloVeiculo.appendChild(option);
							modeloVeiculoSelect()
						});
					}	
					
					function carregarModelosHyundai() {
						const modelosHyundai = ["HB20", "Creta", "i20", "i30", "Tucson", "Santa Fe", "Veloster"]; // 
						while (modeloVeiculo.firstChild) {
							modeloVeiculo.removeChild(modeloVeiculo.firstChild);
						}

						modelosHyundai.forEach((modelo) => {
							const option = document.createElement("option");
							option.value = modelo;
							option.textContent = modelo;
							modeloVeiculo.appendChild(option);
							modeloVeiculoSelect()
						});
					}					

					function carregarModelosMercedes() {
						const modelosMercedes = ["Classe A", "Classe C", "Classe E", "Classe S", "GLA", "GLC", "GLE", "GLS"];
						while (modeloVeiculo.firstChild) {
							modeloVeiculo.removeChild(modeloVeiculo.firstChild);
						}
						modelosMercedes.forEach((modelo) => {
							const option = document.createElement("option");
							option.value = modelo;
							option.textContent = modelo;
							modeloVeiculo.appendChild(option);
							modeloVeiculoSelect()
						});
					}

					function carregarModelosNissan() {
						const modelosNissan = ["March", "Versa", "Sentra", "Kicks", "Maxima", "Altima", "Rogue", "Murano"];
						while (modeloVeiculo.firstChild) {
							modeloVeiculo.removeChild(modeloVeiculo.firstChild);
						}

						modelosNissan.forEach((modelo) => {
							const option = document.createElement("option");
							option.value = modelo;
							option.textContent = modelo;
							modeloVeiculo.appendChild(option);
							modeloVeiculoSelect()
						});
					}

					function carregarModelosToyota() {
						const modelosToyota = ["Corolla", "Camry", "Yaris", "Rav4", "Hilux", "Prius", "C-HR", "Land Cruiser"];
						while (modeloVeiculo.firstChild) {
							modeloVeiculo.removeChild(modeloVeiculo.firstChild);
						}

						modelosToyota.forEach((modelo) => {
							const option = document.createElement("option");
							option.value = modelo;
							option.textContent = modelo;
							modeloVeiculo.appendChild(option);
							modeloVeiculoSelect()
						});
					}

					function carregarModelosVolkswagen() {
					const modelosVolkswagen = ["Gol", "Fox", "Polo", "Virtus", "Jetta", "Golf", "T-Cross", "Tiguan", "Saveiro", "Amarok"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosVolkswagen.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}

				function carregarModelosMotoHonda() {
					const modelosMotoHonda = ["CG", "CB", "XR", "Bros", "Biz", "PCX", "CBR", "NXR", "CRF", "XRE"]; // 
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}
					modelosMotoHonda.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				function carregarModelosYamaha() {
					const modelosYamaha = ["YZF R1", "YZF R6", "MT-07", "MT-09", "Fazer 250", "XTZ 250 Ténéré", "NMax", "MT-03", "YZ 125", "YZ 250"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}
					modelosYamaha.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				function carregarModelosSuzuki() {
					const modelosSuzuki = ["GSX-R1000", "GSX-R750", "V-Strom 650", "Hayabusa", "GSX-S750", "Burgman 400", "SV650", "GSX-S1000", "DR-Z400SM", "RM-Z450"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosSuzuki.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}

				function carregarModelosKawasaki() {
					const modelosKawasaki = ["Ninja 400", "Ninja ZX-6R", "Z900", "Ninja 1000SX", "Versys 650", "Vulcan S", "Z650", "Ninja ZX-10R", "Z1000", "Z H2"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}
					modelosKawasaki.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				function carregarModelosHarleyDavidson() {
					const modelosHarleyDavidson = ["Sportster Iron 883", "Street Bob", "Softail Fat Boy", "Road Glide", "Fat Bob", "CVO Limited", "Street Glide", "Ultra Limited", "Breakout", "Heritage Classic"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosHarleyDavidson.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				function carregarModelosMotoBMW() {
					const modelosMotoBMW = ["S 1000 RR", "R 1250 GS", "F 850 GS", "G 310 GS", "R 1200 GS", "F 900 R", "G 310 R", "K 1600 GT", "S 1000 XR", "F 750 GS"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosMotoBMW.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				function carregarModelosDucati() {
					const modelosDucati = ["Panigale V4", "Monster", "Diavel", "Multistrada", "SuperSport", "Scrambler", "Hypermotard", "Streetfighter"]; // 
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosDucati.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}

				function carregarModelosTriumph() {
					const modelosTriumph = ["Bonneville", "Tiger", "Speed Triple", "Street Triple", "Thruxton", "Scrambler", "Rocket 3", "Daytona"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosTriumph.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}

				function carregarModelosKTM() {
					const modelosKTM = ["Duke", "Adventure", "RC", "SX", "EXC", "Freeride", "Supermoto", "Enduro", "SMC"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosKTM.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}

				function carregarModelosAprilia() {
					const modelosAprilia = ["RSV4", "Tuono", "Dorsoduro", "Shiver", "RX", "SX", "RS", "Caponord", "Mana"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}
					modelosAprilia.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				function carregarModelosVolvo() {
					const modelosVolvo = ["FH", "FM", "FMX", "FE", "FL"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosVolvo.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				function carregarModelosScania() {
					const modelosScania = ["R-Series", "S-Series", "G-Series", "P-Series"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosScania.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				function carregarModelosCaminhaoMercedes() {
					const modelosCaminhaoMercedes = ["Actros", "Arocs", "Atego", "Axor"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosCaminhaoMercedes.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}

				function carregarModelosCaminhaoVolkswagen() {
					const modelosCaminhaoVolkswagen = ["Delivery", "Constellation", "Worker", "Advantage"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosCaminhaoVolkswagen.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
					
				}

				function carregarModelosIveco() {
					const modelosIveco = ["Tector", "Hi-Road", "Hi-Way", "Stralis"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosIveco.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				function carregarModelosCaminhaoFord() {
					const modelosCaminhaoFord = ["Cargo 1119", "Cargo 1319", "Cargo 1519", "Cargo 2429"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosCaminhaoFord.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}

				function carregarModelosDAF() {
					const modelosDAF = ["XF", "CF", "LF"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosDAF.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				function carregarModelosCaminhaoRenault() {
					const modelosCaminhaoRenault = ["D", "C", "K", "T"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosCaminhaoRenault.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				function carregarModelosMAN() {
					const modelosMAN = ["TGX", "TGS", "TGM", "TGL"];
					while (modeloVeiculo.firstChild) {
						modeloVeiculo.removeChild(modeloVeiculo.firstChild);
					}

					modelosMAN.forEach((modelo) => {
						const option = document.createElement("option");
						option.value = modelo;
						option.textContent = modelo;
						modeloVeiculo.appendChild(option);
						modeloVeiculoSelect()
					});
				}
				

						
		function AutoEMarca() {
					verificaMarca();
					modeloVeiculoSelect();

					if (tipoVeiculo.value =="carro" && i=="audi"){
					  carregarModelosAudi();}

					else if (tipoVeiculo.value =="carro" && i == "bmw") {
						carregarModelosBMW();}
					else if (tipoVeiculo.value =="carro" && i == "chevrolet") {
						carregarModelosChevrolet();}
					else if (tipoVeiculo.value =="carro" && i == "ford") {
						carregarModelosFord();}
					else if (tipoVeiculo.value =="carro" && i == "honda") {
						carregarModelosHonda();}

					else if (tipoVeiculo.value =="carro" && i == "honda") {
						carregarModelosHonda();}
					else if (tipoVeiculo.value =="carro" && i == "hyundai") {
						carregarModelosHyundai();}	

					else if (tipoVeiculo.value =="carro" && i == "mercedes") {
						carregarModelosMercedes();}

					else if (tipoVeiculo.value =="carro" && i == "nissan") {
						carregarModelosNissan();}

					else if (tipoVeiculo.value =="carro" && i == "toyota") {
						carregarModelosToyota();}

					else if (tipoVeiculo.value =="carro" && i == "volkswagen") {
						carregarModelosVolkswagen();}

					else if (tipoVeiculo.value =="moto" &&  i == "honda") {
						carregarModelosMotoHonda();}
									
					else if (tipoVeiculo.value =="moto" &&  i == "yamaha") {
						carregarModelosYamaha();}

					else if (tipoVeiculo.value =="moto" &&  i== "suzuki") {
						carregarModelosSuzuki();}

					else if (tipoVeiculo.value =="moto" &&  i == "kawasaki") {
						carregarModelosKawasaki();}

					else if (tipoVeiculo.value =="moto" &&  i == "harley-davidson") {				 
						carregarModelosHarleyDavidson();}

					else if (tipoVeiculo.value =="moto" &&  i == "bmw") {
						carregarModelosMotoBMW();}

					else if (tipoVeiculo.value =="moto" &&  i == "ducati") {
						carregarModelosDucati();}

					else if (tipoVeiculo.value =="moto" &&  i == "triumph") {
						carregarModelosTriumph();}
	
					else if (tipoVeiculo.value =="moto" &&  i == "KTM") {
						carregarModelosKTM();}
	
					else if (tipoVeiculo.value =="moto" &&  i == "aprilia") {				 	    
						carregarModelosAprilia();}
					else if (tipoVeiculo.value =="caminhao" &&  i == "volvo") {				 
						carregarModelosVolvo();}
					else if (tipoVeiculo.value =="caminhao" &&  i == "scania") {				 
						carregarModelosScania();}
					else if (tipoVeiculo.value =="caminhao" &&  i == "mercedes") {				 
						carregarModelosCaminhaoMercedes();}
					else if (tipoVeiculo.value =="caminhao" &&  i == "volkswagen") {				 
						carregarModelosCaminhaoVolkswagen();}
					else if (tipoVeiculo.value =="caminhao" &&  i == "iveco") {				 
						carregarModelosIveco();}
					else if (tipoVeiculo.value =="caminhao" &&  i == "ford") {				 
						carregarModelosCaminhaoFord();}
					else if (tipoVeiculo.value =="caminhao" &&  i == "daf") {				 
						carregarModelosDAF();}
					else if (tipoVeiculo.value =="caminhao" &&  i == "renault") {				 
						carregarModelosCaminhaoRenault();}
					else if (tipoVeiculo.value =="caminhao" && i == "man") {				 	
						carregarModelosMAN();}
	

				else {
					while (modeloVeiculo.firstChild) {
					modeloVeiculo.removeChild(modeloVeiculo.firstChild)
				}
			}}


		function valorVeiculo(){
			let textValue= document.getElementById("textValue");

			let lance = parseFloat(fipeVeiculo.value.replace(/\D/g, '',));
			comissaoLeiloeiro=lance/100 * 0.05
			diferenca=fipe-(lance/100+comissaoLeiloeiro);
			limite=fipe*0.7;
			valorPG=lance/100+comissaoLeiloeiro;
			diferencaPercentual = ((diferenca / fipe) * 100).toFixed(2);

			

			fipeVeiculo.value="R$"+(lance / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
			

      if (isNaN(lance) || fipeVeiculo.value.trim() == '') {
        fipeVeiculo.value = '';}

			if (valorPG<=limite){
			textValue.innerText="O valor do automóvel está barato"
      textValue.style.color="#80b918";
    }
			else if(valorPG>limite){
			textValue.innerText="O valor do automóvel está caro"
      textValue.style.color="red";   
    }
      else{textValue.innerText=
        "O valor do automóvel está: "
        textValue.style.color="#ced4da";
      }
			
			if (!isNaN(lance)) {
				fipeTxt.innerHTML="Fipe do veiculo: <span style='color: #4361ee;'>R$ "+(fipe).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })+"</span>";

				comissao.innerHTML = "Comissão do leiloeiro: <span style='color:#fcefb4'>R$ "+comissaoLeiloeiro.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })+"</span";
				if (diferencaPercentual>=50){
					diferencaTxt.innerHTML = "Diferença da Fipe: R$" + (diferenca).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "<br> Ideal acima de 30%: <span style='color: #0096c7;'>" + diferencaPercentual + "%</span>";
				}
				else if (diferencaPercentual>=30){
					diferencaTxt.innerHTML = "Diferença da Fipe: R$" + (diferenca).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "<br> Ideal acima de 30%: <span style='color:yellow;'>" + diferencaPercentual + "%</span>";
				}
				else{
					diferencaTxt.innerHTML = "Diferença da Fipe: R$" + (diferenca).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "<br> Ideal acima de 30%: <span style='color:red;'>" + diferencaPercentual + "%</span>";
				}
				
			} else {
				comissao.innerText = "Comissão do leiloeiro: R$";
				diferencaTxt.innerText="Diferença da Fipe:"
			}
		}
		
		 function modeloVeiculoSelect(){
			

  var imagemExistente = document.getElementById('imagem-carro');
  if (imagemExistente) {
imagemExistente.parentNode.removeChild(imagemExistente);
}


var imagem = document.createElement('img');
  imagem.width = "400";
	imagem.height= "300";
  imagem.id = "imagem-carro";
  var carro = document.getElementById('carro');
  carro.appendChild(imagem);

if (modeloVeiculo.value!="") {

		fipeVeiculo.value="";
		valorVeiculo();
		if (modeloVeiculo.value=='A1'){
			imagem.src="./Autos_img/a1.png"
			fipe=100000;
		}
		else if (modeloVeiculo.value=='A3'){
			imagem.src="./Autos_img/a3.png"
			fipe=150000;
		}
		else if (modeloVeiculo.value=='A4'){
			imagem.src="./Autos_img/a4.png"
			fipe=150000;
		}
		else if (modeloVeiculo.value=='A5'){
			imagem.src="./Autos_img/a5.png"
			fipe=150000;
		}
		else if (modeloVeiculo.value=='A6'){
			imagem.src="./Autos_img/a6.png"
			fipe=120000;
		}
		else if (modeloVeiculo.value=='A7'){
			imagem.src="./Autos_img/a7.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='A8'){
			imagem.src="./Autos_img/a8.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Q2'){
			imagem.src="./Autos_img/q2.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Q3'){
			imagem.src="./Autos_img/q3.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Q5'){
			imagem.src="./Autos_img/q5.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Q7'){
			imagem.src="./Autos_img/q7.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Q8'){
			imagem.src="./Autos_img/q8.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='TT'){
			imagem.src="./Autos_img/tt.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Série 1'){
			imagem.src="./Autos_img/serie1.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Série 2'){
			imagem.src="./Autos_img/serie2.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Série 3'){
			imagem.src="./Autos_img/serie3.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Série 4'){
			imagem.src="./Autos_img/serie4.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Série 5'){
			imagem.src="./Autos_img/serie5.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Série 6'){
			imagem.src="./Autos_img/serie6.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Série 7'){
			imagem.src="./Autos_img/serie7.png"
			fipe=170000;
		}
	
		else if (modeloVeiculo.value=='X1'){
			imagem.src="./Autos_img/x1.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='X2'){
			imagem.src="./Autos_img/x2.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='X3'){
			imagem.src="./Autos_img/x3.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='X4'){
			imagem.src="./Autos_img/x4.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='X5'){
			imagem.src="./Autos_img/x5.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='X6'){
			imagem.src="./Autos_img/x6.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='X7'){
			imagem.src="./Autos_img/x7.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Z4'){
			imagem.src="./Autos_img/z4.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Onix'){
			imagem.src="./Autos_img/onix.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Prisma'){
			imagem.src="./Autos_img/prisma.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Cruze'){
			imagem.src="./Autos_img/cruze.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Spin'){
			imagem.src="./Autos_img/spin.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Tracker'){
			imagem.src="./Autos_img/tracker.png"
			fipe=170000;
		}
	
		else if (modeloVeiculo.value=='S10'){
			imagem.src="./Autos_img/s10.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Camaro'){
			imagem.src="./Autos_img/camaro.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Ka'){
			imagem.src="./Autos_img/ka.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Fiesta'){
			imagem.src="./Autos_img/fiesta.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Focus'){
			imagem.src="./Autos_img/focus.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Fusion'){
			imagem.src="./Autos_img/fusion.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='EcoSport'){
			imagem.src="./Autos_img/ecosport.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Ranger'){
			imagem.src="./Autos_img/ranger.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Mustang'){
			imagem.src="./Autos_img/mustang.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Civic'){
			imagem.src="./Autos_img/civic.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='City'){
			imagem.src="./Autos_img/city.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Fit'){
			imagem.src="./Autos_img/fit.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='HR-V'){
			imagem.src="./Autos_img/hrv.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='WR-V'){
			imagem.src="./Autos_img/wrv.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='CR-V'){
			imagem.src="./Autos_img/crv.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Accord'){
			imagem.src="./Autos_img/accord.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='HB20'){
			imagem.src="./Autos_img/hb20.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Creta'){
			imagem.src="./Autos_img/creta.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='i20'){
			imagem.src="./Autos_img/i20.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='i30'){
			imagem.src="./Autos_img/i30.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Tucson'){
			imagem.src="./Autos_img/tucson.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Santa Fe'){
			imagem.src="./Autos_img/santafe.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Veloster'){
			imagem.src="./Autos_img/veloster.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Classe A'){
			imagem.src="./Autos_img/classeA.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Classe C'){
			imagem.src="./Autos_img/classeC.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Classe E'){
			imagem.src="./Autos_img/classeE.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Classe S'){
			imagem.src="./Autos_img/classeS.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='GLA'){
			imagem.src="./Autos_img/gla.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='GLC'){
			imagem.src="./Autos_img/glc.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='GLE'){
			imagem.src="./Autos_img/gle.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='GLS'){
			imagem.src="./Autos_img/gls.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='March'){
			imagem.src="./Autos_img/march.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Versa'){
			imagem.src="./Autos_img/versa.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Sentra'){
			imagem.src="./Autos_img/sentra.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Kicks'){
			imagem.src="./Autos_img/kicks.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Maxima'){
			imagem.src="./Autos_img/maxima.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Altima'){
			imagem.src="./Autos_img/altima.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Rogue'){
			imagem.src="./Autos_img/rogue.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Murano'){
			imagem.src="./Autos_img/murano.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Corolla'){
			imagem.src="./Autos_img/corolla.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Camry'){
			imagem.src="./Autos_img/camry.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Yaris'){
			imagem.src="./Autos_img/yaris.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Rav4'){
			imagem.src="./Autos_img/rav4.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Hilux'){
			imagem.src="./Autos_img/hilux.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Prius'){
			imagem.src="./Autos_img/prius.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='C-HR'){
			imagem.src="./Autos_img/chr.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Land Cruiser'){
			imagem.src="./Autos_img/landcruiser.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Gol'){
			imagem.src="./Autos_img/gol.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Fox'){
			imagem.src="./Autos_img/fox.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Polo'){
			imagem.src="./Autos_img/polo.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Virtus'){
			imagem.src="./Autos_img/virtus.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Jetta'){
			imagem.src="./Autos_img/jetta.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Golf'){
			imagem.src="./Autos_img/golf.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='T-Cross'){
			imagem.src="./Autos_img/tcross.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Tiguan'){
			imagem.src="./Autos_img/tiguan.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Saveiro'){
			imagem.src="./Autos_img/saveiro.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Amarok'){
			imagem.src="./Autos_img/amarok.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='CG'){
			imagem.src="./Autos_img/cg.jpg"
			fipe=150000;
		}
		else if (modeloVeiculo.value=='CB'){
			imagem.src="./Autos_img/cb.webp"
			fipe=120000;
		}
		else if (modeloVeiculo.value=='XR'){
			imagem.src="./Autos_img/xr.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Bros'){
			imagem.src="./Autos_img/bros.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Biz'){
			imagem.src="./Autos_img/biz.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='PCX'){
			imagem.src="./Autos_img/pcx.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='CBR'){
			imagem.src="./Autos_img/cbr.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='NXR'){
			imagem.src="./Autos_img/nxr.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='CRF'){
			imagem.src="./Autos_img/crf.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='XRE'){
			imagem.src="./Autos_img/xre.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='YZF R1'){
			imagem.src="./Autos_img/r1.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='YZF R6'){
			imagem.src="./Autos_img/r6.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='MT-07'){
			imagem.src="./Autos_img/mt07.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='MT-09'){
			imagem.src="./Autos_img/mt09.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Fazer 250'){
			imagem.src="./Autos_img/fazer250.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='XTZ 250 Ténéré'){
			imagem.src="./Autos_img/xtz250.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Ténéré'){
			imagem.src="./Autos_img/tenere.jpg"
			fipe=170000;
		}
	
		else if (modeloVeiculo.value=='NMax'){
			imagem.src="./Autos_img/nmax.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='MT-03'){
			imagem.src="./Autos_img/mt03.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='YZ 125'){
			imagem.src="./Autos_img/yz125.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='YZ 250'){
			imagem.src="./Autos_img/yz250.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='GSX-R1000'){
			imagem.src="./Autos_img/gsxr1000.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='GSX-R750'){
			imagem.src="./Autos_img/gsxr750.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='V-Strom 650'){
			imagem.src="./Autos_img/vstrom650.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Hayabusa'){
			imagem.src="./Autos_img/hayabusa.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='GSX-S750'){
			imagem.src="./Autos_img/gsxs750.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Burgman 400'){
			imagem.src="./Autos_img/burgman400.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='SV650'){
			imagem.src="./Autos_img/sv650.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='GSX-S1000'){
			imagem.src="./Autos_img/s1000.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='DR-Z400SM'){
			imagem.src="./Autos_img/z400sm.jpg"
			fipe=170000;
		}
	
		else if (modeloVeiculo.value=='RM-Z450'){
			imagem.src="./Autos_img/rmz450.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Ninja 400'){
			imagem.src="./Autos_img/ninja400.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Ninja ZX-6R'){
			imagem.src="./Autos_img/zx6r.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Z900'){
			imagem.src="./Autos_img/z900.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Ninja 1000SX'){
			imagem.src="./Autos_img/1000sx.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Versys 650'){
			imagem.src="./Autos_img/versys650.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Vulcan S'){
			imagem.src="./Autos_img/vulcanS.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Z650'){
			imagem.src="./Autos_img/z650.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Ninja ZX-10R'){
			imagem.src="./Autos_img/zx10r.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Z1000'){
			imagem.src="./Autos_img/z1000.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Z H2'){
			imagem.src="./Autos_img/zh2.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Sportster Iron 883'){
			imagem.src="./Autos_img/iron883.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Street Bob'){
			imagem.src="./Autos_img/streetbob.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Softail Fat Boy'){
			imagem.src="./Autos_img/fatboy.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Road Glide'){
			imagem.src="./Autos_img/roadglide.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Fat Bob'){
			imagem.src="./Autos_img/fatbob.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='CVO Limited'){
			imagem.src="./Autos_img/CVOlimited.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Street Glide'){
			imagem.src="./Autos_img/Streetglide.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Ultra Limited'){
			imagem.src="./Autos_img/ultraLimited.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Breakout'){
			imagem.src="./Autos_img/breakout.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Heritage Classic'){
			imagem.src="./Autos_img/heritage.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='S 1000 RR'){
			imagem.src="./Autos_img/s1000rr.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='R 1250 GS'){
			imagem.src="./Autos_img/r1250gs.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='F 850 GS'){
			imagem.src="./Autos_img/f850gs.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='G 310 GS'){
			imagem.src="./Autos_img/g310gs.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='R 1200 GS'){
			imagem.src="./Autos_img/r1200gs.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='F 900 R'){
			imagem.src="./Autos_img/f900r.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='G 310 R'){
			imagem.src="./Autos_img/g310r.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='K 1600 GT'){
			imagem.src="./Autos_img/k1600gt.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='S 1000 XR'){
			imagem.src="./Autos_img/s1000xr.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='F 750 GS'){
			imagem.src="./Autos_img/f750gs.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Panigale V4'){
			imagem.src="./Autos_img/panigalev4.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Monster'){
			imagem.src="./Autos_img/monster.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Diavel'){
			imagem.src="./Autos_img/diavel.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Multistrada'){
			imagem.src="./Autos_img/multistrada.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='SuperSport'){
			imagem.src="./Autos_img/Supersport.jpg"
			fipe=170000;
		}
		else if (marcaVeiculo.value=='ducati' && modeloVeiculo.value=='Scrambler'){
			imagem.src="./Autos_img/scramblerDucati.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Hypermotard'){
			imagem.src="./Autos_img/hypermotard.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Streetfighter'){
			imagem.src="./Autos_img/streetfighter.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Bonneville'){
			imagem.src="./Autos_img/bonneville.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Tiger'){
			imagem.src="./Autos_img/tiger.png"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Speed Triple'){
			imagem.src="./Autos_img/speedtriple.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Street Triple'){
			imagem.src="./Autos_img/streettriple.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Thruxton'){
			imagem.src="./Autos_img/thruxton.jpg"
			fipe=170000;
		}
		else if (marcaVeiculo.value=='triumph' && modeloVeiculo.value=='Scrambler'){
			imagem.src="./Autos_img/scramblerTriumph.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Rocket 3'){
			imagem.src="./Autos_img/rocket3.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Daytona'){
			imagem.src="./Autos_img/daytona.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Duke'){
			imagem.src="./Autos_img/duke.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Adventure'){
			imagem.src="./Autos_img/adventure.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='RC'){
			imagem.src="./Autos_img/rc.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='SX'){
			imagem.src="./Autos_img/sx.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='EXC'){
			imagem.src="./Autos_img/exc.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Freeride'){
			imagem.src="./Autos_img/freeride.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Supermoto'){
			imagem.src="./Autos_img/supermoto.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Enduro'){
			imagem.src="./Autos_img/enduro.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='SMC'){
			imagem.src="./Autos_img/smc.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='RSV4'){
			imagem.src="./Autos_img/rsv4.jpeg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Tuono'){
			imagem.src="./Autos_img/tuono.jpg"
			fipe=170000;
		}else if (modeloVeiculo.value=='Dorsoduro'){
			imagem.src="./Autos_img/dorsoduro.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Shiver'){
			imagem.src="./Autos_img/shiver.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='RX'){
			imagem.src="./Autos_img/rx.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='SX'){
			imagem.src="./Autos_img/sx.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='RS'){
			imagem.src="./Autos_img/rs.jpg"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Caponord'){
			imagem.src="./Autos_img/caponord.webp"
			fipe=170000;
		}
		else if (modeloVeiculo.value=='Mana'){
			imagem.src="./Autos_img/mana.jpg"
			fipe=170000;
		}
			else{fipe=50000;}
			fipeTxt.innerHTML="Fipe do veiculo: R$<span style='color: #168aad;'> "+(fipe).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })+"</span>";
		;
}}
		
	tipoVeiculo.addEventListener("change", function() {
	marcaVeiculo.addEventListener("change", AutoEMarca)
	modeloVeiculo.addEventListener("change",modeloVeiculoSelect);
		
		
		if (tipoVeiculo.value == "carro")
		 {
				marcaVeiculo.disabled = false;
				marcaVeiculo.innerHTML = "<option value=''disabled selected>Selecione uma marca</option><option value='audi'>Audi</option><option value='bmw'>BMW</option><option value='chevrolet'>Chevrolet</option><option value='ford'>Ford</option><option value='honda'>Honda</option><option value='hyundai'>Hyundai</option><option value='mercedes'>Mercedes-Benz</option><option value='nissan'>Nissan</option><option value='toyota'>Toyota</option><option value='volkswagen'>Volkswagen</option>";
				modeloVeiculo.innerHTML = "<option value='disabled selected'>Selecione um modelo</option>";			

			} else if (tipoVeiculo.value == "caminhao")
			 {
				marcaVeiculo.disabled = false;
				marcaVeiculo.innerHTML = "<option value=''disabled selected>Selecione uma marca</option><option value='volvo'>Volvo</option><option value='scania'>Scania</option><option value='mercedes'>Mercedes-Benz</option><option value='volkswagen'>Volkswagen</option><option value='iveco'>Iveco</option><option value='ford'>Ford</option><option value='daf'>DAF</option><option value='renault'>Renault</option><option value='man'>MAN</option>";
				modeloVeiculo.innerHTML = "<option value=''disabled selected>Selecione um modelo</option>";
			} else if (tipoVeiculo.value == "moto") {
				marcaVeiculo.disabled = false;
				marcaVeiculo.innerHTML = "<option value=''disabled selected>Selecione uma marca</option><option value='honda'>Honda</option><option value='yamaha'>Yamaha</option><option value='suzuki'>Suzuki</option><option value='kawasaki'>Kawasaki</option><option value='harley-davidson'>Harley-Davidson</option><option value='bmw'>BMW</option><option value='ducati'>Ducati</option><option value='triumph'>Triumph</option><option value='KTM'>KTM</option><option value='aprilia'>Aprilia</option>";
				modeloVeiculo.innerHTML = "<option value=''disabled selected>Selecione um modelo</option>";
			
			}
	  else{
				marcaVeiculo.disabled = true;
				marcaVeiculo.innerHTML = "<option value='' disabled selected>Selecione uma marca</option>";
				modeloVeiculo.disabled = true;
				modeloVeiculo.innerHTML = "<option value=''disabled selected>Selecione um modelo</option>";
				}
				
				
	});
	

function odliczanie()
	{
		let dzisiaj = new Date();
		
		
		let godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;

		let minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;

		let sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
		 
		 setTimeout("odliczanie()",1000);
	}
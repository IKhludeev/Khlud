
		function CheckRad(){
		var count = 0;
			if(document.getElementById('rad1').checked) {
				count+=1;
			}
			if(document.getElementById('rad2.3').checked) {
				count+=1;
			}
			 
			if(document.getElementById('rad3.4').checked) {
				count+=1;
			}
			if(document.getElementById('1check_2').checked && document.getElementById('1check_4').checked && !document.getElementById('1check_1').checked && !document.getElementById('1check_3').checked){
				count+=1;
			}
			if(document.getElementById('2check_1').checked && document.getElementById('2check_2').checked && !document.getElementById('2check_3').checked && !document.getElementById('2check_4').checked){
				count+=1;
			}			
			 alert("Правильных ответов "+count+", и набрали: "+count*20+" процентов");
		}
        document.getElementById('result').onclick = CheckRad;
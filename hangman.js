var password = "Kochane Kłopoty";
password = password.toUpperCase();

var length = password.length;
var miss = 0;

var hidden_password ="";

for(i=0; i<length; i++) {	
	if(password.charAt(i)==" ") {
		hidden_password += " ";		
	}
	else
		hidden_password += "-";
}

function writePassword() {
	document.getElementById("board").innerHTML=hidden_password;
}

window.onload = start;

var letters_tab = new Array(35);
letters_tab[0] = "A";
letters_tab[1] = "Ą";
letters_tab[2] = "B";
letters_tab[3] = "C";
letters_tab[4] = "Ć";
letters_tab[5] = "D";
letters_tab[6] = "E";
letters_tab[7] = "Ę";
letters_tab[8] = "F";
letters_tab[9] = "G";
letters_tab[10] = "H";
letters_tab[11] = "I";
letters_tab[12] = "J";
letters_tab[13] = "K";
letters_tab[14] = "L";
letters_tab[15] = "Ł";
letters_tab[16] = "M";
letters_tab[17] = "N";
letters_tab[18] = "Ń";
letters_tab[19] = "O";
letters_tab[20] = "Ó";
letters_tab[21] = "P";
letters_tab[22] = "Q";
letters_tab[23] = "R";
letters_tab[24] = "S";
letters_tab[25] = "Ś";
letters_tab[26] = "T";
letters_tab[27] = "U";
letters_tab[28] = "V";
letters_tab[29] = "W";
letters_tab[30] = "X";
letters_tab[31] = "Y";
letters_tab[32] = "Z";
letters_tab[33] = "Ź";
letters_tab[34] = "Ż";

function start() {
	var letters = "";
	
	for(i=0; i<35; i++) {
			var element ="lit" + i;
			
			letters += '<div class="letter" onclick="check('+i+')" id="'+element+'">'  + letters_tab[i] + '</div>';
			if( (i+1) % 7==0) {
			 letters += '<div style="clear: both;""></div>';
			}
	}
	
	document.getElementById("alphabet").innerHTML=letters;	
	
	writePassword();
}

String.prototype.changeCharacter = function (place, character) {
	if(place>this.length-1) return this.toString();
	else return this.substring(0, place) + character + this.substring(place+1);
}

function check(nr) {
	
	var trafiona = false;
	
	for(i=0; i<length; i++) {
		if(password.charAt(i)==letters_tab[nr]) {
			hidden_password = hidden_password.changeCharacter(i,letters_tab[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona==true) {
		
		var element ="lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00c000";
		document.getElementById(element).style.border = "3px solid #00c000";
		document.getElementById(element).style.cursor = "default";
		
		writePassword();
	}
	
	else {
		
		var element ="lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#c00000";
		document.getElementById(element).style.border = "3px solid #c00000";
		document.getElementById(element).style.cursor = "default";	
		
		document.getElementById(element).setAttribute("onclick",";");		
		
		miss++;
		var image = "img/s" + miss +".jpg";
		document.getElementById("hangman").innerHTML = '<img src="'+ image +'" alt="image"/>';
		
	}
	
	if(password==hidden_password) {
		document.getElementById("alphabet").innerHTML="Koniec gry. Wygrana! Podano prawidłowe hasło: "+password + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';		
		document.getElementById("alphabet").style.color = "#00c000";		
	}
	
	if(miss>=9) {
		document.getElementById("alphabet").innerHTML="Koniec gry. Przegrana! Prawidłowe hasło:<br>"+password + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';		
		document.getElementById("alphabet").style.color = "#c00000";
	}
}

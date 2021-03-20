

window.onload = function(){ 
var dvoich_n,desetich_n; 
 
function perevod_dvoich(des_chislo){ 
 if(des_chislo<0){ 
  des_chislo = -des_chislo; 
 } 
 var m = []; 
 var kon = des_chislo; 
 for (i = 0; des_chislo!=0; i++) { 
 m.push(des_chislo%2); 
 des_chislo = Math.floor(des_chislo/2);  
 } 
 id('dvo').innerText = kon; 
 for (var i = m.length - 1; i >= 0; i--) { 
   id('dv').append(m[i]); 
 } 
} 
 
 
function id(id){ 
 return document.getElementById(id); 
} 
 
 
 
 
function perevod_deset(dvo){ 
 if(dvo<0){ 
  dvo = -dvo; 
 } 
var dvoich = dvo+" "; 
var kon = dvo; 
var l = dvoich.length-2; 
var new_m = []; 
var new2_m = []; 
var otv = 0; 
 
for (i = l; i >= 0; i--) { 
 new_m.push(parseInt(dvoich[i])); 
} 
for (r = 0; r < new_m.length; r++) { 
 new2_m.push(new_m[r]*Math.pow(2,r)); 
} 
for (y=0;y<new2_m.length;y++) { 
 if(new2_m[y]!=0){ 
 otv+=new2_m[y]; 
 } 
} 
id('des').innerText = kon; 
id('ds').innerText = otv; 
} 
 
 
 
 
id('dvoich').onkeyup = function(){ 
  id('dvo').innerText = ''; 
  id('dv').innerText = ''; 
 
 dvoich_n = id("dvoich").value; 
 
 if(dvoich_n[0] != ""){ 
  perevod_dvoich(dvoich_n); 
 } 
} 
 
id('desetich').onkeyup = function(){ 
  id('des').innerText = ''; 
  id('ds').innerText = ''; 
 
 desetich_n = id("desetich").value; 
 
 
  if(desetich_n[0] != ""){ 
  perevod_deset(desetich_n); 
 } 
} 
 
 
 
}; 
 
 

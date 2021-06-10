
var ugani = 15;




function check(){
    
    var stevilka = document.getElementById("number").value;
    
    if(stevilka == ugani){
        document.getElementById("odgovor").innerHTML = 'Uganil si :-)';
    };
    
    if(stevilka < ugani){
        document.getElementById("odgovor").innerHTML = 'premajhna';
    };

    if(stevilka > ugani){
        document.getElementById("odgovor").innerHTML = 'prevelika';
    };
}

document.getElementById("gumb1").addEventListener("click",check);
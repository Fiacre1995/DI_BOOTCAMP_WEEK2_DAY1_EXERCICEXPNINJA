/*Exercice 1*/

5 >= 1
//true
0 === 1
//false
4 <= 1
//true
1 != 1
//false
"A" > "B"
//false
"B" < "C"
//true
"a" > "A"
//false
"b" < "A"
//false
true === false
//false
true != true
//false 

/*Exercice 2*/

let nbr1 = prompt('Entrer Nombre 1');
let nbr2 = prompt('Entrer Nombre 2');
let nbr3 = prompt('Entrer Nombre 3');
let nbr4 = prompt('Entrer Nombre 4');
let nbr5 = prompt('Entrer Nombre 5');
nbr1=parseInt(nbr1);
nbr2=parseInt(nbr2);
nbr3=parseInt(nbr3);
nbr4=parseInt(nbr4);
nbr5=parseInt(nbr5);
alert(`${nbr1},${nbr2},${nbr3},${nbr4},${nbr5} `); 
let Somme = nbr1+nbr2+nbr3+nbr4+nbr5;
console.log(Somme);

/*Exercice 3*/

let phrase = prompt('Entrer une phrase contenant Nemo');
search = phrase.indexOf("Nemo")
if(search !== -1){
    console.log(search);
}else{
    console.log("Je ne trouve pas Nemo");
}


/*Exercice 4*/

let nbr = prompt('Entrer un nombre');
"Boum";
if (nbr < 2){
    console.log("Boum");
}else if( nbr > 2){
    console.log("boooum");
}else if(nbr%2 ==0){
    console.log("Boum!");
}else if(nbr%5 ==0){
    console.log("boum".toUpperCase);
}else{
    console.log("Boum!".toUpperCase);
}
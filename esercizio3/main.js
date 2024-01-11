/**
 * 3) Scaricare da qui
(https://github.com/napolux/paroleitaliane/blob/master/paroleitaliane/660000_parole_italiane.txt) un file
contenente un vocabolario di 60 mila parole italiane. Nella cartella del progetto inserire il file scaricato.
Scrivere un programma che
- carica il vocabolario
- chiede all'utente di inserire una parola
- mostra tutte le rime di quella parola.
Esempio:
prompt> node cercarime.js
Inserisci la parola:rosa
trovate 1092:
[abbominosa, abominosa, acciaccosa, ...
 */

const fs= require("fs");


const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Funzione eseguita nel caso in cui la condizione di verifica è uguale a true
 * @param {*} parola 
 * @param {*} data 
 */
const trueFunction = (parola, data) =>{
    parola = parola.substring(parola.length-3);
    data = data.filter(par =>{
        return parola.length >= 3 && par.substring(par.length-3) == parola;
    });
    setDataShow(data);
}

/**
 * Funzione per visualizzare in console i dati
 * @param {*} data 
 */
const setDataShow = (data) =>{
    if(data.length > 0){
        console.log("Trovate: " + data.length);
        console.log(data);
    }else console.log("Trovate: 0");
}
/**
 * Funzione eseguita nel caso in cui la condizione di verifica è uguale a false
 * @returns 
 */
const falseFunction = () => console.log("Errore: parola non valida, deve essere formata da almeno tre caratteri !");

//-->       main
fs.readFile("660000_parole_italiane.txt", (error, data) => {
    if (error) 
        throw error;
    data = data.toString().split("\n");
    readline.question("Inserisci una parola per trovare le rime: \n", parola => {
        (parola.length >= 3) ? trueFunction(parola,data) : falseFunction();
        readline.close();
    });
});
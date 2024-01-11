/**
 * 1) Scrivere un programma che chiede all&#39;utente una chiave ed un valore, e li salva in cache remota.
 */

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
import fetch from 'node-fetch';
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const fs = require('fs');
const json = JSON.parse(fs.readFileSync("conf.json"));
const token = json.token;

/**
 * Funzione per fare la fetch di tipo post per salvare i dati su servizio remoto
 * @param {*} key 
 * @param {*} value 
 */
const salvaDati = (key,value) =>{
    fetch("https://ws.progettimolinari.it/cache/set",{
        method: "POST",
        header: {
            "content-type": "application/json",
            key: token
        },
        body: JSON.stringify({
            key: key,
            value: JSON.stringify(value)
        })
    })
    .then(message => console.log(message))
    .catch(error => console.error(error));
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});


//-->       main
readline.question("Inserisci la chiave di salvataggio: \n", key => {
    readline.question("Inserisci il valore: \n", value=>{
        salvaDati(key,value);
        readline.close();
    });
});
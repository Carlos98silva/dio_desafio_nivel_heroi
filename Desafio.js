let nomeHeroi = "teste"                //Insira aqui o nome do seu Herói em string
let xp = 1526                           //insira aqui o valor de xp em número inteiro

if (xp < 1000){
    xp = "Ferro";
}
    else if (xp >= 1001 && xp <= 2000){
        xp = "Bronze"
}
    else if (xp >= 2001 && xp <= 5000){
        xp = "Prata"
}
    else if (xp >= 5001 && xp <= 7000){
        xp = "Ouro"
}
    else if (xp >= 7001 && xp <= 8000){
        xp = "Platina"
}
    else if (xp >= 8001 && xp <= 9000){
        xp = "Ascedente"
}
    else if (xp >= 9001 && xp <= 10000){
        xp = "Imortal"
}
    else if(xp > 10001){
        xp = "Radiante"
}


//Saída

console.log("O Herói de Nome " + nomeHeroi + " está no nível " + xp)
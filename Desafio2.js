//Insira em número inteiro o valor de vitórias e de derrotas respectivamente
let result = calculeNivel(5325, 4766) 


function calculeNivel(victory, defeat){
    let result = victory - defeat 
    return result

}
    if (result < 10){
        ranking = "Ferro";
    }
        else if (result >= 11 && result <= 20){
            ranking = "Bronze"
        }   
        else if (result >= 21 && result <= 50){
            ranking = "Prata"
        }
        else if (result >= 51 && result <= 80){
            ranking = "Ouro"
        }
        else if (result >= 81 && result <= 90){
            ranking = "Diamante"
        }
        else if (result >= 91 && result <= 100){
            ranking = "Lendário"
        }
        else if (result >= 101){
            ranking = "Imortal"
        }

//saída

console.log("O Herói tem de saldo " + result + " pontos e está no nível " + ranking)
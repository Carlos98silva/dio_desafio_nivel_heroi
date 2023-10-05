class hero{
    constructor(nome, idade, tipo){
        this.nome = "Pemaro";
        this.idade = 45;
        this.tipo = ["guerreiro", "mago", "monge", "ninja"];
        this.attack = ["espada", "magia", "artes marciais", "shuriken"];
    }

    escrever(golpe){
        if (golpe >= 0 && golpe < this.tipo.length && golpe < this.attack.length){
            console.log(`O ${this.tipo[golpe]} atacou usando ${this.attack[golpe]}`);
        } else {
            console.log("Classe de personagem não localizada na party");
        }  
    }
}

let atacar = new hero();

atacar.escrever() //Escolha um valor de 0 a 3 para ser o seu personagem nessa aventura.
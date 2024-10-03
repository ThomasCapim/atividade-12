/* Vai ter umas três opções de personagens, uma delas o nerd (informática) (acho que ele vai ser infalível), o aluno de agroin e o aluno de agropec

*/

function Personagem(nome, vida, dano, ouro){
    this.nome = nome;
    this.vida = vida;
    this.dano = dano;
    this.ouro = ouro;
}

// Heróis
do{
    var info_vida = Math.floor(Math.random() * 101);
}while(info_vida < 80);

do{
    var agroin_vida = Math.floor(Math.random() * 101);
}while(agroin_vida < 40);

do{
    var agropec_vida = Math.floor(Math.random() * 101);
}while(agropec_vida < 60);

Personagem("Aluno de Informática", info_vida, info_vida * 1.2, 0);
Personagem("Aluno de Agroindústria", agroin_vida, agroin_vida * 0.8, 100);
Personagem("Aluno de Agropecuária", agropec_vida, agropec_vida, 0);

//Chefões
Personagem("Dinossauro", 300, 15, 100);

//Jogo de fato
function start() {
    alert("Você é um estudante do Instituto e acordou para mais um dia de aul...");
    alert("BANG!!! Você está dentro de um jogo eletrônico ultra desafiador e só você é capaz de se libertar dessa realidade!");

    do{
    let personagem = prompt("Escolha a sua profissão:\n1 - Aluno de Informática\n2 - Aluno de Agroindústria\n3 - Aluno de Agropecuária")

        if (personagem == 1){
            alert("Ótima escolha!");
        }else if (personagem == 2){
            resposta_final = prompt("Você tem certeza? Essa profissão é muito difícil!\n1 - Sim\n2 - Não");
        }else if (personagem == 3){
            resposta_final = prompt("Você tem certeza? Essa profissão não é tão poderosa!\n1 - Sim\n2 - Não");
        }else {
            alert("Escolha uma opção válida, viado!");
        }
    }while(personagem < 1 || personagem > 3);
}

//Início

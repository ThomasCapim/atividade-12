/* Vai ter umas três opções de personagens, uma delas o nerd (informática) (acho que ele vai ser infalível), o aluno de agroin e o aluno de agropec

*/

function Personagem(nome, vida, dano, ouro){
    this.nome = nome;
    this.vida = vida;
    this.dano = dano;
    this.ouro = ouro;
}

do{
    let info_vida = Math.floor(Math.random() * 101);
}while(info_vida < 80);

do{
    let agroin_vida = Math.floor(Math.random() * 101);
}while(agroin_vida < 40);

do{
    let agropec_vida = Math.floor(Math.random() * 101);
}while(agropec_vida < 60);

Personagem("Aluno de Informática", info_vida, info_vida * 1.2, 0);
Personagem("Aluno de Agroindústria", agroin_vida, agroin_vida * 0.8, 100);
Personagem("Aluno de Agropecuária", agropec_vida, agropec_vida, 0);


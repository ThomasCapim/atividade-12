/* Vai ter umas três opções de personagens, uma delas o nerd (informática) (acho que ele vai ser infalível), o aluno de agroin e o aluno de agropec
*/
function start() {
    let info_vida, agroin_vida, agropec_vida, informatica, agroindustria, agropecuaria, dinossauro

    do{
        info_vida = Math.floor(Math.random() * 101);
    }while(info_vida < 80);

    do{
        agroin_vida = Math.floor(Math.random() * 101);
    }while(agroin_vida < 40);

    do{
        agropec_vida = Math.floor(Math.random() * 101);
    }while(agropec_vida < 60);

    function Personagem(nome, vida, dano, ouro){
        this.nome = nome;
        this.vida = vida;
        this.dano = dano;
        this.ouro = ouro;
    }

    // Heróis
    informatica = new Personagem("Aluno de Informática", info_vida, Math.floor(info_vida * 1.2), 0);
    agroindustria = new Personagem("Aluno de Agroindústria", agroin_vida, Math.floor(agroin_vida * 0.7), 100);
    agropecuaria = new Personagem("Aluno de Agropecuária", agropec_vida, Math.floor(agropec_vida * 0.9), 0);
    const personagens = {
        1: informatica,
        2: agroindustria,
        3: agropecuaria
    }
    dinossauro = new Personagem("Dinossauro", 300, 15, 100);

    function batalha(profissao, chefe, opcao){
        let sorte = 0, azar = 0;
        sorte = Math.random();
        azar = Math.random();

        if (opcao == 1){
            if (profissao == 1){
                if (sorte < 0.05){
                    alert(`Você tentou usar o ChatGPT para te dar uma solução eficaz para derrotar ${chefe.nome}...`);
                    alert(`mas ele te deu uma resposta não tão confiável, o que fez você executar um movimento errado e cair em um buraco profundo.`);
                    return personagens[profissao].vida = 0;
                } else if (sorte < 0.36){
                    alert(`Você tentou correr em direção de ${chefe.nome} enquanto executava selos de mão para lançar um ninjutsu aprendido em Boruto.`);
                    alert(`Entretanto, você, por ser ${personagens[profissao].nome}, não saiu do lugar, além de não ter sido capaz de lançar o ninjutstu, já que na vida real isso não existe e, por isso, você nunca teve a oportunidade de treinar suas habilidades antes.`);
                } else if (sorte < 0.95){
                    alert(`Você pensou rapidamente e conectou seu notebook imaginário a uma porta USB escondida atrás de uma pedra.`);
                    alert(`Dessa maneira, você hackeou o código do jogo eletrônico e causou ${personagens[profissao].dano} de dano em ${chefe.nome}.`);
                    if ((chefe.vida - personagens[profissao].dano) <= 0)
                        return chefe.vida = 0;
                    else
                        chefe.vida -= personagens[profissao].dano;
                    /* chefe.vida = (chefe.vida - personagens[profissao].dano) <= 0 ? 0 : (chefe.vida - personagens[profissao].dano); */
                } else {
                    alert(`Você é uma pessoa muito sagaz e teve uma ideia brilhante!`);
                    alert(`Você decidiu usar o comando "taskkill /f /im ${chefe.nome}.exe" no CMD e derrotou o chefe com o apertar de um enter!`);
                    return chefe.vida = 0;
                }
            } else if (profissao == 2){
                if (sorte < 0.1){
                    alert(`Você achou que esperniar e gritar bem alto iria causar algum efeito significativo em ${chefe.nome}...`);
                    alert(`mas como ${chefe.nome} não possui muita sensiblidade ao som, você acabou gritando até morrer.`);
                    return personagens[profissao].vida = 0;
                } else if (sorte < 0.48){
                    alert(`Antes de atacar ${chefe.nome}, você viu que seu iPhone 16 Pro Max decarregou.`);
                    alert(`Então, você não viu outra escolha, senão ir a loja virtual da Apple e comprar outro iPhone 16 Pro Max (passou a vez).`);
                } else if (sorte < 0.95){
                    alert(`Usando todos os seus "conhecimentos" na disciplina de Embalagens e Aditivos, você pegou uma sacola plástica e enforcou ${chefe.nome}.`);
                    alert(`Enquanto ${chefe.nome} agoiava com a sacola, seus conhecimentos na disciplina de Tecnologia em Carnes permitiu que você fizesse cortasse seu corpo e fizesse um hambúrguer de sua carne!`);
                    if ((chefe.vida - personagens[profissao].dano) <= 0)
                        return chefe.vida = 0;
                    else
                        chefe.vida -= personagens[profissao].dano;
                    /* chefe.vida = (chefe.vida - personagens[profissao].dano) <= 0 ? 0 : (chefe.vida - personagens[profissao].dano); */
                } else {
                    alert(`Após uma falha gravíssima em sua aula prática de Tecnologia de Leite, você fez ${chefe.nome} comer um doce de leite estragado!`);
                    alert(`Sem lhe contar a verdade, ${chefe.nome} comeu o doce e sentiu uma forte dor de barriga.`);
                    alert(`Não se sabe se ele morreu ou continua preso no banheiro por conta da diarreia, mas ${chefe.nome} não voltou para a batalha.`)
                    return chefe.vida = 0;
                }
            } else{
                if (sorte < 0.08){
                    alert(`Você tem emoções e impulsos muito aflorados e explosivos, típicos de um aluno de agropecuária.`);
                    alert(`Por tentar atacar por intermédios de seus impulsos de bravura, acabou não pensando em uma estratégia além da força e abriu uma oportunidade para ${chefe.nome} te ludibriar e te matar!`);
                    return personagens[profissao].vida = 0;
                } else if (sorte < 0.42){
                    alert(`Você desafiou ${chefe.nome} para uma partida de truco...`);
                    alert(`mas por ${chefe.nome} não saber jogar truco, o ataque não surtiu efeito.`);
                } else if (sorte < 0.93){
                    alert(`Você já iria atacar, mas seu corpo começou a sentir as "reações" do prato de 5 kg do almoço do IF.`);
                    alert(`As "reações" liberadas espontaneamente continham alta quantidade de enxofre, fazendo ${chefe.nome} se intoxicar pelo cheiro!`);
                    if ((chefe.vida - personagens[profissao].dano) <= 0)
                        return chefe.vida = 0;
                    else
                        chefe.vida -= personagens[profissao].dano;
                    /* chefe.vida = (chefe.vida - personagens[profissao].dano) <= 0 ? 0 : (chefe.vida - personagens[profissao].dano); */
                } else {
                    alert(`Você quis pensar um pouco sobre como atacar de maneira eficaz ${chefe.nome}, mas ao fazer um simples cálculo errôneo da distância entre você e ele, ${chefe.nome} se abismou e morreu de desgosto.`);
                    return chefe.vida = 0;
                }
            }
        } else {
            if (profissao == 1){
                if (sorte <= 0.1){
                    alert(`Você acabou pensando demais na melhor maneira para se defender que abaixou sua guarda para que ${chefe.nome} pudesse te atacar duas vezes...`);
                    alert(`Que bestinha!`);
                    return personagens[profissao].vida = (personagens[profissao].vida - (chefe.dano * 2)) <= 0 ? 0 : (personagens[profissao].vida - (chefe.dano * 2))
                } else if (sorte < 0.3){
                    alert(`Você achou que a melhor maneira para recuar seria ficar exatamente atrás de ${chefe.nome}...`);
                    alert(`... mas enquanto ${chefe.nome} te procurava, ele tropeçou, esbarrou em você e causou ${Math.ceil((chefe.dano /2))} de dano em você!`);
                    return personagens[profissao].vida = (personagens[profissao].vida - (Math.ceil(chefe.dano / 2))) <= 0 ? 0 : (personagens[profissao].vida - (Math.ceil(chefe.dano / 2)))
                } else if (sorte <= 0.9){
                    alert(`Mesmo em perigo, você lembrou que é um jogo eletrônico e resolveu usar trapaças para se teletransportar para longe de ${chefe.nome}!`);
                    return;
                } else {
                    alert(`Você cresceu futricando os arquivos que existiam no computador e achou uma ótima ideia tentar o mesmo nesse jogo eletrônico.`);
                    alert(`Você, então, conectar o seu notebook em uma porta USB escondida atrás de uma pedra e modificar os arquivos salvos do jogo!`);
                    alert(`Você mudou sua posição no jogo e ainda deu 50 pontos de vida a mais para si mesmo.`);
                    return personagens[profissao].vida += 50;
                }
            } else if (profissao == 2){
                if (sorte < 0.1){
                    alert(`Todo mundo já tem um ódio por padrão pela agroindústria e seus alunos, o que não seria diferente com ${chefe.nome}.`);
                    alert(`${chefe.nome} despertou toda sua fúria e atacou-te duas vezes antes mesmo que pudesse pensar em como recuar.`)
                    return personagens[profissao].vida = (personagens[profissao].vida - (chefe.dano * 2)) <= 0 ? 0 : (personagens[profissao].vida - (chefe.dano * 2))
                } else if (sorte < 0.36){
                    alert(`Você olhou o seu Apple Watch e vii que eram 17 horas – a hora do chá!`);
                    alert(`Você com suas tcholices resolveu convidar ${chefe.nome} para tomar um chá de camomila com maracujá que você havia acabado de preparar.`);
                    alert(`Entretanto, o chá estava muito quente, fazendo ${chefe.nome} cuspir todo o chá em você quando foi beber!`);
                    return personagens[profissao].vida = (personagens[profissao].vida - (Math.ceil(chefe.dano / 2))) <= 0 ? 0 : (personagens[profissao].vida - (Math.ceil(chefe.dano / 2)))
                } else if (sorte <= 0.95){
                    alert(`Você não tinha muito o que fazer, além de correr.`);
                    alert(`Você correu pela sua vida e conseguiu evitar um golpe iminente de ${chefe.nome}`);
                    return;
                } else {
                    alert(`Por fora das suas aulas práticas, você resolveu se aperfeiçoar nas suas receitas de poções mágicas.`);
                    alert(`Então, você retira da sua bolsa uma poção que te deixa invisível (usado geralmente para ouvir fofoca) e que também te deu 70 de pontos de vida!`);
                    return personagens[profissao].vida += 70;
                }
            } else{
                if (sorte <= 0.18){
                    alert(`Você tentou intimidar ${chefe.nome} com os truques de faca que você aprendeu na internet.`);
                    alert(`Entretanto, você se desequilibrou com o seu canivete e acabou se cortando e ainda foi atacado por ${chefe.nome} enquanto estava destraído.`);
                    return personagens[profissao].vida = (personagens[profissao].vida - 10 - chefe.dano) <= 0 ? 0 : (personagens[profissao].vida - 10 - chefe.dano);
                } else if (sorte < 0.33){
                    alert(`Você percebeu que perto de você havia o mini trator de Seu Aurélio e viu a oportunidade de usar ele para escapar próximo ataque de ${chefe.nome}.`);
                    alert(`Entretanto, o mini trator de Seu Aurélio anda a, aproximadamente, 20 km/h e mesmo dificultando o ataque de ${chefe.nome}, ele ainda conseguiu te alcançar e causar um pouco de dano (${Math.ceil(chefe.dano / 2)}) em você.`);
                    return personagens[profissao].vida = (personagens[profissao].vida - (Math.ceil(chefe.dano / 2))) <= 0 ? 0 : (personagens[profissao].vida - (Math.ceil(chefe.dano / 2)))
                } else if (sorte < 0.92){;
                    alert(`Mesmo que seja um jogo eletrônico e optou por fugir do ataque de ${chefe.nome}, você viu o ônibus da El Shaday a poucos metros de distância e suas emoções (preguiça) falaram mais alto: "Não vou ver mais aulas, preciso ir embora!"`);
                    alert(`Apesar do calor, bancos sujos e velocidade reduzida, o ônibus pode proporcionar um escudo (carcaça) contra os ataques de ${chefe.nome} e te deixar um pouco distante dele, no primeiro ponto de parada.`);
                    return;
                } else {
                    alert(`Perto de você, haviam várias árvores frutíferas e você não resistiu: teve que comer várias delas!`);
                    alert(`Além disso, a 3 km de distância, você viu o refeitório do IF. Você, então, cortou fila e fez uma montanha de comida no prato.`);
                    alert(`Além de se distanciar de ${chefe.nome}, ainda obteve 90 pontos de vida!`);
                    return personagens[profissao].vida += 90;
                }
            }
        }
        
        if(azar < 0.3){
            alert(`${chefe.nome} até tentou te atacar, mas você começou a gritar estranhamente "T.A.! (T.A.!) MORAL! (MORAL!)", o que deixou ele assustado!`);
        } else{
            alert(`Mesmo sendo um jogo eletrônico, a dor que você sente ainda é real...`);
            (personagens[profissao].vida - chefe.dano) <= 75 ? alert(`... e a percepção de que a morte está próxima também!`) : 0;
            alert(`${chefe.nome} causou ${chefe.dano} de dano em você.`);
            personagens[profissao].vida = (personagens[profissao].vida - chefe.dano) <= 0 ? 0 : (personagens[profissao].vida - chefe.dano);
        }
    }

    // Onde começa o jogo de fato
    let resposta_final, profissao, combate_opcao, duvida, sorte;

    alert("Você é um estudante do Instituto e acordou para mais um dia de aul...");
    alert("BANG!!! Você está dentro de um jogo eletrônico ultra desafiador e só você é capaz de se libertar dessa realidade!");
    alert("Magicamente, aparece uma interface com cantos arrendondados e botões de \"Confirmar\" e \"Cancelar\" na sua frente, dizendo:");

    do{
        profissao = prompt("Escolha a sua profissao:\n1 - Aluno de Informática\n2 - Aluno de Agroindústria\n3 - Aluno de Agropecuária");

        if (profissao == 1){
            alert("Ótima escolha!");
            resposta_final = 1;
        }else if (profissao == 2)
            resposta_final = prompt("Você tem certeza? Essa profissao é muito difícil!\n1 - Sim\n2 - Não");
        else if (profissao == 3)
            resposta_final = prompt("Você tem certeza? Essa profissao é boa, mas não é tão poderosa!\n1 - Sim\n2 - Não");
        else if (profissao == null)
            alert("Não aperta em \"Cancelar\", seu besta!")
        else if (profissao == '')
            alert("Responda alguma coisa, não deixe em branco!");
        else
            alert("Escolha uma opção válida, viado!");
    }while(profissao < 1 || profissao > 3 || resposta_final != 1);

    alert("Bem, você não tem muito o que fazer. O que você faria? Iria fazer uma thread no Twitter? Que pena, o Twitter está banido (até o dia de 05/10/2024)!\n\nObs.: O Twitter voltou... Favor, não cancelar o jogo no Twitter...");

    if (profissao == 1){
        alert("Que bom que você escolheu a melhor profissao para essa situação, porque a única coisa que aluno de informática faz de melhor é jogar o dia inteiro.")
    }else if (profissao == 2){
        alert("O que piora mais ainda a sua situação é essa profissao de \"Aluno de Agroindústria\".");
        alert("Querido(a), seu dinheiro e dancinha do TikTok não funcionarão aqui!");
    } else{
        alert("Pelo menos você tem um canivete em mãos, o que te permite procurar por comida por aí.");
    }
    
    // Primeira batalha
    alert("Mas chega de texto! Você se depara com um dinossauro 🐱‍🐉 faminto!")
    do{
        do{
            combate_opcao = prompt("O que você faria nessa situação... 😳\n" +
                            "Chefe: " + dinossauro.nome + "\n" +
                            "Vida: " + dinossauro.vida + "\n" +
                            "Dano: " + dinossauro.dano + "\n" +
                            "Ouro: " + dinossauro.ouro + "\n\n\n" +

                            "Combatente: " + personagens[profissao].nome + "\n" +
                            "Vida: " + personagens[profissao].vida + "\n" +
                            "Dano: " + personagens[profissao].dano + "\n" +
                            "Ouro: " + personagens[profissao].ouro + "\n\n\n" +

                            "1 - Atacar com toda sua força!\n2 - Recuar furtivamente");
            combate_opcao != 1 && combate_opcao != 2 ? alert("Presta atenção, cara! Escolhe 1 para atacar ou 2 para recuar!!!") : false;
        }while(combate_opcao != 1 && combate_opcao != 2);

        batalha(profissao, dinossauro, combate_opcao);
        alert(`Sua vida final: ${personagens[profissao].vida} – Vida final do chefe: ${dinossauro.vida}`);
    }while(personagens[profissao].vida > 0 && dinossauro.vida > 0);
    
    // Após a primeira batalha
    if (personagens[profissao].vida == 0){
        alert("Você perdeu! KKKK");
        return;
    } else{
        personagens[profissao].ouro += dinossauro.ouro;
        alert("Parabéns! Não fez mais que a obrigação para poder sobreviver.");
        alert("Status atual de " + personagens[profissao].nome + " após a batalha: \n" +
                "Vida: " + personagens[profissao].vida + "\n" +
                "Dano: " + personagens[profissao].dano + "\n" +
                "Ouro: " + personagens[profissao].ouro);
    }
    
    alert(`Bem, após gastar todo o seu conhecimento para enfrentar ${dinossauro.nome}, agora você terá que gastar todo o seu conhecimento para achar uma maneira de sair dessa realidade.`);
    duvida = confirm("Você acha que capaz de realizar tal façanha?\n\n\"Ok\" para \"sim\"\n\"Cancelar\" para \"não\"");

    if (duvida == true){
        if (profissao == 1)
            alert(`É claro que vai! Não é à toa que você é um ${personagens[profissao].nome} que sabe jogar bem e socializar pouco.`);
        else if (profissao == 2)
            alert("A esperança, geralmente, é a última que morre, né... Que bom que você é bastante confiante!");
        else
            alert("Enquanto você der o seu jeitinho para continuar, tudo dará certo!");
    } else {
        if (profissao == 1)
            alert("Não diga isso! 🥺 Você é capaz sim! ❤❤❤");
        else if (profissao == 2)
            alert("Sinceridade eh tudoh!!! <3 *smack* 😘! Parabéns, arrasou manxh <3<3");
        else
            alert(`Mas ${personagens[profissao].nome} não desistem assim com tanta facilidade! Continue em frente.`);
    }

    alert("Enfim, você continuou a sua camiana e encontra um homem baixo e com pouco cabelo. Ele não fala nada, mas dá um sorriso discreto para você.");
    if (profissao == 1)
        alert("Este homem lhe parece familiar, mas você não consegue lembrar quem exatamente.");
    do{
        let mensagem = "de sua bolsa uma poção, que"
        duvida = prompt("O homem retira " + mensagem + " possui uma etiqueta indicando \"50 ouros\", e estende até você.\nComprar?\n1 - Sim\n2 - Não");
        if (duvida == 1 && personagens[profissao].ouro == 100){
            personagens[profissao].ouro -= 50;
            sorte = Math.random();
            if (sorte < 0.5){
                alert("Você compra a poção e sentiu-se um pouco mal. Você enjoou, vomitou toda a poção e ficou fraco, perdendo também 20 de ataque.");
                personagens[profissao].dano -= 20;
            } else {
                alert("Você compra a poção e sentiu um formigamento no corpo, uma alegria que ia da cabeça aos pés. Você recebeu 30 de vida!");
                personagens[profissao].vida += 30;
            }
        } else if (duvida == 1 && personagens[profissao].ouro == 50){
            personagens[profissao].ouro -= 50;
            sorte = Math.random();
            if (sorte < 0.5){
                alert("Você compra a poção e sentiu-se mais mal ainda. Você cuspiu sangue, perdendo 20 de vida.");
                personagens[profissao].vida -= 20;
            } else {
                alert("Você compra a poção e os efeitos dela causaram um estrondo benéfico em seu corpo. Você pulou de alegria e obteve 20 de vida e 20 de dano!");
                personagens[profissao].vida += 20;
                personagens[profissao].dano += 20;
            }
        } else {
            break;
        }
        mensagem = "outra poção de sua bolsa, que também";
    }while(personagens[profissao].ouro >= 50 && personagens[profissao].vida > 0);
    if (personagens[profissao].vida == 0){
        alert("Você morreu com poção desconhecida! KKKK");
        return;
    } else{
        alert("O homem misterioso vai embora rapidamente, sem ter dito uma palavra se quer");
        alert("Status atual de " + personagens[profissao].nome + " após interagir com o homem misterioso: \n" +
                "Vida: " + personagens[profissao].vida + "\n" +
                "Dano: " + personagens[profissao].dano + "\n" +
                "Ouro: " + personagens[profissao].ouro);
    }

    alert("Você andou mais um pouco e encontrou um prédio à distância, mas você pisou em um galho que fez aparecer, misteriosamente, um q");

}

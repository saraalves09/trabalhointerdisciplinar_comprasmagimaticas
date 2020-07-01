//DESAFIO
var pergunta = document.getElementById('perguntaDesafio');
var opcoes = [];
var desafio = [];

desafio[0] = {
    pergunta: 'Tiago foi ao banco pegar 100 reais.Ele queria tudo em notas de 10 reais.Quantas notas Tiago recebeu do caixa?',
    correta: '10 notas',
    opcoes: ['5 notas', '10 notas', '12 notas', '15 notas'],
    doe: '5,00',
    receba: '10,00',
};

desafio[1] = {
    pergunta: 'Aline precisa de 150 reais para pagar suas contas do mercado.Ela queria o valor em notas de 100 reais e de 10 reais.Quantas notas ela precisa para totalizar 150 reais?',
    correta: '1 de R$100 e 5 de R$10',
    opcoes: ['1 de R$100 e 4 de R$10', '1 de R$100 e 5 de R$10', '2 de R$100 e 5 de R$10', '1 de R$100 e 6 de R$10'],
    doe: '5,00',
    receba: '10,00',
};

desafio[2] = {
    pergunta: 'O pacote de bolacha custa 3 reais, Joana tem 12 reais, quantos pacotes de bolacha Joana consegue comprar?',
    correta: '4 pacotes',
    opcoes: ['2 pacotes', '3 pacotes', '4 pacotes', '5 pacotes'],
    doe: '2,00',
    receba: '5,00',
};


desafio[3] = {
    pergunta: 'Carol quer comprar um pacote de macarrão que custa 5 reais, mas ela tem apenas 3 reais.Quantos reais faltam para Carol comrpar o pacote de macarrão?',
    correta: 'R$2,00',
    opcoes: ['R$1,00', 'R$2,00', 'R$3,00', 'R$5,00'],
    doe: '5,00',
    receba: '4,00',
};


desafio[4] = {
    pergunta: 'Daiane precisa comprar chantili para fazer sua cobertura do bolo. O chantili custa 12 reais e Daiane tem 20 reais, quantos reais sobram?',
    correta: 'R$8,00',
    opcoes: ['R$5,00', 'R$6,00', 'R$7,00', 'R$8,00'],
    doe: '8,00',
    receba: '15,00',
};

desafio[5] = {
    pergunta: 'Edite gosta de tomar café, precisa comprar dois pacotes e cada pacote custa 2 reais e 50 centavos.De quantos reais Edite precisa para comprar os dois pacotes de café?',
    correta: 'R$5,00',
    opcoes: ['R$4,50', 'R$5,00', 'R$5,50', 'R$6,00'],
    doe: '6,00',
    receba: '12,00',
};

desafio[6] = {
    pergunta: 'Karolina quer fazer pão de queijo, para a massa precisa de polvilho, que custa 7 reais cada pacote, no total irá precisar de 2 pacotes. Quantos reais Karolina precisa ter para pagar os dois pacotes de polvilho?',
    correta: 'R$14,00',
    opcoes: ['R$10,00', 'R$12,00', 'R$13,00', 'R$14,00'],
    doe: '12,00',
    receba: '10,00',
};

desafio[7] = {
    pergunta: '1 litro de água custa 5 reais, quantos reais irá custar 3 litros?',
    correta: 'R$15,00',
    opcoes: ['R$15,00', 'R$15,50', 'R$20,00', 'R$30,00'],
    doe: '10,00',
    receba: '20,00',
};

desafio[8] = {
    pergunta: 'Gustavo ganhou 50 balas de sua tia, porém tinha que dividir igualmente com seu primo Guto. Com quantas balas Gustavo ficou?',
    correta: '25 balas',
    opcoes: ['15 balas', '20 balas', '25 balas', '26 balas'],
    doe: '5,00',
    receba: '10,00',
};

desafio[9] = {
    pergunta: 'Sabrina precisa comprar um novo chuveiro para sua casa. Foi ao mercado está no valor de 120 reais.Pagou 150 com o dinheiro que tinha, quanto ela recebeu de troco?',
    correta: 'R$30,00',
    opcoes: ['R$10,00', 'R$20,00', 'R$25,00', 'R$30,00'],
    doe: '8,00',
    receba: '12,00',
};

desafio[10] = {
    pergunta: 'Fausto comprou 3 ovos de páscoa. O primeiro no valor de 25 reais, o segundo no valor de 30 reais e o terceiro no valor de 45 reais. Quantos ele gastou no total?',
    correta: 'R$100,00',
    opcoes: ['R$85,00', 'R$90,00', 'R$100,00', 'R$110,00'],
    doe: '8,00',
    receba: '10,00',
};

desafio[11] = {
    pergunta: 'Henrique e seu amigo Caio foram ao mercado fazer a compra do mês. Henrique tinha um valor de 150 reais e Caio 230 para gastar.Quanto eles tinham ao todo?',
    correta: 'R$380,00',
    opcoes: ['R$300,00', 'R$380,00', 'R$390,00', 'R$400,00'],
    doe: '5,00',
    receba: '2,00',
};

desafio[12] = {
    pergunta: 'Roberta comprou 87 limões e ganhou 23 de seu primo. Com quantos limões Roberta ficou?',
    correta: '110',
    opcoes: ['110', '111', '112', '120'],
    doe: '6,00',
    receba: '5,00',
};

desafio[13] = {
    pergunta: 'Sergio foi ao supermercado e comprou 6 maçãs. Se cada maçã custa 2 reais, quanto ele gastou no total?',
    correta: '12',
    opcoes: ['10', '12', '14', '16'],
    doe: '7,00',
    receba: '12,00',
};

desafio[14] = {
    pergunta: 'Jõao foi ao mercado e comprou 8 chocolates, sendo que cada um custa R$2,50. Para pagar, ele deu uma nota de R$50,00. Quanto ele recebeu de troco?',
    correta: 'R$30,00',
    opcoes: ['R$20,00', 'R$29,90', 'R$30,00', 'R$32,00'],
    doe: '2,00',
    receba: '15,00',
};

desafio[15] = {
    pergunta: 'Bruninho foi até o supermercado e comprou dez pacotes de salgadinho, cada um custou R$1,50. Ao passar no caixa ele pagou com uma nota de R$20,00. Qual valor ele recebeu de troco?',
    correta: 'R$5,00',
    opcoes: ['R$5,00', 'R$6,50', 'R$7,50', 'R$8,00'],
    doe: '3,00',
    receba: '5,00',
};

desafio[16] = {
    pergunta: 'A mãe de Julia, pediu para a filha comprar 26 potes de iogurte que custam R$4,50 cada. Porém, Julia só tinha R$100,00 para pagar. Quantos reais faltam para que ela consiga comrpar a quantidade que sua mãe pediu?',
    correta: 'R$17,00',
    opcoes: ['R$15,00', 'R$16,00', 'R$17,00', 'R$18,00'],
    doe: '2,00',
    receba: '5,00',
};

desafio[17] = {
    pergunta: 'Compare o tamanho e o preço dos refrigerantes. Uma garrafa de 2,0 litros custa R$6,00 e uma garrafa de 500ml custam R$4,00. Qual refrigerante é mais vantajoso comprar fincanceiramente?',
    correta: 'O de 2L',
    opcoes: ['O de 2L', 'O de 500ml'],
    doe: '10,00',
    receba: '12,00',
};

desafio[18] = {
    pergunta: 'A promoção de um supermercado dizia que se o cliente comprar um pote de sorvete de 2 litros, com mais 5 reais ele leva o outro de 1 litro. Quantos litros de sorvete o cliente leva pra casa nessa promoção?',
    correta: '3L',
    opcoes: ['2L', '3L', '4L', '5L'],
    doe: '5,00',
    receba: '10,00',
};

desafio[19] = {
    pergunta: 'Pedro, Augusto e José compraram 8 bandeijas de morango. Cada bandeija possui 6 morangos que vão ser divididos em partes iguais. Quantos morangos cada um vai comer?',
    correta: '16',
    opcoes: ['13', '14', '15', '16'],
    doe: '10,00',
    receba: '12,00',
};

desafio[20] = {
    pergunta: 'Sua mãe lhe deu uma lista de produtos para comprar no mercado. Você poderá gastar R$40,00. Mas você viu um chocolate que custa R$6,00. Todos os itens da lista custariam ao todo R$35,00, você teria dinheiro para comprar o chocolate?',
    correta: '0',
    opcoes: ['Sim', 'Não'],
    doe: '15,00',
    receba: '20,00',
};

desafio[21] = {
    pergunta: 'Seu pai pediu para comprar 2 litros de leite. Ele lhe deu uma nota de R$10,00 e deixou você ficar com o troco. Cada caixa de leite de um litro custa R$3,00. Quanto sobrou para gastar?',
    correta: 'R$4,00',
    opcoes: ['R$4,00', 'R$5,00', 'R$6,00', 'R$7,00'],
    doe: '12,00',
    receba: '10,00',
};

desafio[22] = {
    pergunta: 'Pedro leva 45 minutos para chegar ao mercado andando. Quanto tempo ele leva ao todo para ir até o supermercado e voltar para sua casa?',
    correta: '90min',
    opcoes: ['1h', '80min', '90min', '1h40min'],
    doe: '5,00',
    receba: '12,00',
};

desafio[23] = {
    pergunta: 'Joana foi ao supermercado e comprou uma pizza de 26 pedaços. Porém, precisava dividir em pedaços iguais com sua irmã Ana. Quantos pedaços cada uma comeu?',
    correta: '13',
    opcoes: ['13', '14', '15', '16'],
    doe: '6,00',
    receba: '12,00',
};


desafio[25] = {
    pergunta: 'Para fazer uma boneca de sucata é necessário  1 embalagem de iogurte e 22 tampinhas de garrafa pet. Ao todo, quantos materias recicláveis são utilizados?',
    correta: '23',
    opcoes: ['22', '23', '44', '50'],
    doe: '8,00',
    receba: '14,00',
}

desafio[26] = {
    pergunta: 'Para fazer um carrinho de brinquedo é necessário 2 caixas de leite limpas. Para fazer 9 carrinhos, quantas caixas de leite serão necessárias?',
    correta: '18 caixas',
    opcoes: ['2 caixas', '9 caixas', '18 caixas', '20 caixas'],
    doe: '5,00',
    receba: '8,00'
}

desafio[27] = {
    pergunta: 'Igor quer fazer um boliche com materiais recicláveis. Para confecção do jogo é preciso 6 garrafas pets. Igor já tem 2, quantas garrafas faltam para Igor conseguir fazer o boliche?',
    correta: '4 garrafas',
    opcoes: ['2 garrafas', '3 garrafas', '4 garrafas', '5 garrafas'],
    doe: '8,00',
    receba: '12,00'
}


desafio[28] = {
    pergunta: 'Você foi ao mercado e comprou 15 itens e levou 2 sacolas retornaveis, sabendo que cada sacola cabe 6 itens, você conseguirá levar todos os seus itens?',
    correta: 'Não',
    opcoes: ['Sim', 'Não',],
    doe: '5,00',
    receba: '8,00'
}


desafio[29] = {
    pergunta: 'Hellen quer aumentar sua economia, para isso, decidiu juntar as latinhas que tinha em casa e vender para que sejam reutilizadas. Sabendo que cada KG de latinhas rende R$2,50 e Hellen juntou 3KG, quantos reais ela conseguiu juntar?',
    correta: '7,50',
    opcoes: ['R$7,50', 'R$8,50', 'R$9,50', 'R$10,00'],
    doe: '4,00',
    receba: '12,00'
}


desafio[30] = {
    pergunta: 'A turma da professora Isabele está juntando materiais para confeccionar um telefone sem fio, utilizando apenas 2 copos plásticos e barbante. Sabendo que a turma possui 22 alunos, quantos copos plásticos serão necessários?',
    correta: '44 copos',
    opcoes: ['22 copos', '40 copos', '44 copos', '48 copos'],
    doe: '6,00',
    receba: '12,00'
}

desafio[31] = {
    pergunta: 'Para fazer 3 carrinhos de corrida recicláveis, utiliza-se 3 rolos de papel higiênicos. Para fazer apenas um carrinho, são necessários quantos rolos?',
    correta: '1 rolo',
    opcoes: ['2 rolos', '3 rolos', '1 rolo', 'Nenhum'],
    doe: '5,00',
    receba: '8,00'
}

desafio[32] = {
    pergunta: 'Sara quer fazer uma bolsa com materiais reciláveis para presentear sua mãe. É preciso 10 anilhas para decorarção. Sabendo que Sara já possui 30 anilhas, quantas bolsas ela pode fazer?',
    correta: '3 bolsas',
    opcoes: ['3 bolsas', '4 bolsas', '5 bolsas', '6 bolsas'],
    doe: '10,00',
    receba: '15,00'
}

desafio[33] = {
    pergunta: 'João fez um cofrinho utilizando um pote de nescau, sendo que todos os dias depositava nele R$3,00. Em 5 dias, quantos reais terá no cofrinho de João?',
    correta: 'R$15,00',
    opcoes: ['R$3,00', 'R$12,00', 'R$15,00', 'R$20,00'],
    doe: '4,00',
    receba: '8,00'
}

desafio[34] = {
    pergunta: 'Você quer montar um jogo da velha reciclável que utilizirá 1 bandeja de isopor e 10 tampas de garrafas (5 de cada cor). Qual o número de materiais total que você irá utilizar?',
    correta: '11',
    opcoes: ['10', '12', '11', '15'],
    doe: '8,00',
    receba: '12,00'
}

desafio[35] = {
    pergunta: 'Para montar um caminhão reciclável Vinicius utilizará 1 caixa de leite,4 tampas de garrafas e 2 cabos de cotonete, com um total de 7 materiais. Para confeccionar 3 caminhões serão necessários quantos materiais? ',
    correta: '21',
    opcoes: ['14', '21', '20', '19'],
    doe: '5,00',
    receba: '8,00'
}

desafio[36] = {
    pergunta: 'Quanto vale a banana?',
    correta: '10',
    opcoes: ['4', '5', '10', '12'],
    doe: '5,00',
    receba: '8,00',
    foto: '../imagens/charada1.png'
}

desafio[37] = {
    pergunta: 'Quanto vale o peixe amarelo?',
    correta: '3',
    opcoes: ['3', '4', '5', '6'],
    doe: '5,00',
    receba: '8,00',
    foto: '../imagens/charada2.jpg'
}

desafio[38] = {
    pergunta: 'Quanto vale o gato?',
    correta: '4',
    opcoes: ['1', '3', '4', '5'],
    doe: '5,00',
    receba: '8,00',
    foto: '../imagens/charada3.jpg'
}

desafio[40] = {
    pergunta: 'Qual o valor da uva?',
    correta: '12',
    opcoes: ['12', '13', '7', '10'],
    doe: '5,00',
    receba: '8,00',
    foto: '../imagens/charada4.png'
}
desafio[41] = {
    pergunta: 'Quanto vale o girassol?',
    correta: '3',
    opcoes: ['3', '4', '5', '6'],
    doe: '5,00',
    receba: '8,00',
    foto: '../imagens/charada5.png'
}
desafio[42] = {
    pergunta: 'Quanto vale o morango?',
    correta: '20',
    opcoes: ['10', '15', '20', '30'],
    doe: '5,00',
    receba: '8,00',
    foto: '../imagens/charada6.png'
}
desafio[43] = {
    pergunta: 'Quanto vale o hambúrguer?',
    correta: '5',
    opcoes: ['3', '4', '5', '6'],
    doe: '5,00',
    receba: '8,00',
    foto: '../imagens/charada7.png'
}

var clicado = 0;
var coringa;
var embaralhador = 0;
var numeros = [];
var i;
var jogada = 1;
var cont;

document.getElementById('frontDesafio').onmouseenter = function () {
    if ((embaralhador == 43) || (jogada == 1)) {
        for (cont = 0; cont < 44; cont++) {
            numeros[cont] = ' ';
        }
        embaralhador = 0;
        vetorAleatorio();
        jogada = 2;
    }
    i = numeros[embaralhador];
    clicado = 0;

    if ((i == 24) || (i == 39)) {
        coringa = 1;
        Coringa();
    } if ((i > 35) && (i != 39)) {
        coringa = 0;
        Charada();
    } if ((i != 24) && (i != 39) && (i <= 35)) {
        coringa = 0;
        novoDesafio();
    }
}

function vetorAleatorio() {
    var existe, cont2 = 0;
    do {
        do {
            existe = 0;
            var aleatorio = Math.floor(Math.random() * 44);
            for (var cont = 0; cont < cont2; cont++) {
                if (numeros[cont] == aleatorio) {
                    existe = 1;
                }
            }
        } while (existe == 1);
        numeros[cont2] = aleatorio;
        cont2++;
    } while (cont2 != 43);
}

function novoDesafio() {

    //tirando o efeitos
    document.getElementById('backDesafio').classList.remove('estiloCoringa');
    document.getElementById('perguntaDesafio').classList.remove('coringa');
    pergunta.classList.remove('efeitoCorreta');
    pergunta.classList.remove('efeitoIncorreta');
    //mudando o titulo
    document.getElementById('titulo').innerText = 'Desafio';
    //mudando a pergunta
    pergunta.innerText = desafio[i].pergunta;
    //mudando as respostas
    document.getElementById('respostasDesafio').innerHTML = ' ';
    for (i2 = 0; i2 < desafio[i].opcoes.length; i2++) {
        var botaoOpcoes = document.createElement('button');
        botaoOpcoes.className = 'respostasDesafio';
        document.getElementById('respostasDesafio').appendChild(botaoOpcoes);
        botaoOpcoes.appendChild(document.createTextNode(desafio[i].opcoes[i2]));
    }
    recebeResposta();
}

function recebeResposta() {
    var escolhaResposta = [];
    var resposta;
    escolhaResposta[0] = document.getElementsByClassName('respostasDesafio')[0];
    escolhaResposta[0].onclick = function () {
        resposta = 0;
        clicado++;
        verificacaoResposta(resposta, escolhaResposta[0]);
    }

    escolhaResposta[1] = document.getElementsByClassName('respostasDesafio')[1];
    escolhaResposta[1].onclick = function () {
        resposta = 1;
        clicado++;
        verificacaoResposta(resposta, escolhaResposta[1]);
    }

    escolhaResposta[2] = document.getElementsByClassName('respostasDesafio')[2];
    escolhaResposta[2].onclick = function () {
        resposta = 2;
        clicado++;
        verificacaoResposta(resposta, escolhaResposta[2]);
    }

    escolhaResposta[3] = document.getElementsByClassName('respostasDesafio')[3];
    escolhaResposta[3].onclick = function () {
        resposta = 3;
        clicado++;
        verificacaoResposta(resposta, escolhaResposta[3]);

    }


    function verificacaoResposta() {
        if (clicado == 1) {
            if (escolhaResposta[resposta].innerText == desafio[i].correta) {
                pergunta.innerText = 'Resposta correta!';
                pergunta.classList.add('efeitoCorreta');
                conteudo = document.createTextNode(`Receba R$ ${desafio[i].receba}!`);

            } else {
                pergunta.innerText = 'Resposta incorreta!';
                pergunta.classList.add('efeitoIncorreta');
                var doeReceba = document.createElement('p');
                conteudo = document.createTextNode(`Doe R$ ${desafio[i].doe}!`);
            }
            //Doe ou receba:
            var doeReceba = document.createElement('p');
            pergunta.appendChild(doeReceba);
            doeReceba.appendChild(conteudo);
            embaralhador++;
        }

    }
}

function Coringa() {
    var respostas = document.getElementById('respostasDesafio');
    respostas.innerHTML = ' ';
    var titulo = document.getElementById('titulo');
    titulo.innerText = ' ';
    document.getElementById('backDesafio').classList.remove('backDesafio');
    document.getElementById('backDesafio').className = 'estiloCoringa';
    pergunta.innerText = 'CORINGA!';
    document.getElementById('perguntaDesafio').className = 'coringa';
    var doeReceba = document.createElement('p');
    var conteudo = document.createTextNode('Receba R$10,00!');
    pergunta.appendChild(doeReceba);
    doeReceba.appendChild(conteudo);
    document.getElementById('backDesafio').onmouseleave = function () {
        if (coringa == 1) {
            embaralhador++;
        }
    }


}

function Charada() {
    //removendo efeitos
    document.getElementById('backDesafio').classList.remove('estiloCoringa');
    document.getElementById('perguntaDesafio').classList.remove('coringa');
    pergunta.classList.remove('efeitoCorreta');
    pergunta.classList.remove('efeitoIncorreta');
    //mudando as respostas:
    document.getElementById('respostasDesafio').innerHTML = ' ';

    for (var i2 = 0; i2 < desafio[i].opcoes.length; i2++) {
        let botaoOpcoes = document.createElement('button');
        botaoOpcoes.className = 'respostasDesafio';
        document.getElementById('respostasDesafio').appendChild(botaoOpcoes);
        botaoOpcoes.appendChild(document.createTextNode(desafio[i].opcoes[i2]));
    }
    //mudando a pergunta e imagem:
    document.getElementById('titulo').innerText = 'Desafio';
    document.getElementById('perguntaDesafio').innerHTML = ` `;
    document.getElementById('perguntaDesafio').innerHTML = `${desafio[i].pergunta}<br><br><img src="${desafio[i].foto}" width="300px">`
    recebeResposta();
}

//COMPRAS:
var compras = [];

compras[0] = {
    compra: 'loteria',
    contas: ['2 + 5 + 5', '5 + 4 + 2', '10 + 2 + 10'],
    correta: ['12', '11', '22']
}

compras[1] = {
    compra: 'Compra',
    produto: 'Açucar',
    foto: "../imagens/acucar.png",
    preco: 'R$8,00'
}
compras[2] = {
    compra: 'Compra',
    produto: 'Maçã',
    foto: "../imagens/maca.png",
    preco: 'R$5,00'
}
compras[3] = {
    compra: 'Compra',
    produto: 'Banana',
    foto: "../imagens/banana.png",
    preco: 'R$4,00'
}
compras[4] = {
    compra: 'Compra',
    produto: 'Uva',
    foto: "../imagens/uva.png",
    preco: 'R$2,00'
}
compras[5] = {
    compra: 'Compra',
    produto: 'Kiwi',
    foto: "../imagens/kiwi.png",
    preco: 'R$6,00'
}
compras[6] = {
    compra: 'Compra',
    produto: 'Cesta de Fruta',
    foto: "../imagens/cestofrutas.png",
    preco: 'R$15,00'
}
compras[7] = {
    compra: 'Compra',
    produto: 'Ovos',
    foto: "../imagens/ovos.png",
    preco: 'R$7,50'
}
compras[8] = {
    compra: 'Compra',
    produto: 'Pêra',
    foto: "../imagens/pera.png",
    preco: 'R$1,50'
}
compras[9] = {
    compra: 'Compra',
    produto: 'Abacaxi',
    foto: "../imagens/abacaxi.png",
    preco: 'R$3,00'
}
compras[10] = {
    compra: 'Compra',
    produto: 'Iogurte',
    foto: "../imagens/iogurte.png",
    preco: 'R$10,00'
}
compras[11] = {
    compra: 'Compra',
    produto: 'Papel Higienico',
    foto: "../imagens/papelhigienico.png",
    preco: 'R$12,00'
}
compras[12] = {
    compra: 'Compra',
    produto: 'Chocolate Quente',
    foto: "../imagens/chocolatequente.png",
    preco: 'R$10,00'
}
compras[13] = {
    compra: 'Compra',
    produto: 'Iogurte',
    foto: "../imagens/iogurte2.png",
    preco: 'R$3,50'
}
compras[14] = {
    compra: 'Compra',
    produto: 'Bisnaguinha',
    foto: "../imagens/bisnaguinha.png",
    preco: 'R$5,00'
}
compras[15] = {
    compra: 'Compra',
    produto: 'Hambúrguer',
    foto: "../imagens/hamburguer.png",
    preco: 'R$4,50'
}
compras[16] = {
    compra: 'Compra',
    produto: 'Pipoca',
    foto: "../imagens/pipoca.png",
    preco: 'R$2,50'
}
compras[17] = {
    compra: 'Compra',
    produto: 'Água',
    foto: "../imagens/agua.png",
    preco: 'R$1,00'
}
compras[18] = {
    compra: 'Compra',
    produto: 'Sabão',
    foto: "../imagens/omo.png",
    preco: 'R$7,00'
}
compras[19] = {
    compra: 'Compra',
    produto: 'Arroz',
    foto: "../imagens/arroz.png",
    preco: 'R$5,00'
}
compras[20] = {
    compra: 'Compra',
    produto: 'Milho',
    foto: "../imagens/milho.png",
    preco: 'R$6,00'
}
compras[21] = {
    compra: 'Compra',
    produto: 'Suco',
    foto: "../imagens/suco.png",
    preco: 'R$4,00'
}
compras[22] = {
    compra: 'Compra',
    produto: 'Shampoo',
    foto: "../imagens/shampoo.png",
    preco: 'R$5,00'
}

compras[23] = {
    compra: 'Compra',
    produto: 'Café',
    foto: "../imagens/cafe.png",
    preco: 'R$3,00'
}

compras[24] = {
    compra: 'loteria',
    contas: ['3 + 3 + 3', '6 + 20 + 2', '14 + 2 + 2'],
    correta: ['9', '28', '18']
}

compras[25] = {
    compra: 'Compra',
    produto: 'Feijão',
    foto: "../imagens/feijao.png",
    preco: 'R$8,00'
}

compras[26] = {
    compra: 'Compra',
    produto: 'Refrigerante',
    foto: "../imagens/cocacola.png",
    preco: 'R$9,00'
}
compras[27] = {
    compra: 'Compra',
    produto: 'Morango',
    foto: "../imagens/morango.png",
    preco: 'R$2,00'
}
compras[28] = {
    compra: 'Compra',
    produto: 'Abacate',
    foto: "../imagens/abacate.png",
    preco: 'R$3,00'
}
compras[29] = {
    compra: 'Compra',
    produto: 'Chocolate',
    foto: "../imagens/chocolate.png",
    preco: 'R$5,00'
}

compras[30] = {
    compra: 'loteria',
    contas: ['30 + 3 + 5', '8 + 20 + 1', '15 + 7 + 2'],
    correta: ['38', '29', '24']
}

var jogada2 = 1;
var numeros2 = [];
var embaralhador2 = 0;

document.getElementById('frontCompras').onmouseenter = function () {
    if ((jogada2 == 1) || (embaralhador2 == 31)) {
        vetorAleatorio2();
        embaralhador2 = 0;
        jogada2 = 2;
    }
    document.getElementById('produto').innerText = ` `;
    document.getElementById('imagem').innerHTML = ` `
    document.getElementById('preco').innerText = ` `;
    i3 = numeros2[embaralhador2];
    if (compras[i3].compra == 'loteria') {
        loteria();
    } else {
        novaCompra();
    }
}

function novaCompra() {
    document.getElementById('backCompras').classList.remove('dinheiro');
    document.getElementById('backCompras').classList.remove('corretaLoteria');
    document.getElementById('produto').innerHTML = ' ';
    document.getElementById('p1').classList.remove('loteria');
    document.getElementById('p1').innerText = 'Compras';
    document.getElementById('p2').innerText = 'Vamos para as compras? Não se esqueça da sua sacola retornável!'
    document.getElementById('produto').innerText = compras[i3].produto;
    document.getElementById('imagem').innerHTML = `<img src=${compras[i3].foto} class="img" alt="imagem da compra">`
    document.getElementById('preco').innerText = `${compras[i3].preco}`;
    embaralhador2++;
}

function loteria() {
    document.getElementById('backCompras').className = 'dinheiro';
    document.getElementById('p1').innerText = 'Loteria';
    document.getElementById('p1').className = 'loteria';
    document.getElementById('p1').innerText = 'LOTERIA';
    document.getElementById('p2').innerText = 'Você comprou um bilhete da loteria! Siga as dicas e boa sorte!';
    document.getElementById('produto').innerHTML = `<div id="charadas">
    <div id="conta">
     <label class = "charada" for="conta1">${compras[i3].contas[0]}=</label><br><br>
     <label class = "charada" for="conta2">${compras[i3].contas[1]}=</label><br><br>
     <label class = "charada" for="conta3">${compras[i3].contas[2]}=</label><br><br>
    </div>
    <div id="respostaCharada">
     <input class="inputs" id="conta1" placeholder="Digite o resultado" autocomplete="off"><br><br>
     <input class="inputs" id="conta2" placeholder="Digite o resultado" autocomplete="off"><br><br>
     <input class="inputs" id="conta3" placeholder="Digite o resultado" autocomplete="off"><br><br>
    </div>
</div>
    <button id="EnviarCharada">ENVIAR</button>`

    document.getElementById('EnviarCharada').onclick = function () {

        if ((document.getElementsByClassName('inputs')[0].value == compras[i3].correta[0]) && (document.getElementsByClassName('inputs')[1].value == compras[i3].correta[1]) && (document.getElementsByClassName('inputs')[2].value == compras[i3].correta[2])) {
            document.getElementById('backCompras').className = 'corretaLoteria';
            document.getElementById('produto').innerHTML = ' ';
            document.getElementById('produto').innerHTML = '<div id="PatoDonald"><div class="LoteriaFrase"> <p id="grifar">Resposta correta! Parabéns!<br>Receba R$30,00!</p></div> <img src="../imagens/pato.png" id="pato"></div>'
            embaralhador2++;
        } else {
            document.getElementById('produto').innerHTML = ' <p class="incorretaLoteria"> Resposta incorreta!Não foi dessa vez!</p>';
            embaralhador2++;
        }

    }
}

function vetorAleatorio2() {
    var existe = 1;
    var cont2 = 0;
    do {
        do {
            existe = 0;
            var aleatorio = Math.floor(Math.random() * 31);
            for (var cont = 0; cont < cont2; cont++) {
                if (numeros2[cont] == aleatorio) {
                    existe = 1;
                }
            }
        } while (existe == 1);
        numeros2[cont2] = aleatorio;
        cont2++;
    } while (cont2 != 31);
}

let gameSection = document.querySelector("#gameSection");
let div = document.querySelector("#gameBox");

function imgContent (id){

    let imgBox = document.createElement("div");
    imgBox.classList.add(id);
    div.appendChild(imgBox);
}

function removElement () {

    div.innerHTML = "";
}

function restartGame () {
    
    div.innerHTML = "";
    createLayout("Você desdobrou a dobra no tempo & salvou a sua pele de umas situações muito bizarras que poderiam comprometer a sua estabilidade psíquica. Parabéns, VOCÊ VENCEU, mas não se divertiu :P");
    continueButton("Recomeçar o jogo?",startGame);
}

function createLayout (sT, cT) {

    let situationText = document.createElement("p");
    let choiceText = document.createElement("p");

    situationText.classList.add("situationText");
    choiceText.classList.add("choiceText");
    
    situationText.textContent = sT;
    choiceText.textContent = cT;

    div.appendChild(situationText);
    div.appendChild(choiceText);
}

function continueButton (text, phase) {

    let button = document.createElement("button");
        
    button.classList.add("botaoContinuar");
    button.textContent = text;

    div.appendChild(button);
    
    button.addEventListener("click", function () {removElement();});
    button.addEventListener("click", phase);
}

function choiceButton (text1,text2, phase) {

    let buttonOne = document.createElement("button");
    let buttonTwo = document.createElement("button");

    buttonOne.textContent = text1;
    buttonTwo.textContent = text2;

    div.appendChild(buttonOne);
    div.appendChild(buttonTwo);

    buttonOne.classList.add("botaoContinuar");
    buttonTwo.classList.add("botaoContinuar");

    buttonOne.addEventListener("click", function () {removElement();});
    buttonOne.addEventListener("click", phase);

    buttonTwo.addEventListener("click", function() {removElement();});
    buttonTwo.addEventListener("click", restartGame);
    

}


function startGame () {

    createLayout (
        "O despertador toca. Você acorda e ao olhar para o relógio percebe que este marca 05:03:52. Hoje é segunda-feira e pela manhã você deve ir à faculdade, à tarde deve ir trabalhar e à noite deve arrumar a casa, que ficou bagunçada após um estranho fim de semana...",
        "",
        "situationOne"
    );
    continueButton("Continuar...", phOne);
    
}


function phOne () {

    createLayout (
        "",
        "Você tem as seguintes opções: Levantar e começar o dia ou pular todos os compromissos e tirar o dia para descansar."
    );
    choiceButton(
        "Levantar e começar o dia",
        "Dormir mais um pouco",
        afterPhOne
    );
}

function afterPhOne () {

    createLayout(
        "Você escolheu levantar. No entanto, assim que você tenta ficar em pé, percebe que o chão começa a derreter, lentamente, até que você começa a cair num buraco escuro e sem fim.",
        ""
    );
    continueButton("Continuar...", finishOne);
    imgContent("imgPhOne");
    
}

function finishOne () {

    createLayout(
        "Enquanto você cai infinitamente em um buraco escuro e dentro do qual você nada consegue identificar, você vê uma ovelha branca parada em cima de um pedaço de terra, que parece flutuar pelo buraco.",
        ""
    );
    continueButton("Continuar...", phTwo);

}

function phTwo () {
    
    createLayout (
        "",
        "Você pode: continuar caindo e esperar para ver no que isso vai dar ou... agarrar-se na ovelha a fim de interromper a contínua queda."
    );
    choiceButton(
        "Agarrar a ovelha",
        "Continuar caindo infinitamente",
        afterPhTwo
    );
}

function afterPhTwo () {

    createLayout(
        "Quando você se agarra na ovelha, esta instantaneamente some e você é teletransportado para um imenso campo verde sob um céu azulado.",
        ""
    );
    continueButton("Continuar...", finishTwo);

}

function finishTwo () {

    createLayout(
        "O campo parece não ter um fim. Para todos os lados que você olha tem grama e apenas grama, mas você avista ao fundo um casebre vermelho...",
        ""
    );
    continueButton("Continuar...", phThree);

}

function phThree () {

    createLayout (
        "",
        "Você então senta na grama e fica pensando na morte da ovelha ou prefere seguir andando até o casebre vermelho na esperança de lá encontrar respostas para a loucura na qual você está inserido?"
    );
    choiceButton(
        "Andar até o casebre vermelho",
        "Sentar na grama",
        afterPhThree
    );
}

function afterPhThree () {

    createLayout(
        "Chegando ao casebre vermelho, a porta deste se abre sozinha e o ambiente lá dentro parece acolhedor à primeira vista. Você escuta um barulho familiar vindo de dentro e entra para saber do que se trata.",
        ""
    );
    continueButton("Continuar...", finishThree);

}

function finishThree () {
    
    createLayout(
        "Ao entrar no casebre vermelho, a porta deste se fecha com força e você percebe uma mudança no ambiente, que se transforma em uma espécie de laboratório com paredes brancas, frigoríficos, mesas metálicas e tudo o que é tubo de ensaio. Em cima de uma mesa metálica, de jaleco, um gato está em pé de costas para você.",
        ""
    );
    continueButton("Continuar...", phFour);
}

function phFour () {

    createLayout (
        "",
        "Você então irá tentar não fazer muito barulho para não chamar a atenção do gato e vai, de fininho, para um canto do laboratório se esconder ou vai abordar o gato de jaleco?"
    );
    choiceButton(
        "Abordar o gato",
        "Esconder-me",
        afterPhFour
    );
}

function afterPhFour () {

    createLayout(
        "Ao abordar o gato com um mero 'Oi', o gato vira então em sua direção e você percebe que este também usa um óculos. É um cientista. No entanto, ele não entende o que você fala e responde com um 'Rl', que te confunde. Ele te encara.",
        ""
    );
    continueButton("Continuar...", finishFour);
}

function finishFour () {
    
    createLayout(
        "O gato cientista percebe sua confusão e faz menção a uma papelada que está em cima de uma das mesas metálicas próximas a você. Em seguida, ele se vira e retoma sua tarefa inicial.",
        ""
    );
    continueButton("Continuar...", phFive);
}

function phFive () {

    createLayout (
        "",
        "Você então: Tenta abordar novamente o gato, mas dessa vez se aproximando a fim de tocá-lo ou dá uma olhada na papelada que o gato lhe sugere"
    );
    choiceButton(
        "Olhar a papelada",
        "Abordar & tocar no gato",
        afterPhFive
    );
}

function afterPhFive () {

    createLayout(
        "Ao olhar a papelada, você percebe que não está em uma linguagem que você conheça, mas nota no canto da folha tem o desenho de um amuleto redondo o qual tem duas bordas. Ambas, a interna e a externa tem todas as letras do alfabeto de A a Z. No centro do amuleto, está marcado o número 2 em um contador.",
        ""
    );
    continueButton("Continuar...", finishFive);
}

function finishFive () {
    
    createLayout(
        "Você rapidamente se dá conta de que toda a papelada está encriptografada! O gato, então, volta a atenção para você e diz 'Govgofgw ciqtc?'. E, tendo em mente, o 'Rl' que ele havia respondido ao seu 'Oi' antes, você supõe que a chave da criptografia é voltar duas letras antes para cada letra de uma palavra. Logo, 'Rl' = 'Oi' ",
        ""
    );
    continueButton("Continuar...", phSix);
}

function phSix () {

    createLayout (
        "",
        "Você tem as opções de sentar e chorar porque nada disso faz sentido algum ou tentar se comunicar com o gato através do que você acha que é o código"
    );
    choiceButton(
        "Comunicar-me com o gato",
        "Sentar e chorar mesmo...",
        afterPhSix
    );
}

function afterPhSix() {

    createLayout(
        "Você arrisca, então, um 'Uko' (que você supõe significar 'sim') em resposta à pergunta dele. O gato acena com a cabeça e anda em direção a você. Até que, perto o suficiente, ele se transforma no primeiro professor que você teve na vida.",
        ""
    );
    continueButton("Continuar...", finishSix);
}

function finishSix () {
    
    createLayout(
        "Seu professor, então, lhe pega pela mão e contigo passa a caminhar. Ele lhe explica que no mundo há pessoas muito ruins que estão tentando alterar a maneira como as pessoas pensam. Diz que há um experimento social acontecendo no sonho das pessoas e que você devia ter cuidado com as horas, pois o experimento envolve dobras temporais. Ao fim da caminhada, ele lhe coloca na sua cama e diz para você sempre descansar quando preciso, comer seus estranhos e não falar com vegetais." + " Você venceu depois de perder continuamente. Parabéns!",
        ""
    );
    continueButton("Recomeçar?", startGame);
}

startGame();
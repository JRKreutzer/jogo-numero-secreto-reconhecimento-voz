const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    const testePalavra = corrigeNumeros(chute);
    exibeChuteNaTela(testePalavra);
    verificaSeOChutePossuiValorValido(testePalavra);
};

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
};

recognition.addEventListener('end', () => recognition.start());

const numeros = {
    'zero zero': 0,
    '00': 0,
    '01': 1,
    'um': 1,
    'dois': 2,
    'três': 3,
    'quatro': 4,
    'cinco': 5,
    'seis': 6,
    'sete': 7,
    'oito': 8,
    'nove': 9,
    'dez': 10
 }
 
 const corrigeNumeros = (palavra) => {
    for(numero in numeros){
       if(palavra === numero){
          palavra = numeros[numero];   
       }         
    }
    return palavra;
 }
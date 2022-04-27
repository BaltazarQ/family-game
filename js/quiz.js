(function() {

// pole s quizovymi otazkami a odpovedami pre kazdu postavu 
let quiz = [
  
  [quizName = 'katarina',
    {
      question: 'Koľko vysokých škôl má ukončených?',
      answers: {
          a : 'Dva',
          b : 'Štyri',
          c : 'Šesť',
      },
      correctAnswer : 'b',
    },
    {
      question: 'Kde strávila leto pracovne po strednej škole?',
      answers: {
          a : 'Virginia, USA',
          b : 'Katalánsko, Španielsko',
          c : 'Reykjavik, Island',
      },
      correctAnswer : 'a',
    },
    {
      question: 'Na aký hudobný nástroj hrala v mladosti?',
      answers: {
          a : 'Klavír',
          b : 'Akordeón',
          c : 'Gitara',
      },
      correctAnswer : 'c',
    }],
  [ quizName = 'daniela',
    {
      question: 'Ktorú ruku si zlomila v detsve?',
      answers: {
        a: 'Ľavú',
        b: 'Pravú',
        c: 'Žiadnu, zlomila si nohu'
      },
      correctAnswer: 'a',
    },
    {
      question: 'Po kontakte s ktorým zvieraťom mala dlhé opletačky s lekármi?',
      answers : {
          a : 'Pes',
          b : 'Krokodíl',
          c : 'Kliešť',
      },
      correctAnswer : 'c',
    },
    {
      question: 'Na koľkých miestach dlhodobo bývala, kým sa presťahovala do domu',
      answers : {
          a : 'Troch',
          b : 'Štyroch',
          c : 'Piatich',
      },
      correctAnswer : 'b',
    }],
  
  [ quizName = 'stanislav',
    {
      question: 'Kde si zlomil nohu?',
      answers: {
        a: 'Na Kapušanskom hrade',
        b: 'Na svadbe',
        c: 'Na futbale'
      },
      correctAnswer: 'a',
    },
    {
      question: 'Koľko rokov spolu študoval na VŠ?',
      answers : {
          a : 'Päť',
          b : 'Osem',
          c : 'Desať',
      },
      correctAnswer : 'b',
    },
    {
      question: 'Ktorým súrodencom rozbil v detstve hlavu?',
      answers : {
          a : 'Kataríne a Martinovi',
          b : 'Daniele a Márii',
          c : 'Márii a Martinovi',
      },
      correctAnswer : 'c',
    }],

  [ quizName = 'maria',
    {
      question: 'Aké je jej ukončené VŠ vzdelanie?',
      answers: {
        a: 'Masér športového zamerania',
        b: 'Učiteľstvo profesijných predmetov a praktickej prípravy',
        c: 'Kaderník so zameraním na frizúru'
      },
      correctAnswer: 'b',
    },
    {
      question: 'Čo vyviedla so svojim starším bratom v detstve?',
      answers : {
          a : 'Vyšrubovali všetkým autám pred bytovkou ventily z kolies',
          b : 'Vhodili mladšieho brata do kontajnera',
          c : 'Vybrali vianočného kapra z vane a uložili ho do postele spať',
      },
      correctAnswer : 'a',
    },
    {
      question: 'Akému športu sa venovala v mladosti?',
      answers : {
          a : 'Atletika',
          b : 'Basketbal',
          c : 'Gymnastika',
      },
      correctAnswer : 'b',
    }],

   [ quizName = 'martin',
    {
      question: 'V koľkých rokoch prestal fajčiť?',
      answers: {
        a: 'V šiestich',
        b: 'V dvanástich',
        c: 'V osemnástich'
      },
      correctAnswer: 'a',
    },
    {
      question: 'Čo z uvedeného sa mu podarilo?',
      answers : {
        a : 'Takmer vypustil Domašu',
        b : 'Lietadlo, ktorým letel takmer havarovalo',
        c : 'Takmer vypálil bytovku',
      },
      correctAnswer : 'c',
    },
    {
      question: 'Akej záľube sa aktívne a profesionálne venoval?',
      answers : {
          a : 'Skladanie modelov lietadiel',
          b : 'Fotografovanie',
          c : 'Plávanie',
      },
      correctAnswer : 'b',
    }],
]

// vytiahnem meno z adresy
let myName = location.hash.substring(1)

// vytiahnem pole s otazkami podla mena
let result = quiz.filter(function(person){
  let oneQuiz =  person.includes(myName)
  return oneQuiz
})

// vytiahnem len otazky a odpovede - odstranim 1.polozku z pola quizName
resultNew = result[0].shift()


const quizContainer = document.querySelector('.quiz-container')

// funkcia na vybratie otazky, priradenie odpovedi a  zobrazeni na stranke 1 slide = 1 otazka s odpovedami
function buildQuiz() {

  // ulozenie output do premennej
  const output = [];

  result[0].forEach(
    (currentQuestion, questionNumber) => {

        // premenna na ulozenie odpovedi
        const answers = [];

        // pre kazdu moznu odpoved
        for(letter in currentQuestion.answers){

          // pridaj HTML radio input
          answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
          );
        };

        // pridaj otazku a odpovede do vystupu
        output.push(
          `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
    }
  );

  // skombinujeme output list do stringu a vlozime do stranky
  quizContainer.innerHTML = output.join('');
}



// funkcia pre zratanie spravnych odpovedi, zafarbenia textu, zobrazenie aktualneho slidu s otazkami a zaradenie tlacidiel pre pohyb medzi slidmi
function showResults(n){

  // odchytim blok .answer na stranke
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // nastavenie poctu spravnych odpovedi na zaciatku na 0
  let numCorrect = 0;

  // pre kazdu otazku
  result[0].forEach( (currentQuestion, questionNumber) => {

    // najdi vybranu odpoved
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;                           // skontroluje, ktoru odpoved vybral uzivatel
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){                                           // ak je odpoved spravna
      numCorrect++;                                                                             // prirataj spravnu odpoved k vysledku

      answerContainers[questionNumber].style.color = 'lightgreen';                              // zmen farbu otazky na zelenu
    }
    else{
      answerContainers[questionNumber].style.color = 'red';                                     // ak je nespravna odpoved, zmen farbu na cervenu
    }
  });

  // zobrazenie vysledku s poctom spravnych odpovedi
  resultsContainer.innerHTML = `Výsledok: ${numCorrect} správne odpovede z ${result[0].length} otázok`
  

  slides.forEach(oneSlide =>{
    oneSlide.classList.add('active-slide')
    oneSlide.style.position = 'relative'
  })
  
  // tlacidla pre pohyb medzi slidmi
  previousButton.style.display = 'none'
  nextButton.style.display = 'none'
  submitButton.style.display = 'none'
  homeButton.style.display = 'flex'
  document.querySelector('.quiz-wrapper').style.minHeight = 'auto'
  
  // zobrazenie ohnostroja
  let fireworksLeft = document.querySelector('.fireworks-left')
  let fireworksRight = document.querySelector('.fireworks-right')

  fireworksLeft.style.display = 'flex'
  fireworksRight.style.display = 'flex'
};


// funkcia na zobrazenie aktualnej otazky podla poradia a tlacidiel k tomu potrebnych
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  slides[n].style.position = 'absolute'
  currentSlide = n;

  if (currentSlide === 0) {
    previousButton.style.display = 'none';
  } else {
      previousButton.style.display = 'inline-block';
    }

  if (currentSlide === slides.length-1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  } else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  };
};



// funkcie na zobrazenie stranok dalsej a predchadzajucej

function showNextSlide() {
  showSlide(currentSlide + 1);
};

function showPreviousSlide() {
  showSlide(currentSlide - 1);
};


// Variables
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


// spustenie funkcie - zhotovenie a zobrazenie quizu
buildQuiz()


// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const homeButton = document.getElementById('homepage')
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;


// spustenie funkcie - zobrazenie aktualnej otazky
showSlide(currentSlide);


// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

})();
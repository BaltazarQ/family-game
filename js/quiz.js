(function() {




let names = [
    'Katarína',
    'Daniela',
    'Stanislav',
    'Marjen',
    'Martin',
  ];

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
    
            // pre kazdu mozno odpoved
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

  // odchytimi blok .answer na stranke
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
  // let fireworks2 = document.querySelectorAll('.fireworks2')
  // let fireworks3 = document.querySelectorAll('.fireworks3')
  // console.log(fireworksLeft)
  fireworksLeft.style.display = 'flex'
  fireworksRight.style.display = 'flex'
  // let fireworksLeft = document.querySelectorAll('.fireworks-left')
  // fireworksLeft.style.display = 'none'
  // fireworks1.style.display = 'block'
  
  // document.querySelectorAll('.fireworks1').style.display = 'block'
  // let displayFireworks = function(element) {
    //   element.style.display = 'flex'
    // }
    
    
    
    // fireworks1.forEach(element => {
      //   element.setTimeout(function(){
        //   }, 2000);
        //   });
};


// funkcia na zobrazenie aktualnej otazky podla poradia a tlacidiel k tomu potrebnych
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  slides[n].style.position = 'absolute'
  currentSlide = n;
  if (currentSlide === 0) {
    previousButton.style.display = 'none';
  }
  else {
      previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length-1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else {
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
// const quizContainer = document.getElementById('quiz');
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









  // 49. Obarvení textu v konzoli

  // console.log("%c tento text je barevný",
  // "color: #db0000; font-weight: bold; background: #fff")
  



// 51. Náhodný generátor hesel

// let passwords = ["46133ewds","admin255dd","DavidJeCool1235"]
// let randomNumber = Math.ceil(Math.random()*3)
// let index = passwords.length - randomNumber

// console.log(passwords[index])




// 52. Práce s polem - push, pop, unshift, shift

// // přepsání prvku
// let testArray = ["test1", "test2", "test3"]
// testArray[0] = "Nový prvek v poli"
// console.log(testArray)

// // přidání posledního prvku 
// let myArray = ["Jedna", "Dva", "Tři"]
// myArray.push("Čtyři")
// console.log(myArray)

// // odstranění posledního prvku pole
// myArray.pop()
// console.log(myArray)

// // přidání prvního prvku
// myArray.unshift("Nultý")
// console.log(myArray)

// // odstranění prvního prvku
// myArray.shift()
// console.log(myArray)




// 53. Práce s polem - splice a mdn

// mdn array - properties a methods
// odstranění z libovolné pozice v poli
// let mySecondArray = ["Jedna", "Dva", "Tři"]
// mySecondArray.splice(0,1)
// console.log(mySecondArray)

// let myThirdArray = ["Jedna", "Dva", "Čtyři"]
// myThirdArray.splice(2,0,"Tři")
// console.log(myThirdArray)



// 54. Společná výzva - blbneme s polem pomocí promptu

// let firstName = prompt("Zadej jméno")
// console.log(firstName)

// let myArray = []
// myArray.push(prompt("Přidej jméno"))
// console.log(myArray)
// myArray.push(prompt("Přidej jméno"))
// console.log(myArray)
// myArray.push(prompt("Přidej jméno"))
// console.log(myArray)

// myArray.unshift(prompt("Přidej jméno na začátek"))
// console.log(myArray)
// myArray.unshift(prompt("Přidej jméno na začátek"))
// console.log(myArray)
// myArray.unshift(prompt("Přidej jméno na začátek"))
// console.log(myArray)




// 55. Pole a cyklus forEach - vypisujeme prvky pole

// let employees = ["David", "Harry", "Hermiona", "Ron", "Draco"]

// employees.forEach(function(){
//     console.log("testujeme")
// })

// employees.forEach(function(person){
//     console.log(person)
// })

// employees.forEach(function(person, index){
//     console.log(index)
//     console.log(person)
// })



// 56. Pole výzva - vypisujeme seznam úkolů

// let toDo = ['vyvenčit psa',
//   'koupit kečup',
//   'vymalovat pokoj',
//   'udělat si svačinu'
//   ]

//   toDo.forEach(function(activity, index) {
//     let number = index +1;
//     console.log(`${number}. ${activity}`)
//   })




// 57. Cyklus for

// // cyklus for
// for(let i = 0; i <= 5; i++){
//     console.log(`${i + 1}: Testovací text`)
// }

// // obrácený cyklus for
// for(let j = 3; j >= 0; j--){
//     console.log("Další test")
// }

// // výpis pole pomocí cyklu for
// let employees = ["David", "Jana", "Martin", "Dalibor", "Anna"]

// for(let k = 0; k < employees.length; k++){
//     console.log(employees[k])




// 58. Výzva a cyklus for

// Úkol
// 1. vytvořte pole toDo s úkoly:
// sestříhat video
// uklidit pokoj
// vyluxovat

// Vypište pole ve tvaru:
      // 1. sestříhat video
      // 2. uklidit pokoj
      // 3. vyluxovat

// 2. vytvořte prázdné pole a pomocí cyklu ho naplňte čísly od 0 do 4. Pole vypište do konzole

// let toDo = ['sestříhat video', 'uklidit pokoj', 'vyluxovat']

// for(let i = 0; i < toDo.length; i++ ){
//   let index = i + 1
//   console.log(`${index}. ${toDo[i]}`)
// }

// let myArray = []

// for(let i=0; i <= 4; i++) {
//   myArray.push(i)
// }

// console.log(myArray)




// 59. Pole a indexOf

// let employees = ["David", "Marek", "Jana"]

// console.log(employees.indexOf("David"))
// console.log(employees.indexOf("Marek"))
// console.log(employees.indexOf("Jana"))

// console.log(employees.indexOf("Dalibor"))
// console.log(employees.indexOf("Anna"))

// if(employees.indexOf("David") === -1){
//     console.log("Uživatel nebyl nalezen")
// } else {
//     console.log("Uživatel byl nalezen")
// }

// if(employees.indexOf("Marek") != -1){
//     console.log("Uživatel byl nalezen")
// } else {
//     console.log("Uživatel nebyl nalezen")
// }




// 60. Pole objektů a metoda indexOf

// let books = [{}, {
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }, {
//     title: "Harry Potter a Tajemná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
// }, {
//     title: "Harry Potter a vězeň z Azkabanu",
//     author: "J. K. Rowlingová",
//     published: 1999
// }]

// // console.log(books[0].title)
// // console.log(books[0].author)
// // console.log(books[0].published)

// console.log(books.indexOf({}))

// let data = {
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }

// let data2 = data            // toto nevytvori nove pole, len robi odkaz na prvky v poli 'data'
// data2.title = "Nový title"  // ak teda zmenime hodnotu v poli 'data2', zmeni sa aj v poli 'data'
// console.log(data)
// console.log(data2)




// 61. Pole objektů a metoda findIndex 


// let books = [{
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }, {
//     title: "Harry Potter a Tajemná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
// }, {
//     title: "Harry Potter a vězeň z Azkabanu",
//     author: "J. K. Rowlingová",
//     published: 1998
// }]

// // findIndex na běžném poli
// let array1 = [8, 11, 8, 20, 39]

// let result = array1.findIndex(function(number){
//     return number > 15                              // najde index prvej polozky, ktora splna podmienku vo funkcii
// })

// console.log(result)

// // findIndex na poli objektů
// let result2 = books.findIndex(function(oneBook){
//     return oneBook.published === 1998             // najde index prvej polozky, ktora splna podmienku vo funkcii
// })

// console.log(result2)





// 62. Pole objektů výzva - hledání podezřelého v databázi

// Úkol
// Pomocí prompt() zadáte křestní jméno podezřelého a do konzole se vypíší všechny jeho údaje. Každý údaj přehledně na jeden řádek. Např.:
// Jméno: Jana
// Příjmení: Růžová
// atd.

// Budete tedy muset najít podle jména daný objekt a ten pak vypíšete. K nalezení objektu použijete findIndex

// let criminals = [{
//   firstName: "Martin",
//   secondName: "Zelený",
//   birth: 1985,
//   address: "U sloupů 16",
//   city: "České Budějovice"
// }, {
//   firstName: "Jana",
//   secondName: "Růžová",
//   birth: 1996,
//   address: "Malská 29",
//   city: "České Budějovice"
// }, {
//   firstName: "Filip",
//   secondName: "Modrý",
//   birth: 1989,
//   address: "Stevardská 38",
//   city: "České Budějovice"
// }]

// let name = prompt('Zadaj meno hladaneho')
// let result = criminals.findIndex(function(criminal){
//   return criminal.firstName === name
// })

// console.log(result)

// function findingCriminal() {
//   console.log(`Meno: ${criminals[result].firstName}`)
//   console.log(`Priezvisko: ${criminals[result].secondName}`)
//   console.log(`Datum narodenia: ${criminals[result].birth}`)
//   console.log(`Adresa: ${criminals[result].address}`)
//   console.log(`Mesto: ${criminals[result].city}`)
// }

// findingCriminal()




// 63. Pole objektů a metoda find

// let books = [{
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }, {
//     title: "Harry Potter a Tajemná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
// }, {
//     title: "Harry Potter a vězeň z Azkabanu",
//     author: "J. K. Rowlingová",
//     published: 1999
// }]

// // find a běžné pole
// let myArray = [1, 3, 20, 2, 8]

// let result = myArray.find(function(oneNumber){
//     return oneNumber > 4
// })
// console.log(result)

// // find a pole objektů
// let result2 = books.find(function(oneBook){
//     if(oneBook.published === 1998){
//         return oneBook
//     }
// })

// console.log(result2.title)




// 64. Pole objektů a jejich filtrování

// let books = [{
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }, {
//     title: "Harry Potter a Tajemná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
// }, {
//     title: "Harry Potter a vězeň z Azkabanu",
//     author: "J. K. Rowlingová",
//     published: 1999
// }]

// // filtrování na běžném poli
// let names = ["Jana", "Anna", "Naděžda", "David"]

// let arrayResults = names.filter(function(oneName){
//     let weTryFind = oneName.toLowerCase().includes("na")
//     return weTryFind
// })

// console.log(arrayResults)

// filtrování na poli objektů 1
// let arrayResults2 = books.filter(function(oneBook){
//     let weTryFind2 = oneBook.author.toLowerCase().includes("row")
//     return weTryFind2
// })

// arrayResults2.forEach(function(oneResult){
//     console.log(oneResult.title)
// })

// filtrování na poli objektů 2
// let arrayResults2 = books.filter(function(oneBook){
//     let weTryFind2 = oneBook.author.toLowerCase().includes("row")
//     let weTryFind3 = oneBook.title.toLowerCase().includes("row")
//     return weTryFind2 || weTryFind3
// })

// arrayResults2.forEach(function(oneResult){
//     console.log(oneResult.title)
// })


 
})();




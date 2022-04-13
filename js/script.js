$(document).ready(function($) {

var choose = $('.header-section').find('a'),
    header = $('header'),
    siblings = $('.siblings'),
    person = $('.person'),
    figures = $('#figures'),
    figure = $('.figure'),
    figureText = $('.figure .figure-text'),
    difficulty = $('#difficulty'),
    sibling = [],

    submit = $('#difficulty').find('#submit'),
    backToFigure = $('#back-to-figure'),
    
    scrollToSection = function (event) {
        event.preventDefault();

        var id = this.hash;             // #figures
        // console.log($(id).offset().top)

        $('html,body').stop().delay(300).animate( { scrollTop: $(id).offset().top }, 750, function() {
        window.location.hash = id});
        header.delay(500).slideUp(750)
        figures.delay(500).slideDown(750)

        $('.katarina').delay(1500).slideDown(500)
        $('.daniela').delay(2000).slideDown(500)
        $('.stanislav').delay(2500).slideDown(500)
        $('.maria').delay(3000).slideDown(500)
        $('.martin').delay(3500).slideDown(500)
    };




// skryjem vsetko okrem headeru
figures.hide()
figureText.hide();

// po kliknuti na tlacidlo v headeri skryjem header a zobrazim zvysok stranky
choose.on('click', scrollToSection);



// skryjem popis postavy
// figureText.hide();

// pri hoveri na postavu zobrazenie popisu postavy
// person.on('mouseenter', function(){
//     $(this).find(figureText).slideDown(500);

// });

// po kliknuti na postavu zvyraznenie postavy a zoskrolovanie na obtiaznost
person.on('click', function(event){
    event.preventDefault();
    var difficultyTop = $('#difficulty').offset().top

    $(this).addClass('selected').siblings().removeClass('selected');
    $(this).css({transform: 'scale(1.1)', transition: '0.5s'}, 1500).siblings().css({transform: 'scale(0.9)', transition: '0.5s'}, 1500);

    $('html, body').delay(500).animate( {scrollTop: difficultyTop}, 750);
});


// vyber obtiaznosti

// skryjem popis pre lahku a tazku uroven
$('.text').hide();


// po kliknuti na potvrdenie obtiaznosti
submit.on('click', function(event) {
    
    // event.preventDefault(); 
    
    var checked = $("input[name=difficulty]:checked").val(),
        easy = $('.easy-text'),
        hard = $('.hard-text');

    if (checked === 'easy') {                                       // ak je lahka, zobraz text lahka

        event.preventDefault();
        difficulty.slideUp(500);
        easy.slideDown(500);
        
    } else if (checked === 'hard') {                                // ak je tazka, zobraz text tazka

        event.preventDefault();
        difficulty.slideUp(500);
        hard.slideDown(500);

    } else if (checked === undefined) {                             // ak nie je vybrata obtiaznost, zobraz alert

        event.preventDefault();
        alert ('Neoblbuj, vyber jednu z možností!');

    } else if (!person.hasClass('selected')) {                      // ak nie je vybrata postava, zobraz alert a zoskroluj na postavy
        
        event.preventDefault();
        var figureTop = $('#figures').offset().top;
        
        $('html, body').delay(500).animate( {scrollTop: figureTop}, 750);
        alert('vyber postavu');
        
    } else {                                                        // ak je vsetko OK, posli ho do prec na stranku quiz.php
        
        var siblingTitle = $('.selected').find('a').attr('title');
        var submitButton = $('#difficulty').find('#form');

        submitButton.attr('action', `quiz.php#${siblingTitle}`);
        console.log(siblingTitle);
    };
});


// pri popise lahkej / tazkej urovni po kliknuti na tlacidlo vrati naspat na vyber obtiaznosti
var again = $('.again');

again.on('click', function(event) {
    event.preventDefault();
    difficulty.slideDown(500)
    $(this).parent().slideUp(500);
});



})(jQuery);


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <!-- Bootstrap -->
        <!-- Latest compiled and minified CSS -->
        <!-- <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> -->
        <!-- Optional theme -->
        <!-- <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"> -->
        <title>FAMILY GAME</title>
        <script src="https://kit.fontawesome.com/3eb4f89035.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,900;1,100;1,400;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>

    <body>

<?php

    // $names = [
    //     'Katarína',
    //     'Daniela',
    //     'Stanislav',
    //     'Marjen',
    //     'Martin',
    //   ];

    //   foreach ($names as $name) {
    //       $title = mb_strtolower($name);
    //         $znaky = array(
    //             'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'Č'=>'C', 'č'=>'c', 'Á'=>'A', 'Ä'=>'A', 'É'=>'E', 'Ë'=>'E',
    //             'Í'=>'I', 'Ó'=>'O', 'Ô'=>'O', 'Ö'=>'O', 'Ú'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'á'=>'a', 'ä'=>'a', 'é'=>'e',
    //             'ë'=>'e', 'í'=>'i', 'ó'=>'o', 'ô'=>'o', 'ö'=>'o', 'ú'=>'u', 'ý'=>'y', 'ý'=>'y', 'Ŕ'=>'R', 'ŕ'=>'r',
    //             'Ř'=>'R', 'ř'=>'r', 'Ě'=>'E', 'ě'=>'e', 'Ů'=>'U', 'ů'=>'u', ' '=>'_', ':'=>'_', '!'=>'_', '?'=>'_',
    //             '/'=>'_', '%'=>'_', '*'=>'_', '"'=>'_', '<'=>'_', '>'=>'_', '|'=>'_', '+'=>'_', '['=>'(', ']'=>')',
    //             'ľ'=>'l', 'Ľ'=>'L', 'ĺ'=>'Ĺ'
    //         );
        
    //         $title = strtr($title, $znaky);
    //   }
?>

        </main>
    </body>

    <body class="body-quiz">

        <aside class="fireworks fireworks-left">
            <img class="fireworks1" src="img/fireworks-1.gif" alt="">
            <img class="fireworks2" src="img/fireworks-2.gif" alt="">
            <img class="fireworks3" src="img/fireworks-3.gif" alt="">
        </aside>
        
        <main class="quiz">
            <section class="quiz-wrapper">
                <div class="quiz-container">
                    <div id="quiz-question">
                    </div>
                    <div id="quiz-answer">
                    </div>
                </div>
            </section>
                    
                    
            <section class="buttons">
                <a class="btn" id="previous">Naspäť</a>
                <a class="btn" id="next">Ďalej</a>
                <a class="btn" id="submit">Výsledok</a>
                <a href="index.php" class="btn" id="homepage">Na úvodnú stránku</a>
            </section>
            <section id="results"></section>
            
            
        </main>
        
        <aside class="fireworks fireworks-right">
            <img class="fireworks1" src="img/fireworks-1.gif" alt="">
            <img class="fireworks3" src="img/fireworks-2.gif" alt="">
            <img class="fireworks2" src="img/fireworks-3.gif" alt="">
                    
        </aside>


        <script src="js/jquery.js"></script>
        <script src="js/script.js"></script>
        <script src="js/quiz.js"></script>
    </body>
</html>
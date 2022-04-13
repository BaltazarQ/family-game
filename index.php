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
        <header>
            <section class="header-section">
                <h1>Gang Prokopovcov</h1>
                <h2>Rodinný quiz</h2>
                <p>Poznáš svojich súrodencov veľmi dobre? Zaspomínaj si na vybrané udalosti v ich živote a skús odpovedať správne na pár otázok.</p>
                <a class="choose btn" href="#figures">Vyber si postavu</a>
            </section>
        </header>

        <main id="figures">
            <section class="siblings" id="siblings">

                <?php 
                $katarina = 'Katarina';
                $daniela = 'Daniela';
                $stanislav = 'Veľká hlava';
                $marjen = 'Marjen';
                $martin = 'Martin';

                $siblings = [

                    [
                        'name' => 'Katarína',
                        'class' => 'katarina',
                        'description' => 'krycie meno: Minister - neoficiálna hlava gangu Prokopovcov. <br>Heslo: "Nestačí dobre vyzerať."',
                    ],
                
                    [
                        'name' => 'Daniela',
                        'class' => 'daniela',
                        'description' => 'krycie meno: Plánovač - plánovacia zložka gangu <br>Heslo: "Za peníze v Preze dúm..."',
                    ],

                    [
                        'name'=> 'Stanislav',
                        'class' => 'stanislav',
                        'description' => 'krycie meno: Braňo - teoretická zložka gangu <br>Heslo: "Čo neviem, to si vymyslím!"',
                    ],

                    [
                        'name' => 'Mária',
                        'class' => 'maria',
                        'description' => 'krycie meno: Kaderník - hovorca gangu, zavrieť jej ústa je takmer nemožné <br>Heslo: "Ja ti poviem, čo si myslíš!"',
                    ],

                    [
                        'name' => 'Martin',
                        'class' => 'martin',
                        'description' => 'krycie meno: Šéf - výkonná zložka gangu Prokopovcov. <br>Heslo: "Idem, riešim!"'
                    ],

                ];
                

                
                foreach ($siblings as $sibling) {
                    $title = strtolower($sibling['class']);
                    $title = str_replace(' ', '_', $title);

                    echo '<div  class="person"><a href="#difficulty" class="figure" title="' . $title . '">';
                    echo '<img src="img/' . $sibling['class'] . '.jpg" title="' . $title . '">
                    <article class="figure-text ' . $sibling['class'] . '"><h4>' . $sibling['name'] . '</h4>
                    <p>' . $sibling['description'] . '</p></article>';
                    echo '</a></div>';
                };

                ?>




            </section>

            <section id="difficulty" class="difficulty">
                <h1>Vyber si obtiažnosť</h1>
                <form id="form" action="quiz.php">
                    <label for="easy">
                        <input type="radio" id="easy" name="difficulty" value="easy">Ľahká
                    </label>
                    <label for="normal">
                        <input type="radio" id="normal" name="difficulty" value="normal">Stredná
                    </label>
                    <label for="hard">
                        <input type="radio" id="hard" name="difficulty" value="hard">Ťažká
                    </label>
                    <input class="btn" id="submit" type="submit" value="Potvrď">
                    <!-- <input class="btn" id="back-to-figure" type="button" value="Výber postavy"> -->
                </form>
            </section>

            <section class="text easy-text">
                <h1>Ľahká úroveň</h1>
                <p>To vážne chceš ľahkú úroveň? To si netrufaš na viac? Tak ty teda asik bars dobre poznáš svojich súrodencov. Sa haňbi!!</p>
                <a class="btn again" href="#difficulty">Vyber si ešte raz</a>
            </section>
            
            <section class="text hard-text">
                <h1>Ťažká úroveň</h1>
                <p>Ooo-ooo-ooo!!! Niekto sa cíti ako Rambo? Odvážnym vraj šťastie praje? Ale odvážnych je plný cintorín. Nedělejte machry a sa spamätaj!!!</p>
                <a class="btn again" href="#difficulty">Vyber si ešte raz</a>

            </section>

        </main>

        <footer>

        </footer>

        <script src="js/jquery.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>
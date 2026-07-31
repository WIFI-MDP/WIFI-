let time = 30;
let timer;
let currentAnswer = "";
let difficulty = 1;


// Génération d'exercices difficiles
function generateLog(){

    let type = Math.floor(Math.random()*8);

    let question;
    let answer;


    switch(type){


        // Logarithme produit
        case 0:

            let a = Math.floor(Math.random()*5)+2;
            let b = Math.floor(Math.random()*5)+2;

            question =
            `log<sub>${a}</sub>(${Math.pow(a,b)} × ${Math.pow(a,b+2)}) = ?`;

            answer = String(2*b+2);

        break;



        // Logarithme fraction
        case 1:

            let n = Math.floor(Math.random()*8)+2;

            question =
            `log<sub>2</sub>(1/${Math.pow(2,n)}) = ?`;

            answer = String(-n);

        break;



        // Logarithme puissance
        case 2:

            let base = Math.floor(Math.random()*6)+2;
            let expo = Math.floor(Math.random()*7)+3;

            question =
            `log<sub>${base}</sub>(${Math.pow(base,expo)}) + log<sub>${base}</sub>(${Math.pow(base,expo-1)}) = ?`;

            answer = String(expo + expo - 1);

        break;



        // Equation logarithmique
        case 3:

            let value = Math.floor(Math.random()*6)+2;

            question =
            `Résoudre : log<sub>2</sub>(x) = ${value}`;

            answer = String(Math.pow(2,value));

        break;



        // Dérivée ln
        case 4:

            question =
            `f(x)=ln(x²+4x+7)<br>
             Trouver f'(x)`;

            answer =
            "(2x+4)/(x²+4x+7)";

        break;



        // Dérivée produit
        case 5:

            question =
            `f(x)=x³ × ln(x)<br>
             Trouver f'(x)`;

            answer =
            "3x²ln(x)+x²";

        break;



        // Dérivée quotient
        case 6:

            question =
            `f(x)=ln(x)/x²<br>
             Trouver f'(x)`;

            answer =
            "(1-2ln(x))/x³";

        break;



        // Dérivée exponentielle
        case 7:

            question =
            `f(x)=e^x × ln(x)<br>
             Trouver f'(x)`;

            answer =
            "e^xln(x)+e^x/x";

        break;


    }


    currentAnswer = answer
    .replace(/\s+/g,'')
    .toLowerCase();


    document.getElementById("equation").innerHTML =
    question;

}





// Nouveau calcul
function newChallenge(){

    clearInterval(timer);

    time = 30;

    document.getElementById("time").textContent = time;

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("answer").value = "";

    document.getElementById("result").innerHTML = "";


    generateLog();

    startTimer();

}





// Chronomètre
function startTimer(){

    timer = setInterval(()=>{


        time--;


        document.getElementById("time").textContent = time;


        document.getElementById("progressBar").style.width =
        (time / 30 * 100) + "%";



        if(time <= 0){


            clearInterval(timer);


            document.getElementById("result").innerHTML =
            "⏳ Nouveau calcul plus difficile...";


            setTimeout(()=>{

                newChallenge();

            },1000);


        }


    },1000);

}





// Bouton connexion
document.getElementById("connect")
.addEventListener("click",()=>{


    let answer =
    document.getElementById("answer")
    .value
    .replace(/\s+/g,'')
    .toLowerCase();



    if(answer === currentAnswer){


        document.getElementById("result").innerHTML =
        "✅ CONTINUE D'UTILISER TA 5G 📶";


        document.getElementById("result").className="success";


    }else{


        document.getElementById("result").innerHTML =
        "❌ DOMMAGE CONTINUE D'UTILISER TA 5G 📶";


        document.getElementById("result").className="fail";


    }


    clearInterval(timer);


});





// Bouton réessayer
document.getElementById("retry")
.addEventListener("click",()=>{


    newChallenge();


});





// Démarrage automatique
generateLog();
startTimer();

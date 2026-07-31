let time = 30;
let timer;
let currentAnswer = 0;
let difficulty = 1;


// Création de calculs logarithmiques
function generateLog() {

    let base;
    let result;

    if (difficulty === 1) {

        // Niveau facile
        const easy = [
            [2,1],
            [2,2],
            [2,3],
            [3,1],
            [3,2],
            [5,1],
            [5,2],
            [10,1],
            [10,2]
        ];

        let pick = easy[Math.floor(Math.random()*easy.length)];

        base = pick[0];
        result = pick[1];

    } else {

        // Niveau plus dur après expiration
        result = Math.floor(Math.random()*8)+3;

        base = Math.floor(Math.random()*8)+2;

    }


    currentAnswer = result;


    document.getElementById("equation").innerHTML =
    `log<sub>${base}</sub>(${Math.pow(base,result)}) = ?`;

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

            difficulty = 2;


            document.getElementById("result").innerHTML =
            "⏳ Nouveau calcul plus difficile...";


            setTimeout(()=>{

                newChallenge();

            },1000);

        }


    },1000);

}



// Bouton connexion
document.getElementById("connect").addEventListener("click",()=>{


    let answer =
    Number(document.getElementById("answer").value);



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

    difficulty = 1;

    newChallenge();

});



// Démarrage automatique
generateLog();
startTimer();

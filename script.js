let time = 30;
let timer;
let currentAnswer = "";


// Génération des calculs
function generateLog(){

    let type = Math.floor(Math.random()*8);

    let question;
    let answer;


    switch(type){


        case 0:

            question =
            `log<sub>5</sub>(125 × 625) = ?`;

            answer="7";

        break;



        case 1:

            question =
            `log<sub>2</sub>(1/64) = ?`;

            answer="-6";

        break;



        case 2:

            question =
            `log<sub>3</sub>(729)+log<sub>3</sub>(27)= ?`;

            answer="8";

        break;



        case 3:

            question =
            `Résoudre : log<sub>2</sub>(x)=10`;

            answer="1024";

        break;



        case 4:

            question =
            `f(x)=ln(x²+5x+9) → f'(x)= ?`;

            answer="(2x+5)/(x²+5x+9)";

        break;



        case 5:

            question =
            `f(x)=x²ln(x) → f'(x)= ?`;

            answer="2xln(x)+x";

        break;



        case 6:

            question =
            `f(x)=e^xln(x) → f'(x)= ?`;

            answer="e^xln(x)+e^x/x";

        break;



        case 7:

            question =
            `f(x)=ln(x)/x → f'(x)= ?`;

            answer="(1-ln(x))/x²";

        break;


    }



    currentAnswer =
    answer
    .replace(/\s+/g,'')
    .toLowerCase();



    document.getElementById("equation").innerHTML =
    question;

}





// Nouveau calcul
function newChallenge(){

    clearInterval(timer);

    time=30;

    document.getElementById("time").textContent=time;

    document.getElementById("progressBar").style.width="100%";

    document.getElementById("answer").value="";

    document.getElementById("result").innerHTML="";


    generateLog();

    startTimer();

}





// Chronomètre
function startTimer(){

    timer=setInterval(()=>{


        time--;

        document.getElementById("time").textContent=time;


        document.getElementById("progressBar").style.width =
        (time/30*100)+"%";



        if(time<=0){


            clearInterval(timer);


            document.getElementById("result").innerHTML =
            "⏳ Temps écoulé...";


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



    clearInterval(timer);



    if(answer===currentAnswer){


        document.getElementById("result").innerHTML =
        "✅ CONTINUE D'UTILISER TA 5G 📶";


        document.getElementById("result")
        .className="success";



        setTimeout(()=>{


            document.getElementById("result").innerHTML =
            "📡 Déconnexion du réseau...\nMerci d'avoir utilisé le service.";


            setTimeout(()=>{


                location.reload();


            },3000);



        },5000);



    }else{


        document.getElementById("result").innerHTML =
        "❌ DOMMAGE CONTINUE D'UTILISER TA 5G 📶";


        document.getElementById("result")
        .className="fail";


    }


});





// Bouton réessayer
document.getElementById("retry")
.addEventListener("click",()=>{


    newChallenge();


});





// Démarrage
generateLog();
startTimer();

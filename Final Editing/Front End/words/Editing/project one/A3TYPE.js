let btns =document.querySelectorAll('.btn');
let mid = document.querySelector('.mid')
let newgameBtn = document.querySelector('.newgame')
let setting = document.querySelector('.setting')
let pause =document.querySelector('.pause');
let play =document.querySelector('.play');
let about= document.getElementsByClassName("about-section")[0];
let arrow = document.getElementById("arrow");
let arrowStats = document.getElementsByClassName("stats-section")[0];
let LOGO = document.querySelector('.LOGO')
let AR=document.getElementsByClassName("AR")[0];
let EN=document.getElementsByClassName("EN")[0];
let line =document.querySelector(".line")
let myChart;
let mode ='home';
let mood;
let stopParticle;
let innerButtons = document.getElementsByClassName("inner_btn");
let radio_inputs = document.getElementsByClassName("language-inputs")[0];
let inner_set = document.getElementsByClassName("inner_set");
let inner_muc = document.getElementsByClassName("inner_muc");
let aboutar = document.getElementsByClassName("aboutar");
let index=0;
let statsScore =[];
let newgamebool = true;
let counterwords = 0;
let checkmusicon = false;
const childWindow = document.getElementById("myIframe").contentWindow;
const childWindow2 = document.getElementById("myIframe2").contentWindow;
var numberoflevel= 1;
let accuracy=0;
let correctChars = 0;
let incorrectChars = 0;
let level_game  ;
let exp_game ;  
let counterwordsindex = 0;

// _______________language____________________
let lang="EN";
localStorage.setItem("lang",lang);
function fontsize(x)
{
    if(x==1)
    {
        for (let index = 0; index < aboutar.length; index++)
        {
            aboutar[index].classList.add("fontsize");
        }
    }
    else
    {
        for (let index = 0; index < aboutar.length; index++)
        {
            aboutar[index].classList.remove("fontsize");
        }
    }
}

EN.classList.add("cursor");
EN.addEventListener("click",()=>
{
    lang="EN";
    localStorage.setItem("lang",lang);
    EN.classList.add("cursor");
    AR.classList.remove("cursor");
    //----------- send message with lang to iframe ---------------
        childWindow.postMessage(`${lang}`, "*");
        childWindow2.postMessage(`${lang}`, "*");
    //----------- end message with lang to iframe ---------------
    fontsize(0);
    about.classList.remove("right-aligned");
    arrow.style.float = "right";
    for (let i = 0; i < btns.length; i++) 
    {
        btns[i].classList.remove("font");
    }
    btns[0].innerHTML=`New Game`;
    btns[1].innerHTML=`Settings`;
    btns[2].innerHTML=`My Stats`;
    btns[3].innerHTML=`About`;
    btns[4].innerHTML=`Load Your Text`;
    btn.innerHTML = `Log in`;
    aboutar[0].innerHTML = `About This Game`;
    aboutar[1].innerHTML = `Welcome to our Typing Challenge! This game is designed to help improve your typing speed and accuracy. As you progress through different levels, you'll encounter a variety of words, phrases, and challenges that aim to develop your typing skills.`;
    aboutar[2].innerHTML = `Key Features:`;
    aboutar[3].innerHTML = `New Game:`;
    aboutar[4].innerHTML = `Start a new challenge to test and improve your typing speed.`;
    aboutar[5].innerHTML = `Settings:`;
    aboutar[6].innerHTML = `Customize game sound, preferences.`;
    aboutar[7].innerHTML = `My Stats:`;
    aboutar[8].innerHTML = `Track your progress, including your fastest typing、 speed and accuracy rate.`;
    aboutar[9].innerHTML = `Load Your Text:`;
    aboutar[10].innerHTML = `Practice typing with your own text to improve your skills in real-life scenarios.`;
    aboutar[11].innerHTML = `Why Typing Skills Matter:`;
    aboutar[12].innerHTML = `Typing is an essential skill in today's digital world, and improving your speed and accuracy can save time and boost productivity. This game makes learning fun, interactive, and engaging!`;
    logOut.innerHTML = "Logout";
    if(mode == "newGame" && mood == "play")
    {

        innerButtons[0].innerText = "Letters";
        innerButtons[1].innerText = "Numbers";
        innerButtons[2].innerText = "Back";
    }
    if(mode == "settings")
    {

        if(checkmusicon)
        {
            inner_set[0].innerHTML=`Pause Music`;
            inner_set[0].classList.remove("font");
        }
        else
        {
            inner_set[0].innerHTML=`Music`;
            inner_set[0].classList.remove("font");
        }
        
        inner_set[1].innerHTML=`Game Speed`;
        inner_set[1].classList.remove("font");
        inner_set[2].innerHTML=`Back`;
        inner_set[2].classList.remove("font");

    }
    if(mode == "load")
    {
        textarea.setAttribute("placeholder", `Load your text here....\nHint: Put a space between each word.`);
        textarea.classList.remove("font");
        textarea.classList.remove("right-aligned");
        play_load.innerText=`Play`;
        play_load.classList.remove("font");
        Back_load.innerText=`Back`
        Back_load.classList.remove("font");
        msg.innerHTML = "Error: Please enter some text.."
        msg.style.fontSize = "16px"
    }

});
AR.addEventListener("click",()=>
{
    lang="AR";
    localStorage.setItem("lang",lang);
    AR.classList.add("cursor");
    EN.classList.remove("cursor");
    //----------- send message with lang to iframe ---------------
        childWindow.postMessage(`${lang}`, "*");
        childWindow2.postMessage(`${lang}`, "*");
    //----------- end message with lang to iframe ---------------
    fontsize(1);
    about.classList.add("right-aligned");
    arrow.style.float = "left";
    for (let i = 0; i < btns.length; i++) 
    {
        btns[i].classList.add("font");
    }
    btns[0].innerHTML=`لعبة جديدة`;
    btns[1].innerHTML=`الإعدادات`;
    btns[2].innerHTML=`الإحصائيات`;
    btns[3].innerHTML=`حول اللعبة`;
    btns[4].innerHTML=`أكتب نصك الخاص`;
    btns[0].style.fontsize=`16px`;
    btn.innerHTML = `تسجيل دخول`;
    aboutar[0].innerHTML = `حول هذه اللعبة`;
    aboutar[1].innerHTML = `مرحبًا بك في لعبة تحدي الكتابه الخاصة بنا. تم تصميم هذه اللعبة لمساعدتك على تحسين سرعة ودقة كتابتك. مع تقدمك عبر المستويات المختلفة، ستواجه مجموعة متنوعة من الكلمات والعبارات والتحديات التي تهدف إلى تطوير مهاراتك في الكتابة`;
    aboutar[2].innerHTML = `:الميزات الرئيسية`;
    aboutar[3].innerHTML = `لعبة جديدة:`;
    aboutar[4].innerHTML = `ابدأ تحديًا جديدًا لاختبار وتحسين سرعة كتابتك`;
    aboutar[5].innerHTML = `الإعدادات:`;
    aboutar[6].innerHTML = `تخصيص تفضيلات صوت اللعبة`;
    aboutar[7].innerHTML = `الاحصائيات:`;
    aboutar[8].innerHTML = `تتبع تقدمك، بما في ذلك سرعة كتابتك ومعدل دقتك`;
    aboutar[9].innerHTML = `قم بتحميل النص الخاص بك:`;
    aboutar[10].innerHTML = `تدرب على الكتابة باستخدام نصك الخاص لتحسين مهاراتك في السيناريوهات الواقعية`;
    aboutar[11].innerHTML = `:لماذا تعتبر مهارات الطباعة مهمة`;
    aboutar[12].innerHTML = `الكتابة هي مهارة أساسية في عالمنا الرقمي اليوم، وتحسين سرعتك ودقتك قد يوفر لك الوقت ويعزز إنتاجيتك هذه اللعبة تجعل التعلم ممتعًا وتفاعليًا وجذابًا`;
    logOut.innerHTML = "تسجيل خروج"
    if(mode == "newGame" && mood=="play")
    {
        innerButtons[0].innerText = "حروف";
        innerButtons[1].innerText = "أرقام";
        innerButtons[2].innerText = "حروج";
    }
    if(mode == "settings")
    {
        if(checkmusicon)
        {
            inner_set[0].textContent = 'إيقاف الموسيقى';
            inner_set[0].classList.add("font");
        }
        else
        {

            inner_set[0].textContent = 'موسيقى';
            inner_set[0].classList.add("font");
        }

        inner_set[1].innerText=`سرعة اللعبة`;
        inner_set[1].classList.add("font");
        inner_set[2].innerHTML=`خروج`;
        inner_set[2].classList.add("font");
    }
    if(mode == "load")
    {
        textarea.setAttribute("placeholder", "...أكتب النص الخاص بك هنا \nتلميح: ضع مسافة بين كل كلمة");

        textarea.classList.add("font");
        textarea.classList.add("right-aligned");
        play_load.innerHTML=`بدأ اللعب`;
        play_load.classList.add("font");
        Back_load.innerHTML=`خروج`;
        Back_load.classList.add("font");
        msg.innerHTML = "...خطأ: يرجى إدخال نص"
        msg.style.fontSize = "20px"
    }
});
// _______________________ END language _____________________---



//_____________________________________ model form ______________________________________-

var modal = document.getElementById("loginModal");
var signReg = document.getElementById("signUpModal");
var btn = document.getElementById("log");
var span = document.getElementsByClassName("close")[0];
let span2 = document.getElementById("mySign");
let logOut = document.getElementById("logout");
let logout_speed_bool = true;

btn.onclick = function()
{
    modal.style.display = "block";

}
span.onclick = function() 
{
    modal.style.display = "none";
    childWindow.postMessage("clear","*");

}
span2.onclick = function() 
{
    signReg.style.display = "none";
    childWindow2.postMessage("clear","*");

}
logOut.addEventListener("click",()=>
{
    logout_speed_bool = true;
    userName.innerHTML="userName";
    leveluser.innerHTML= "100";
    btn.style.display="block";
    childWindow.postMessage("clear","*");
    logOut.style.display = "none";
    progresscontainer.classList.add("hide");
});
window.addEventListener("click",(event)=>
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
        childWindow.postMessage("exit", "*");
    }
    else if(event.target == signReg)
    {
        signReg.style.display ="none";
        childWindow2.postMessage("exit", "*");
    }
});
window.addEventListener("keydown", (event) =>
{
    if (event.key === "Escape") 
    {
        modal.style.display = "none";
        signReg.style.display ="none";
        childWindow.postMessage("exit", "*");
        childWindow2.postMessage("exit", "*");
    }
});


// _________________________________________check user __________________________________________
let userName = document.querySelector('.userName');
let leveluser = document.querySelector('.level');
const progresscontainer = document.getElementsByClassName("progress-container")[0];
let LoginMessage;
window.addEventListener('message', (event)=>
{
    if(event.data ==="need to sign")
    {
        modal.style.display = "none";
        signReg.style.display = "block";
    }
    else if(event.data ==="need to login" || event.data === "succedsign"){
        modal.style.display = "block";
        signReg.style.display = "none";
    }
    else
    {
        LoginMessage = "loginsuccess";
        logout_speed_bool=false;
        var {username,level,exp} = event.data;
        userName.innerHTML=`${username}`;
        leveluser.innerHTML=`${level}`;
        level_game = level;
        exp_game = exp;
        updateProgressBar();
        modal.style.display = "none";
        signReg.style.display = "none";
        logOut.style.display = "flex";
        btn.style.display ="none";
        progresscontainer.classList.remove("hide");
    }
});
// ______________________________________ end check user ___________________________________

//_____________________________________ end model form ___________________________________


//_______________________________________ Mid Editing ___________________________________


/*__________________AnimateWordsOrNumbers________________-*/

    const container = document.getElementById('textContainer');
    const message = document.getElementById('message');
    const scoreDisplay = document.getElementById('score');
    const restartButton = document.getElementById('restart-button');
    const speedControl = document.getElementById('speed');
    const wordLimitControl = document.getElementById('word-limit');
    let words ;
    let intervals = []; 
    let wordGeneratorInterval;
    let score = 0;
    let gameOver = false;
    let verticalSpeed = 0.9; 
    let maxWordsOnScreen = 5;
    let isPaused = false; 
    
    
    function updateSpeed() {
      verticalSpeed = parseFloat(speedControl.value);
    }
    
    
    function updateWordLimit() {
      maxWordsOnScreen = parseInt(wordLimitControl.value);
    }
    
    
    
    function pauseGame() 
    {
    
      pauseAllWords();
      stopWordGeneration();
    }
    function resumeGame() 
    {
      isPaused = false;
      resumeAllWords();
      startWordGeneration();
    }
    
    function pauseAllWords() {
      intervals.forEach(interval => clearInterval(interval));
      intervals = [];
    }
    
    function resumeAllWords() 
    {
      const wordsInContainer = document.querySelectorAll('.word');
      wordsInContainer.forEach(word => 
      {
        animateWord(word);
      });
    }
    
    function startWordGeneration() 
    {
      wordGeneratorInterval = setInterval(()=>
      {
        if(counterwords < 5)
        {
            generateRandomWord();
        }
      }, 1000);
    }
    
    function stopWordGeneration() 
    {
        clearInterval(wordGeneratorInterval);
    }
    
    function animateWord(word) 
    {
      let positionY = parseFloat(word.style.top);
      let positionX = parseFloat(word.style.left);
      let directionX = Math.random() > 0.5 ? 1 : -1; 
      word.classList.add("word");
        
    const interval = setInterval(() => 
    {

        if (gameOver || isPaused) return;
    
        // Vertical movement
        positionY += verticalSpeed;
        word.style.top = `${positionY}px`;
    
        // Horizontal movement
        positionX += directionX * 0.5;
        word.style.left = `${positionX}px`;
    
        // Reverse horizontal direction if the word hits the container's edges
        if (positionX <= 0 || positionX >= container.clientWidth - word.clientWidth) {
          directionX *= -1;
        }
    
        if (positionY >= container.clientHeight - word.clientHeight) 
        {
            if (word.textContent !== '') 
            {
                if(newgamebool)
                {
                    if(statsScore.length == 6)
                    {
                        statsScore.shift();
                        statsScore.push(score);

                    }
                    else
                    {
                        statsScore.push(score);
                    }
                    clearInterval(interval);
                    endGame();
                }
                else
                {
                    clearInterval(interval);
                    endGame();
                }
            }
        }
    }, 20);
      intervals.push(interval);
    }
    
    function generateRandomWord() 
    {
        counterwords++;
        if (gameOver || isPaused) return;

        
        const currentWords = document.querySelectorAll('.word').length;
        if (currentWords >= maxWordsOnScreen) return; // Stop if the limit is reached

        const word = document.createElement('div');
        word.className = 'word';
        word.textContent = words[Math.floor(Math.random() * words.length)];
        
        const startX = Math.random() * (container.clientWidth - 100); // Adjust to keep words within bounds
        const startY = 0; 
        word.style.left = `${startX}px`;
        word.style.top = `${startY}px`;

        container.appendChild(word);

        animateWord(word);

    }
    //_______________________ endGame function _________________________
    function endGame() 
    {
        if(!loadtext && LoginMessage == `loginsuccess`)
        {
            fetch("http://127.0.0.1:8000/api/update/", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user: userName.innerHTML,level: level_game ,exp: exp_game }),
            })
            .then(response => response.json())
            .then(data=>console.log())
            .catch(error => console.error("Fetch error:", error));
        }

      gameOver = true;
      showmessage();
      pauseAllWords(); 
      stopWordGeneration();
    }
    //_______________________END endGame function _________________________

    //_______________________restartGame function _________________________
    function restartGame() 
    {
        score = 0;
        gameOver = false;
        isPaused = false;
        divstage.style.animation = "none";
        numberoflevel = 1;
        stagelevel.innerHTML = `${numberoflevel}`;
        setTimeout(()=>
        {
            divstage.style.animation = 'slideToTopRight 3s ease-in-out forwards';
        },1);

        stopWordGeneration();
        setTimeout(()=>
        {
            FetchWordsOrNumbers();
        },10);

    }
    //_______________________END restartGame function _________________________

    //_______________________Update Accuracy function _________________________
    function updateAccuracy()
    {
        const totalChars = correctChars + incorrectChars;
        accuracy = totalChars === 0 ? 100 : (correctChars / totalChars) * 100;
    }
    //_______________________END updateAccuracy function _________________________

//_________________ Keydown event listner_______________________
let activeWord = null;
document.addEventListener('keydown', (event) =>
{
    if (gameOver || isPaused) return;

    const typedChar = event.key.toLowerCase();
    const wordsInContainer = document.querySelectorAll('.word');

    
    if (!activeWord) {
        const matchingWords = Array.from(wordsInContainer).filter(word =>
            word.textContent.toLowerCase().startsWith(typedChar)
        );

        if (matchingWords.length > 0) {
            activeWord = matchingWords.reduce((closest, word) => {
                const currentTop = parseFloat(word.style.top);
                const closestTop = parseFloat(closest.style.top);
                return currentTop > closestTop ? word : closest;
            }, matchingWords[0]);
        }
    }

    if (activeWord) {
        if (activeWord.textContent.toLowerCase().startsWith(typedChar)) 
        {
            correctChars += 1;

            activeWord.textContent = activeWord.textContent.slice(1);
            if(LoginMessage === `loginsuccess` && !loadtext)
            {
                gainExperience(2);
            }

            if (activeWord.textContent === '' ) 
            {
                
                activeWord.remove();
                total_word_load ++;
                score++;
                activeWord = null; 
                if(score % 5 === 0)
                {
                    counterwords = 0;
                    numberoflevel++;
                    checkCondition();
                }
            
            }
        } 
        else 
        {
            incorrectChars += 1;
        }

        updateAccuracy();
    }
});
//_________________ END Keydown event listner_______________________
//_________________ Intervals function _______________________

function interval() 
{

    wordGeneratorInterval = setInterval(()=>
    {
        if(counterwords < 5)
        {

            generateRandomWord();
        }
    }, 1000);
}

//_________________ END Intervals function _______________________

//_________________  Intervals function for load  _______________________
function interval_load() 
{

    wordGeneratorInterval = setInterval(()=>
        {
            
            if(counterwordsindex < words_load.length)
            {
                generateRandomWord_load();
                counterwordsindex++;
            }

        }, 1000);

}
//_________________ END Intervals function for load  _______________________

//_________________  generateRandomWord_load function for load  _______________________
let words_load;
let total_word_load=0;
function generateRandomWord_load() {
    if (gameOver || isPaused) return;
  
    const currentWords = document.querySelectorAll('.word').length;
    if (currentWords >= maxWordsOnScreen) return; 
  
    const word = document.createElement('div');
    word.className = 'word';
        word.textContent = words_load[counterwordsindex];
        const startX = Math.random() * (container.clientWidth - 100); // Adjust to keep words within bounds
        const startY = 0; // Start at the top
        word.style.left = `${startX}px`;
        word.style.top = `${startY}px`;

        container.appendChild(word);

        animateWord(word);
  

  }
function animateWords()
{
    const textInput = document.querySelector('.load').value;
    const words = textInput.trim().split(/\s+/);
    words_load = words;
    interval_load();
}
//_________________ END generateRandomWord_load function for load  _______________________

// --------------------------------------------------------------------------------------------------------

/*__________________ next level ________________ */
let divstage = document.createElement("div");
divstage.classList.add("header");
let stage = document.createElement("span");
let stagelevel = document.createElement("span");
divstage.appendChild(stage);
divstage.appendChild(stagelevel);

function checkCondition()
{
   
    stagelevel.innerHTML=`${numberoflevel}`
}
/*__________________ end next level ________________ */


/*__________________ FetchWordsOrNumbers ________________ */
let currentIndex = 0;
let array;
var count = 0;

function FetchWordsOrNumbers() 
{
    if (lang == "EN") {
        if (modeing == "letteren") {
            fetch('http://127.0.0.1:8000/api/wordsen/')
                .then(response => response.json())
                .then(data => {
                    setTimeout(() => {
                        words = data.word_en;
                        interval();
                    }, 3100);
                })
        } 
        else 
        {
            fetch('http://127.0.0.1:8000/api/numbers/')
                .then(response => response.json())
                .then(data => {
                    setTimeout(() => {
                        words = data.number;

                        interval();
                    }, 3100);
                })
        }
    }
    else if (lang == "AR") 
        {
        if (modeing == "letterar") {
            fetch('http://127.0.0.1:8000/api/wordsar/')
                .then(response => response.json())
                .then(data => {
                    setTimeout(() => {
                        words = data.word_ar;

                        interval();
                    }, 3100);
                })
        } 
        else 
        {
            fetch('http://127.0.0.1:8000/api/numbers/')
                .then(response => response.json())
                .then(data => {

                    setTimeout(() => {
                        words = data.number;

                        interval();
                    }, 3100);
                })
        }
    }
}
/*__________________ end FetchWordsOrNumbers ________________ */

/* ____________newGame Button_____________ */
let modeing;
function languagecheck()
{
    if(lang == "EN")
    {
        stage.innerHTML = "Wave";
        stagelevel.innerHTML = numberoflevel;
    }
    else if(lang == "AR")
    {
        stage.innerHTML = "المستوى";
        stagelevel.innerHTML = numberoflevel;
    }
}
function proparities()
{
    gameOver=false;
    isPaused=false;
    
    radio_inputs.classList.add("hide");
    logOut.classList.add("hide");
    btn.classList.add("hide");
    LOGO.style.opacity='0';
    divstage.classList.remove("hide");
    mode='playbtn';
    playGame();
    stopParticle='stop';
    mid.appendChild(divstage);
    divstage.style.animation = 'slideToTopRight 3s ease-in-out forwards';
    logOut.style.display = `none`;
    FetchWordsOrNumbers();

}
newgameBtn.addEventListener('click',function ()
{
    hideBtns();
    loadtext=false;
    

    let Mode1 =document.createElement('button');
    Mode1.classList.add("inner_btn");
    Mode1.classList.add('new')

    let Mode2 =document.createElement('button');
    Mode2.classList.add("inner_btn");
    Mode2.classList.add('new')

    let Back =document.createElement('button');
    Back.classList.add("inner_btn");
    Back.classList.add('new')
    Back.setAttribute("onclick", "back()");

    if (lang=="EN") 
    {
        Mode1.innerText=`Letter`;
        modal.classList.remove("font");
        Mode2.innerText=`Numbers`
        Mode2.classList.remove("font");
        Back.innerText=`Back`
        Back.classList.remove("font");
    }
    else if (lang=="AR") 
    {
        Mode1.innerText=`حروف`;
        modal.classList.add("font");
        Mode2.innerText=`أرقام`;
        Mode2.classList.add("font");
        Back.innerHTML=`خروج`;
        Back.classList.add("font");
    }

    Mode1.addEventListener('click',()=>
    {
        newgamebool = true;
        if(lang == "EN")
        {
            modeing ="letteren";
        }
        else if(lang == "AR")
        {
            modeing ="letterar";
        }
        languagecheck();
        proparities();
       

    });
    Mode2.addEventListener('click',()=>
    {
        modeing ="numbers";
        newgamebool=true;
        languagecheck();
        proparities();
    });

    mid.appendChild(Mode1);
    mid.appendChild(Mode2);
    mid.appendChild(Back);

    mood="play";
    mode='newGame';
});

function playGame()
{
    let btn_new=document.querySelectorAll('.new')
    for (let i = 0; i < btn_new.length; i++) 
    {
        btn_new[i].remove();
        if(loadtext)
            {
                setTimeout(()=>
                    {
                        pause.classList.remove('hide');
                    },1000)

            }
            else 
            {
                setTimeout(()=>
                {
                    pause.classList.remove('hide');
                },3100)
            }

    }
}
/*_________________end newGame button_________________ */

// _______________play__________________
pause.addEventListener('click',()=>
{
    pauseGame();
    pause.classList.add('hide')
    play.classList.remove('hide')
    play.style.pointerEvents = "none";

    let resume =document.createElement('button');
    resume.classList.add('new')
    resume.style.zIndex = 100;
    resume.setAttribute("onclick", "resume()");

    let exit =document.createElement('button');
    exit.classList.add('new')

    exit.addEventListener('click',()=>
    {
        if(!loadtext && LoginMessage == `loginsuccess`)
            {
                fetch("http://127.0.0.1:8000/api/update/", 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ user: userName.innerHTML,level: level_game ,exp: exp_game }),
                })
                .then(response => response.json())
                .then(data=>console.log())
                .catch(error => console.error("Fetch error:", error));
            }



        counterwordsindex=0;
        activeWord=null;
        isPaused=false;
        gameOver=false;
        btn.classList.remove("hide");
        radio_inputs.classList.remove("hide");
        logOut.classList.remove("hide");
        divstage.classList.add("hide");
        numberoflevel = 1;
        stagelevel.innerHTML = `${numberoflevel}`;
        counterwords = 0;
        document.querySelectorAll(".word").forEach(wordElements => 
        {
            container.removeChild(wordElements); 
        });
        if(LoginMessage === `loginsuccess`)
        {
            logOut.style.display="flex";
        }
        stopWordGeneration();
        mode='exit';
        back();
    })

    if (lang=="EN") 
    {
        resume.innerText=`Resume`
        resume.classList.remove("font");
        exit.innerText=`Exit`
        exit.classList.remove("font");
    }
    else if (lang=="AR") 
    {
        resume.innerText=`استئناف اللعب`
        resume.classList.add("font");
        exit.innerText=`خروج من اللعبة`
        exit.classList.add("font");
    }

    mid.appendChild(resume);
    mid.appendChild(exit);

    mood='resume';
})

function resume()
{
    resumeGame();
    if ( mood == 'resume')
    {
        let btn_new=document.querySelectorAll('.new')
        for (let i = 0; i < btn_new.length; i++) 
        {
            btn_new[i].remove();
        }
        play.classList.add('hide')
        pause.classList.remove('hide')
    }
    mood="play";
}
play.addEventListener('click',()=>
{
    resumeGame();
    resume();
});
// ________________end play______________

/*_______________________General function_________________________ */
function hideBtns()
{
    for (let i = 0; i < btns.length; i++)
    {
        btns[i].classList.add('hide');
    }
}

/* ______________setting button__________ */
setting.addEventListener('click',function ()
{

    hideBtns();
    let musicbtn = document.createElement('button');
    musicbtn.classList.add('new')
    musicbtn.classList.add("inner_set");
    musicbtn.classList.add('music')
    musicbtn.setAttribute('onclick','musicplay()');

    const divSpeed = document.createElement("div");
    divSpeed.classList.add('new');
    divSpeed.classList.add('divSpeed');
    divSpeed.style.textAlign = "center";
    
    const buttonspeed = document.createElement("button");
    buttonspeed.innerHTML = `Game Speed`;
    buttonspeed.classList.add("inner_set");

    const innerdiv = document.createElement("div");
    
    const inputrange = document.createElement("input");
    inputrange.type = "range";
    inputrange.min = "10"; 
    inputrange.max = "100";
    inputrange.value = "50";
    inputrange.step = "10"; 
    inputrange.style.zIndex = "100";
    inputrange.classList.add("custom-range");

    inputrange.addEventListener("input", function () {
        const min = parseInt(inputrange.min);
        const max = parseInt(inputrange.max);
        const value = ((inputrange.value - min) / (max - min)) * 100; // Adjusted for the new range
        inputrange.style.background = `linear-gradient(to right, #00e0c6 ${value}%, #ccc ${value}%)`;
        spanvalue.innerHTML = inputrange.value + "%";
    });
    
    const initialValue = ((inputrange.value - inputrange.min) / (inputrange.max - inputrange.min)) * 100;
    inputrange.style.background = `linear-gradient(to right, #00e0c6 ${initialValue}%, #ccc ${initialValue}%)`;

    const spanvalue = document.createElement("span");
    spanvalue.classList.add("speedvalue");
    spanvalue.innerHTML = inputrange.value + "%";

    let status = true;
    buttonspeed.addEventListener("click",()=>
    {
        if(status)
        {
            innerdiv.classList.add("hide");
            status = false;
        }
        else
        {
            innerdiv.classList.remove("hide");
            status = true;
        }
    });
    
    let Back =document.createElement('button');
    Back.classList.add("inner_set");
    Back.classList.add('new')

    Back.addEventListener('click',()=>
    {
        back();
    })
    if (lang=="EN")
    {
        if(checkmusicon)
        {
            musicbtn.innerHTML=`Pause Music`
            musicbtn.classList.remove("font");
        }
        else
        {
            musicbtn.innerHTML=`Music`
            musicbtn.classList.remove("font");
        }
        buttonspeed.innerHTML = `Game Speed`;
        buttonspeed.classList.remove("font");
        Back.innerHTML=`Back`
        Back.classList.remove("font");
    }
    else if (lang=="AR")
    {
        if(checkmusicon)
        {
            musicbtn.textContent = 'إيقاف الموسيقى';
            musicbtn.classList.add("font");
        }
        else
        {

            musicbtn.textContent = 'موسيقى';
            musicbtn.classList.add("font");
        }
        buttonspeed.innerHTML = `سرعة اللعبة`;
        buttonspeed.classList.add("font");
        Back.innerHTML=`خروج`;
        Back.classList.add("font");
    }

    if(LoginMessage == "loginsuccess" && !logout_speed_bool)
    {
        divSpeed.classList.remove("hide");
    }
    else
    {
        divSpeed.classList.add("hide");

    }
    mid.appendChild(musicbtn);
    mid.appendChild(Back);
    mode="settings";
});
/*______________________________end setting button________________________*/

//______________music________________
function musicplay()
{
    let muc =document.getElementsByClassName('music')[0];
    const music = document.getElementById('music');
    muc.classList.add("inner_muc");
    if (music.paused)
    {
        checkmusicon = true;
        music.volume=0.3;
        music.play();
        if (lang=="EN") 
        {
            muc.textContent = 'Pause Music';
            muc.classList.remove("font");
        }
        else if (lang=="AR")
        {
            muc.textContent = 'إيقاف الموسيقى';
            muc.classList.add("font");
            
        }
    }
    else
    {
        music.pause();
        checkmusicon = false;
        if (lang=="EN") 
        {
            muc.textContent = 'Music';
            muc.classList.remove("font");
        }
        else if (lang=="AR") 
        {
            muc.textContent = 'موسيقى';
            muc.classList.add("font");
        }
    }
}
// _____________end music____________

/* ___________stats button____________ */
function createChart() {
    const canvas = document.querySelector('.wordStatsChart');
    canvas.style.width = '480px';
    canvas.style.height = '720px';
  
    const data = {
      labels: ['S 1', 'S 2', 'S 3', 'S 4', 'S 5', 'S 6'],
      datasets: [{
        label: 'Number of Words Typed',
        data: statsScore,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
      }]
    };
  
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            min: 0,         
            max: 100,       
            ticks: {
              stepSize: 10, 
              callback: function(value) {
                return value + ' W'; 
              }
            }
          }
        }
      }
    };
  
    myChart = new Chart(canvas, config);
    myChart.resize();
    canvas.style.zIndex = "32";
  }
btns[2].addEventListener("click",()=>
{
    hideBtns();
    createChart();
    arrowStats.classList.remove("hide");
    LOGO.style.opacity = 0.1;
    mode="stats";
});
arrowStats.addEventListener("click",()=>
{
    back();
});
/*__________end stats button_____________ */

/* _________about button__________ */
btns[3].addEventListener("click",()=>
{
    hideBtns();
    about.classList.remove("hide");
    LOGO.classList.add('hide');
    mode="about";
});
arrow.addEventListener("click",()=>
{
    mode="about";
    back();
    LOGO.classList.remove('hide');
});
/* __________end about button___________ */

/*_________________ Load your text button__________________ */
let loadtext = false;
let textarea;
let play_load;
let Back_load;
let msg;
btns[4].addEventListener("click",()=>
{
    loadtext = true;
    hideBtns();
    textarea = document.createElement("textarea");
    textarea.setAttribute("cols", "50");
    textarea.setAttribute("rows", "10");
    textarea.classList.add("load"); 

     msg= document.createElement("div");
    msg.classList.add("error-message");

    play_load = document.createElement('button');
    play_load.classList.add('new');

    play_load.addEventListener("click",()=>
    {

        newgamebool = false;
        activeWord=null;
        isPaused=false;
        gameOver=false;
        if(textarea.value != "")
        {
            radio_inputs.classList.add("hide");
            btn.classList.add("hide");
            LOGO.style.opacity='0';
            stage.setAttribute("font-weight",600);

            animateWords();
            textarea.remove();
            playGame();
            stopParticle='stop';
            logOut.style.display = `none`;
            msg.classList.add("hide");
            
        }
        else
        {
            appendMessage();
            empty = true;
        }
    });

    Back_load =document.createElement('button');
    Back_load.classList.add('new');

    Back_load.addEventListener("click",()=>
    {
        isPaused=false;
        gameOver=false;
        msg.classList.add("hide")
        back();
    });

    if (lang=="EN") 
    {
        textarea.setAttribute("placeholder", `Load your text here....\nHint: Put a space between each word.`);
        textarea.classList.remove("font");
        play_load.innerText=`Play`;
        play_load.classList.remove("font");
        Back_load.innerText=`Back`
        Back_load.classList.remove("font");
        msg.innerHTML = "Error: Please enter some text.."
        msg.style.fontSize = "16px"


        
    }
    else if (lang=="AR") 
    {
        textarea.setAttribute("placeholder", "...أكتب النص الخاص بك هنا \nتلميح: ضع مسافة بين كل كلمة");
        textarea.classList.add("font");
        textarea.classList.add("right-aligned");
        play_load.innerHTML=`بدأ اللعب`;
        play_load.classList.add("font");
        Back_load.innerHTML=`خروج`;
        Back_load.classList.add("font");
        msg.innerHTML = "...خطأ: يرجى إدخال نص"
        msg.style.fontSize = "20px"

    }

    mid.appendChild(textarea);
    mid.appendChild(play_load);
    //______________ function to change value ___________
    function waitForEmptyToChange(callback, interval = 100)
    {
        const intervalId = setInterval(() => {
            if (empty === true) 
            { 
                clearInterval(intervalId); 
                callback(); 
            }
        }, interval);
    }
    function appendMessage() 
    {
        mid.appendChild(msg);
    }
    mid.appendChild(Back_load);

    mode="load";
});
/* ___________end load your text button____________ */







/*________________ back function ________________ */
function back()
{
    LOGO.style.opacity='1';

    let btn_new=document.querySelectorAll('.new');
    for (let i = 0; i < btns.length; i++) {
        if (mode==="newGame") 
        {
            if (i<btn_new.length) {
                btn_new[i].remove();
            }
            btns[i].classList.remove('hide')
        }
        else if (mode==='settings') 
        {
            if (i<btn_new.length) 
            {
                btn_new[i].remove()
            }
            btns[i].classList.remove('hide')
        }
        else if (mode==='exit') {
            play.classList.add('hide');
            bool = true;
            if (i<btn_new.length) 
            {
                btn_new[i].remove()
            }
            btns[i].classList.remove('hide')
            stopParticle=null;
            mood="home";

        }
        else if (mode=="load")
        {
            let load = document.getElementsByClassName("load")[0];
            if (i<btn_new.length) 
            {
                btn_new[i].remove()
            }
            if (i===0)
            {
                load.remove();
            }
            btns[i].classList.remove('hide');
        }
        else if (mode=="about")
        {
            about.classList.add("hide");
            btns[i].classList.remove('hide');
        }
        else if (mode=="stats")
        {
           if (i==0) 
            {
               myChart.destroy();
            }

            let wordChart=document.querySelector(".wordStatsChart");
            btns[i].classList.remove('hide');
            arrowStats.classList.add("hide");
            myChart=null;
            wordChart.style.zIndex="-16";
        }
    }
    mode="newGame" ;
    mood="home";
}
/*________________end back function ________________ */


// // _____________________Level Experience System Variables_______________________
          // Current level
let xpToNextLevel = 100;   
const levelMultiplier = 1.5;
const stats = 
{
    finalScore: "000000",
    waveReached: `${numberoflevel}`
};
const progressFill = document.querySelector(".progress-fill");
const progressLabel = document.querySelector(".progress-label");
function gainExperience(points)
{

    exp_game += points;
    stats.finalScore = parseInt(stats.finalScore) + 3;
    while (exp_game >= xpToNextLevel) 
    {
        exp_game -= xpToNextLevel; 
        level_game++;             
        xpToNextLevel = Math.floor(xpToNextLevel * levelMultiplier);
    }
    leveluser.innerText = level_game;

    updateProgressBar();
    
}
function updateProgressBar()
{
    let progressPercent = (exp_game / xpToNextLevel) * 100;
    progressFill.style.width = `${progressPercent}%`; 
    progressLabel.innerText = `${Math.floor(progressPercent)}%`; 
}
// _____________________End Level Experiance_______________________




//______________________________ end mid editing_____________________________









//__________________________________________MID CANVAS______________________________________
window.requestAnimationFrame = (function() {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
})();

/**
 * Vector
 */
function Vector(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector.add = function(a, b) {
    return new Vector(a.x + b.x, a.y + b.y);
};

Vector.sub = function(a, b) {
    return new Vector(a.x - b.x, a.y - b.y);
};

Vector.scale = function(v, s) {
    return v.clone().scale(s);
};

Vector.random = function() {
    return new Vector(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
    );
};

Vector.prototype = {
    set: function(x, y) {
        if (typeof x === 'object') {
            y = x.y;
            x = x.x;
        }
        this.x = x || 0;
        this.y = y || 0;
        return this;
    },

    add: function(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    },

    sub: function(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    },

    scale: function(s) {
        this.x *= s;
        this.y *= s;
        return this;
    },

    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    lengthSq: function() {
        return this.x * this.x + this.y * this.y;
    },

    normalize: function() {
        var m = Math.sqrt(this.x * this.x + this.y * this.y);
        if (m) {
            this.x /= m;
            this.y /= m;
        }
        return this;
    },

    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    angleTo: function(v) {
        var dx = v.x - this.x,
            dy = v.y - this.y;
        return Math.atan2(dy, dx);
    },

    distanceTo: function(v) {
        var dx = v.x - this.x,
            dy = v.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    },

    distanceToSq: function(v) {
        var dx = v.x - this.x,
            dy = v.y - this.y;
        return dx * dx + dy * dy;
    },

    lerp: function(v, t) {
        this.x += (v.x - this.x) * t;
        this.y += (v.y - this.y) * t;
        return this;
    },

    clone: function() {
        return new Vector(this.x, this.y);
    },

    toString: function() {
        return '(x:' + this.x + ', y:' + this.y + ')';
    }
};


/**
 * Particle
 */
function Particle(x, y, radius) {
    Vector.call(this, x, y);
    this.radius = radius;

    this._latest = new Vector();
    this._speed  = new Vector();
}

Particle.prototype = Object.assign(Object.create(Vector.prototype), {
    addSpeed: function(d) {
        this._speed.add(d);
    },

    update: function() {
        if (this._speed.length() > 12) this._speed.normalize().scale(12);

        this._latest.set(this);
        this.add(this._speed);
    }
});

// Initialize
(function() {


    var BACKGROUND_COLOR = 'rgba(11, 51, 56, 1)',

    PARTICLE_RADIUS  = 1;


// Vars
var canvas, context,
    bufferCvs, bufferCtx,
    screenWidth, screenHeight,
    particles = [],
    grad;






// Event Listeners

function resize(e) {
    screenWidth  = canvas.width  = 480;
    screenHeight = canvas.height = 720;
    bufferCvs.width  = screenWidth;
    bufferCvs.height = screenHeight;
    context   = canvas.getContext('2d');
    bufferCtx = bufferCvs.getContext('2d');

    var cx = canvas.width * 0.5,
        cy = canvas.height * 0.5;

    grad = context.createRadialGradient(cx, cy, 0, cx, cy, Math.sqrt(cx * cx + cy * cy));
    grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
}

// Functions

function addParticle(num) {
    var i, p;


        for (i = 0; i < num; i++) {
            p = new Particle(
            Math.floor(Math.random() * screenWidth - PARTICLE_RADIUS * 2) + 1 + PARTICLE_RADIUS,
            Math.floor(Math.random() * screenHeight - PARTICLE_RADIUS * 2) + 1 + PARTICLE_RADIUS,
            PARTICLE_RADIUS
        );
        p.addSpeed(Vector.random());
        particles.push(p);

}
}



function checkParticleBounds(p) {
    return p.x < 0 || p.x > screenWidth || p.y < 0 || p.y > screenHeight;
}

function handleParticleBounds() {
    var i, len;
    for (i = 0, len = particles.length; i < len; i++) {
        if (checkParticleBounds(particles[i])) {
            particles.splice(i, 1);
            len--;
            i--;
            // Add a new particle to replace the one that left
            var newParticle = new Particle(
                Math.floor(Math.random() * screenWidth - PARTICLE_RADIUS * 2) + 1 + PARTICLE_RADIUS,
                Math.floor(Math.random() * screenHeight - PARTICLE_RADIUS * 2) + 1 + PARTICLE_RADIUS,
                PARTICLE_RADIUS
            );
            newParticle.addSpeed(Vector.random());
            particles.push(newParticle);
        }
    }
}

// Init

canvas  = document.getElementById('c');
bufferCvs = document.createElement('canvas');

window.addEventListener('resize', resize, false);
resize(null);


addParticle(100);

// Start Update

var loop = function() {
    var i, len, g, p;

    context.save();
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, screenWidth, screenHeight);
    context.fillStyle = grad;
    context.fillRect(0, 0, screenWidth, screenHeight);
    context.restore();



    bufferCtx.save();
    bufferCtx.globalCompositeOperation = 'destination-out';
    bufferCtx.globalAlpha = 0.35;
    bufferCtx.fillRect(0, 0, screenWidth, screenHeight);
    bufferCtx.restore();

    len = particles.length;
    bufferCtx.save();
    bufferCtx.fillStyle = bufferCtx.strokeStyle = '#fff';
    bufferCtx.lineCap = bufferCtx.lineJoin = 'round';
    bufferCtx.lineWidth = PARTICLE_RADIUS * 2;
    bufferCtx.beginPath();
    for (i = 0; i < len; i++) {
        p = particles[i];
        p.update();
        bufferCtx.moveTo(p.x, p.y);
        bufferCtx.lineTo(p._latest.x, p._latest.y);
    }
    bufferCtx.stroke();
    bufferCtx.beginPath();
    for (i = 0; i < len; i++) {
        p = particles[i];
        bufferCtx.moveTo(p.x, p.y);
        bufferCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
    }
    bufferCtx.fill();
    bufferCtx.restore();

    // Handle particles that leave the canvas
    handleParticleBounds();

    if (stopParticle!='stop') {

        context.drawImage(bufferCvs, 0, 0);
    }

    requestAnimationFrame(loop);
};
loop();

})();


// ___________________________________________BG CANVAS___________________________________


ready(function() {
    initializeBackground();
  });

  var resizeTimeout;
  var resizeCooldown = 500;
  var lastResizeTime = Date.now();


    function initializeBackground() {//edit
        canvas = document.getElementById("stars");

        // Set canvas size to window dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Handle window resize
        window.addEventListener("resize", function() {
        // Avoid resizing when the window size is too small
        if (window.innerWidth < 1 || window.innerHeight < 1) {
            return;
        }

        if (Date.now() - lastResizeTime < resizeCooldown && resizeTimeout) {
            clearTimeout(resizeTimeout);
            delete resizeTimeout;
        }

        lastResizeTime = Date.now();
        canvas.style.display = "none";

        resizeTimeout = setTimeout(function() {
            fadeIn(canvas, 100);
            initializeStars(); // Reinitialize stars after resizing
        }, 100);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        });

        initializeStars();
        (window.requestAnimationFrame && requestAnimationFrame(paintLoop)) ||
        setTimeout(paintLoop, ms);
    }




  var canvas;
  var stars = [];

  function rand(max) {
    return Math.random() * max;
  }

  function Star(canvas, size, speed) {
    this.ctx = canvas.getContext("2d");
    this.size = size;
    this.speed = speed;
    this.x = rand(window.innerWidth);
    this.y = rand(window.innerHeight);
  }

  Star.prototype.animate = function(delta) {
    this.x += this.speed * delta;
    this.y -= this.speed * delta;
    if (this.y < 0) {
      this.y = window.innerHeight;
    }
    if (this.x > window.innerWidth) {
      this.x = 0;
    }
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  };

  function initializeStars() {
    var winArea = window.innerWidth * window.innerHeight;
    var smallStarsDensity = 0.0001;
    var mediumStarsDensity = 0.00005;
    var largeStarsDensity = 0.00002;
    var smallStarsCount = winArea * smallStarsDensity;
    var mediumStarsCount = winArea * mediumStarsDensity;
    var largeStarsCount = winArea * largeStarsDensity;
    stars = [];
    for (var i = 0; i < smallStarsCount; i++) {
      stars.push(new Star(canvas, 1, 30));
    }

    for (var i = 0; i < mediumStarsCount; i++) {
      stars.push(new Star(canvas, 2, 20));
    }

    for (var i = 0; i < largeStarsCount; i++) {
      stars.push(new Star(canvas, 3, 10));
    }
  }



    function drawStars(delta) { //edit
        if (stars.length === 0) {
        return;  // No stars to animate, exit early.
        }

        for (var i = 0; i < 50; i++) 
        {
            if (stars[i]) 
            { // Ensure the star object exists
            stars[i].animate(delta);
            }
        }
    }


  var ms = 16;
  var lastPaintTime = 0;
  function paintLoop(timestamp) {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    var delta =
      (window.requestAnimationFrame ? timestamp - lastPaintTime : ms) / 1000;
    if(delta > 0.05){
      delta = 0.05;
    }
    drawStars(delta);
    (window.requestAnimationFrame && requestAnimationFrame(paintLoop)) ||
      setTimeout(paintLoop, ms);
    lastPaintTime = timestamp;
  }

  function fadeIn(element, duration, callback) {
    element.style.opacity = 0;
    element.style.display = "block";

    var startTime = Date.now();
    var tick = function() {
      var newOpacity = (Date.now() - startTime) / duration;
      if (newOpacity > 1) {
        newOpacity = 1;
        callback && callback();
      } else {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
          setTimeout(tick, 16);
      }

      element.style.opacity = newOpacity;
    };
    tick();
  }


  function ready(fn) {
    if (
      document.attachEvent
        ? document.readyState === "complete"
        : document.readyState !== "loading"
    ) {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }




//_____________________________________________END MID CANVAS_________________________________

// //__________________ showmessage when lose ____________________
function showmessage()
{
    counterwordsindex=0;
    // Create the main stats container
    const statsContainer = document.createElement("div");
    statsContainer.style.position = "absolute";
    statsContainer.style.top = "50%";
    statsContainer.style.left = "50%";
    statsContainer.style.transform = "translate(-50%, -50%)";
    statsContainer.style.background = "#03262B";
    statsContainer.style.border = "2px solid #00FFCE";
    statsContainer.style.borderRadius = "10px";
    statsContainer.style.padding = "20px";
    statsContainer.style.textAlign = "center";
    statsContainer.style.boxShadow = "0 0 20px #00FFCE";
    statsContainer.style.color = "#00FFCE";
    statsContainer.style.fontFamily = "Arial, sans-serif";
    const title = document.createElement("h2");
    title.style.margin = "0";
    title.style.fontSize = "24px";

    const finalScore = document.createElement("p");
    finalScore.style.margin = "10px 0";
    finalScore.style.fontSize = "18px";

    const wave = document.createElement("pre");
    wave.style.margin = "10px 0";
    wave.style.fontSize = "18px";

    const accuracyy = document.createElement("p");
    accuracyy.style.margin = "10px 0";
    accuracyy.style.fontSize = "18px";

    const containerbutton = document.createElement("div");
    containerbutton.classList.add("flex");

    const button = document.createElement("p");
    const button2 = document.createElement("p");

    if(lang == "EN")
    {
        title.textContent = "GAME STATS";
        finalScore.textContent = `FINAL SCORE: ${score}`;
        wave.innerHTML = ` YOU REACHED: WAVE 00${numberoflevel}`;
        accuracyy.textContent = `ACCURACY: ${accuracy.toFixed(2)}%`;
        button2.innerHTML = `Restart`;
        button.innerHTML = `EXIT`;
        title.classList.remove("font");
        finalScore.classList.remove("font");
        wave.classList.remove("font");
        accuracyy.classList.remove("font");
        button2.classList.remove("font");
        button.classList.remove("font");
    }
    else
    {
        title.textContent = "حالة اللعبة";
        finalScore.textContent = `${score} : النتيجة النهائية`;
        wave.innerHTML = ` 00${numberoflevel}لقد وصلت الى : المستوى`;
        accuracyy.textContent = `${accuracy.toFixed(2)}% : الدقة`;
        button2.innerHTML = `اعاده اللعبة`;
        button.innerHTML = `خروج`;
        title.classList.add("font");
        finalScore.classList.add("font");
        wave.classList.add("font");
        accuracyy.classList.add("font");
        button2.classList.add("font");
        button.classList.add("font");
    }




    button.classList.add("exit");
    button.classList.add("btn");
    button2.classList.add("btn");
    button2.classList.add("exit");
    if(loadtext)
    {
        wave.classList.add("hide");
    }
    else 
    {
        containerbutton.appendChild(button2);
        wave.classList.remove("hide");
    }
    containerbutton.appendChild(button);

    button.addEventListener("click",()=>
    {
        counterwords =0;
        activeWord=null;
        // --------------------------------------
        isPaused=false;
        gameOver=false;
        // --------------------------------------
        statsContainer.classList.add("hide");
        btn.classList.remove("hide");
        radio_inputs.classList.remove("hide");
        logOut.classList.remove("hide");
        divstage.classList.add("hide");
        numberoflevel = 1;
        stagelevel.innerHTML = `${numberoflevel}`;
        document.querySelectorAll(".word").forEach(wordElements => 
        {
            container.removeChild(wordElements);  
        });
        
        if(LoginMessage === `loginsuccess`)
        {
            logOut.style.display="flex";
        }
        score=0;
        accuracy = 0;
        mode='exit';
        back();

    });
    button2.addEventListener("click",()=>{
        activeWord=null;
        // -----------------------------------
        isPaused=false;
        gameOver=false;
        
        // -----------------------------------
        accuracy=0;
        correctChars = 0;
        incorrectChars = 0;
        numberoflevel=1;
        counterwords =0;
        
        document.querySelectorAll(".word").forEach(wordElements => 
            {
                container.removeChild(wordElements);  
            });
        statsContainer.classList.add("hide");
        pause.classList.remove('hide')
        restartGame();
        

    });
       

    statsContainer.appendChild(title);
    statsContainer.appendChild(finalScore);
    statsContainer.appendChild(wave);
    statsContainer.appendChild(accuracyy);

    statsContainer.appendChild(containerbutton);

    play.classList.add('hide')
    pause.classList.add('hide')
    mid.appendChild(statsContainer);

}
// //__________________END showmessage function ____________________


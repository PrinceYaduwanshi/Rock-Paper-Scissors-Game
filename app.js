let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscoreupdate=document.querySelector("#user-score");
const compscoreupdate=document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const elements=["rock" , "paper" , "scissors"];
    let randIdx= Math.floor(Math.random() * 3);
    return elements[randIdx];
}

const drawGame =()=>{
    msg.innerText="Game Draw !!";
    msg.style.backgroundColor="#081b31";
}

const playgame = (userchoice)=>{
    const compchoice=genCompChoice();
    if(userchoice===compchoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice === "rock" ){
            userWin= compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userWin= compchoice === "scissors" ? false : true; 
        }else{
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
    

};

const showWinner =(userWin ,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userscoreupdate.innerText=userScore;
        msg.innerText=`You Won !! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compscoreupdate.innerText=compScore;
        msg.innerText=`You lost !! ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor="red"
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})

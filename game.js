let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");
//generate computer choice
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const rndmIdx=Math.floor(Math.random()*3);
    return options[rndmIdx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        user.innerText=userScore;
    }
    else{
        msg.innerText=`You lost, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        comp.innerText=compScore;
    }
}
const drawGame=()=>{
    msg.innerText="Game was draw. Play again";
    msg.style.backgroundColor="#f16017";
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    console.log("user",userChoice);
    console.log("comp",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors" ? false : true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock" ? false : true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
})
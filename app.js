const reward = document.querySelector('.reward');
const counter = document.querySelector('.counter');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const body = document.querySelector('body');
const report = document.querySelector('.report')
let score = 0;
let rewardCounter = 0;
let number = Math.floor((Math.random()*10)+1)


increase.addEventListener('click',function(){
    score++;
   
    counter.textContent = score;
    counter.style.color = 'pink';
    rewardCounter +=2;
    reward.textContent = "$"+rewardCounter;
    if(score===number){
        report.textContent = 'You earned ' +rewardCounter+ ' dollars';

        resetAll();
        body.classList.remove('body');
        body.style.backgroundColor = "rgba(125,125,125,0.6)";
        increase.disabled = true;
       
    }
})

reset.addEventListener('click',function(){
   resetAll();
       reward.textContent =0;
       counter.textContent=0;
        number = Math.floor((Math.random()*10)+1)
        report.textContent ='';




})

function resetAll(){
    score=0;
    rewardCounter=0;
    counter.style.color="white";
    body.classList.add('body');
    increase.disabled = false;
   

   



}
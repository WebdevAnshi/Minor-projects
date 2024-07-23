
const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setdate () {    //creating a function named setdate
    const now = new Date(); //to get current date


    const seconds = now.getSeconds(); //to get seconds
    const secondsDegrees = ((seconds / 60)* 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds)

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60)* 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log(mins)

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12)* 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    // console.log(hours)
}

setInterval(setdate, 1000)   //running the function at every 1 second using setInterval.
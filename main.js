let userName = prompt(`Hi! What is your name?`);

    if (userName) {
        console.log(`Hello ${userName}`);
    } else { 
            console.log(`Hello`);
        }

let userQuestion = prompt(`Please ask a question.`);
    console.log(`${userName} thank you for asking: ${userQuestion}.`);

let randomNumber = Math.floor(Math.random()*8);

let eightBall =  '';

switch (randomNumber) {
    case 0:
    eightBall = `Better not tell you now.`;
    break;
    case 1:
    eightBall = `Concentrate and ask again.`;
    break;
    case 2:
    eightBall= `Reply hazy try again.`;
    break;
    case 3: 
    eightBall = `Cannot predict now.`;
    break;
    case 4: 
    eightBall = `My reply is no.`;
    break;
    case 5:
    eightBall = `My sources say no.`;
    break;
    case 6:
    eightBall = `Outlook not so good.`;
    break;
    case 7:
    eightBall = `Signs point to yes!`;
    break;
}
console.log(`The magic eightball predicts: ${eightBall}`);

/*
if (randomNumber===0) {
    return `Better not tell you now.`;
}  else if (randomNumber===1) {
    return `Concentrate and ask again.`;
}  else if (randomNumber===2) {
    return `Reply hazy, try again.`;
}  else if (randomNumber===3) {
    return `Cannot predict now.`;
}  else if (randomNumber===4) {
    return `My reply is no.`;
}  else if (randomNumber===5) {
    return `My sources say no.`;
}  else if (randomNumber===6) {
    return `Outlook not so good`;
}  else if (randomNumber===7) {
    return `Signs point to yes!`;
}
console.log(`${eightBall}`);
*/


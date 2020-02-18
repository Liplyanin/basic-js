module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {


let resultTturns = Math.pow(2, disksNumber) -1;
let resultSeconds = resultTturns / (turnsSpeed/3600);

return {
    seconds: resultSeconds,
    turns: resultTturns
}
}
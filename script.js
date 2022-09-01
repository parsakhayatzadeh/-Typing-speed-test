const theTimer = document.querySelector('.timer');
const testArea = document.querySelector('#test-area');
const resetBtn = document.querySelector('#reset');
const testWrapper = document.querySelector('.test-wrapper');
const originText = document.querySelector('#origin-text p').innerHTML;



var timer = [0, 0, 0, 0];
var timerRunnig = true;
var interval;

function leadingZero(time) {

    if (time <= 9) {
        time = "0" + time;
    }

    return time;
}


function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);

    theTimer.innerHTML = currentTime;

    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60);
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));



}

function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength == 0 && timerRunnig) {

        timerRunnig = false;
        interval = setInterval((runTimer), 10)


    }

}

function check() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText) {

        testWrapper.style.borderColor = 'green';
        clearInterval(interval);
        
    }else{
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = 'yellow'
            
        }else{
            testWrapper.style.borderColor = 'red'

        }


    }


}

function reset() {
    timer = [0,0,0,0];
    theTimer.innerHTML = '00:00:00';
    testArea.value = '';
    timerRunnig = true;
    clearInterval(interval);


    
}



testArea.addEventListener('keypress', start);
testArea.addEventListener('keyup', check);
resetBtn.addEventListener("click" , reset);
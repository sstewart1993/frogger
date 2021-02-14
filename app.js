document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('.grid div')
    const timeLeft = document.querySelector("#time-left")
    const result = document.querySelector('#result')
    const startBtn = document.querySelector('#button')
    const carsleft = document.querySelector('.car-left')
    const carsright = document.querySelector('.car-right')
    const logsleft = document.querySelector('.log-left')
    const logsright = document.querySelector('.log-right')
    const width = 9
    let currentIndex = 76
    let timerId

    // render frog on starting point
    squares[currentIndex].classList.add('frog')

    // write a function that will move the frog
    function moveFrog(e){
        squares[currentIndex].classList.remove('frog')
        switch(e.keyCode){
            case 37:
                if(currentIndex % width !== 0) currentIndex -=1
                break
            case 38:
                if(currentIndex - width >= 0) currentIndex -= width
                break
            case 39:
                if(currentIndex % width < width-1) currentIndex +=1
                break
            case 40:
                if(currentIndex + width < width * width) currentIndex += width
                break
        }
        squares[currentIndex].classList.add('frog')
        lose() 
        win()
    }

    // move cars
    function autoMoveCars(){
        carsLeft.forEach(carLeft => moveCarLeft(carLeft))
        carsRight.forEach(carRight => moveCarRight(carRight))
    }

    // move the car to the left
    function moveCarLeft(carLeft){
    switch(true){
        case carleft.classList.contains('c1'):
            carleft.classList.remove('c1')
            carLeft.classList.add('c2')
            break
        case carleft.classList.contains('c2'):
            carleft.classList.remove('c2')
            carLeft.classList.add('c3')
            break
        case carleft.classList.contains('c3'):
            carleft.classList.remove('c3')
            carLeft.classList.add('c1')
            break
    }
    }

    // move car to the right on a time loop
    function moveCarRight(carRight){
        switch(true){
            case carRight.classList.contains('c1'):
                carRight.classList.remove('c1')
                carRight.classList.add('c3')
                break
            case carRight.classList.contains('c2'):
                carRight.classList.remove('c2')
                carRight.classList.add('c1')
                break
            case carRight.classList.contains('c3'):
                carRight.classList.remove('c3')
                carRight.classList.add('c2')
                break
        }
        }

    // move the logs
    function autoMoveLogs(){
        logsLeft.forEach(logLeft => moveLogLeft(logLeft))
        logsRight.forEach(logRight => moveLogRight(logRight))
    }

    // move the logs to the left
    function moveLogLeft(logLeft){
    switch(true){
        case logleft.classList.contains('l1'):
            logleft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logleft.classList.contains('l2'):
            logleft.classList.remove('l2')
            logLeft.classList.add('l3')
            break
        case logleft.classList.contains('l3'):
            logleft.classList.remove('l3')
            logLeft.classList.add('l4')
            break
        case logleft.classList.contains('l4'):
            logleft.classList.remove('l4')
            logLeft.classList.add('l5')
            break
        case logleft.classList.contains('l5'):
            logleft.classList.remove('l5')
            logLeft.classList.add('l1')
            break
    }
    }

    // move log to the right on a time loop
    function moveLogRight(logRight){
        switch(true){
            case logRight.classList.contains('l1'):
                logRight.classList.remove('l1')
                logRight.classList.add('l5')
                break
            case logRight.classList.contains('l2'):
                logRight.classList.remove('l2')
                logRight.classList.add('l1')
                break
            case logRight.classList.contains('l3'):
                logRight.classList.remove('l3')
                logRight.classList.add('l2')
                break
            case logRight.classList.contains('l4'):
                logRight.classList.remove('l4')
                logRight.classList.add('l3')
                break
            case logRight.classList.contains('l5'):
                logRight.classList.remove('l5')
                logRight.classList.add('l4')
                break
    }
    }

    // rules to win frogger
    function win(){
        if(squares[4].classList.contains('frog')){
            result.innerHTML = "Winner"
            squares[currentIndex].classList.remove('frog')
            clearInterval(timeId)
            document.removeEventListener('keyup', moveFrog)
        }
    }

    // rules to lose Frogger
    function lose(){
        
    }










})
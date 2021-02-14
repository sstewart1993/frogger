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
        carsRight.forEach(carsRight => movecarsRight(carLeft))
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










})
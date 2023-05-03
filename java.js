let section = document.querySelector(".section2");
let sect2 = document.querySelector(".secondpagediv");



function getRandomColor() {
    const limit_value = 256;
    let red = getRandomNumber(limit_value);
    let green = getRandomNumber(limit_value);
    let blue = getRandomNumber(limit_value);
    return 'rgb(' + red + ' , ' + green + ' , ' + blue + ')'
}

function getRandomNumber(limitValue) {
    let randomNumber = Math.random();
    randomNumber = randomNumber * limitValue;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

function changebgcolor(par) {
    if(par !== null){
        par.style.background = getRandomColor()
        setInterval(function(){
            par.style.background = getRandomColor()
        }, 3000);
    }

} 

changebgcolor(section);
changebgcolor(sect2);





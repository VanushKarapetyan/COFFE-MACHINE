var displaytext = 0
var el = document.getElementById('display');
el.innerText = 'INSERT COIN';
var coin50 = document.getElementsByClassName('coin1')
var coin100 = document.getElementsByClassName('coin2')
var coin200 = document.getElementsByClassName('coin3')
var coin500 = document.getElementsByClassName('coin4')
var a = document.getElementsByClassName('coin')
var sum = 0
function coin1function() {
    displaytext += 50;
    el.innerText = displaytext;
}
function coin2function() {
    displaytext += 100;
    el.innerText = displaytext;
}
function coin3function() {
    displaytext += 200;
    el.innerText = displaytext;
}
function coin4function() {
    displaytext += 500;
    el.innerText = displaytext;
}

$('.cofe1').click(function () {
    if (displaytext >= 100) {
        displaytext -= 100;
        el.innerText = displaytext;
        myfunction2()
    }
    else {
        el.innerText = 'ADD MONEY'
    }
})
$('.cofe2').click(function () {
    if (displaytext >= 250) {
        displaytext -= 250;
        el.innerText = displaytext;
        sum = displaytext
        myfunction2()
    }
})
$('.cofe3').click(function () {
    if (displaytext >= 200) {
        displaytext -= 200;
        el.innerText = displaytext;
        sum = displaytext
        myfunction2()
    }
})
$('.cofe4').click(function () {
    if (displaytext >= 150) {
        displaytext -= 150;
        el.innerText = displaytext;
        sum = displaytext
        myfunction2()
    }
})
$('.cofe5').click(function () {
    if (displaytext >= 200) {
        displaytext -= 200;
        el.innerText = displaytext;
        sum = displaytext
        myfunction2()
    }
})
$('.cofe6').click(function () {
    if (displaytext >= 200) {
        displaytext -= 200;
        el.innerText = displaytext;
        sum = displaytext
        myfunction2()
    }
})
$('.cofe7').click(function () {
    if (displaytext >= 150) {
        displaytext -= 150;
        el.innerText = displaytext;
        sum = displaytext
        myfunction2()
    }
})
$('.cofe8').click(function () {
    if (displaytext >= 150) {
        displaytext -= 150;
        el.innerText = displaytext;
        sum = displaytext
        myfunction2()
    }
})
$('.cofe9').click(function () {
    if (displaytext >= 100) {
        displaytext -= 100;
        el.innerText = displaytext;
        sum = displaytext
        myfunction2()
    }
})
$('.cofe10').click(function () {
    if (displaytext >= 100) {
        displaytext -= 100;
        sum = displaytext
        el.innerText = displaytext;
        myfunction2()
    }
})
function myfunction2() {
    document.querySelector('.coffee-medium__cup').style.display = "block"
    document.querySelector('.coffee-medium__liquid').style.display = "block"
    document.querySelector('.coffee-medium__smoke-one').style.display = "block"
    document.querySelector('.coffee-medium__smoke-two').style.display = "block"
    document.querySelector('.coffee-medium__smoke-three').style.display = "block"
    document.querySelector('.coffee-medium__smoke-for').style.display = "block"
    setInterval(function () {
        document.querySelector('.coffee-medium__liquid').style.display = "none"
        displaytext = ''
        displaytext = 'COFFE IS READY'
        el.innerText = displaytext;
        setInterval(function () {
            displaytext = ''
            displaytext = sum
            el.innerText = displaytext;
        }, 3000);
    }, 6000);
    
}
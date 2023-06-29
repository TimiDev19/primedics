var button = document.getElementById('theme');
var logo = document.getElementById('logo');
var header = document.querySelector('header');
var nav = document.getElementById('nav');
var nav1 = document.getElementById('nav1');
var nav2 = document.getElementById('nav2');
var home = document.getElementById('home');
var body = document.querySelector('body');
var welcome = document.getElementById('welcome');
var primedics = document.getElementById('primedics');
var hometxt = document.getElementById('hometxt');
var abtbtn = document.getElementById('abtbtn');
var abthead = document.getElementById('abthead');

button.onclick = function theme(){
    if(document.querySelector('header').style.background == 'white'){
        header.style.background = 'rgb(39, 36, 36)';
        header.style.boxShadow = '0 0 1rem white';
        logo.style.color = 'white';
        nav.style.color = 'white';
        nav1.style.color = 'white';
        nav2.style.color = 'white';
        home.style.background = 'rgb(39, 36, 36)';
        welcome.style.color = 'white';
        body.style.background = 'rgb(39, 36, 36)';
        primedics.style.color = 'white';
        hometxt.style.color = 'white';
        abtbtn.style.background = 'white';
        abtbtn.style.color = 'rgb(39, 36, 36)';
        abtbtn.style.hover = 'box';
        abthead.style.background = 'rgb(39, 36, 36)';
    }
    else{
        header.style.background = 'white';
        header.style.boxShadow = '0 0 1rem black';
        logo.style.color = 'black';
        nav.style.color = 'black';
        nav1.style.color = 'black';
        nav2.style.color = 'black';
        home.style.background = 'white';
        welcome.style.color = 'black';
        body.style.background = 'white';
        primedics.style.color = 'black';
        hometxt.style.color = 'black';
        abtbtn.style.background = 'black';
        abtbtn.style.color = 'white';
        abthead.style.background = 'white';
    }
    
}
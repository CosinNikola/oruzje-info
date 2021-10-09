function modal(src){
    let blur = document.getElementById('blur');
    let img = document.getElementById('image');
    let close = document.getElementById('close'); 
    blur.style.display = "block";
    img.src = src;
    close.onclick = function () {
        blur.style.display = "none";
    }
}
// let naslovi = document.getElementsByClassName('naslovi');
let navItem = document.getElementsByClassName('navItem');
// let sadrzajNaslovnaNasloviSrb = ["O nama", "Informacije", "Korisni linkovi"];
// let sadrzajNaslovnaSrb = [`Sajt Oruzje - Info je nastao od strane zaljubljenika u vatreno oružje, a u nameri da tu ljubav prenesemo na neke nove ljude i nove generacije.Ovaj sajt vam pruža osnovne informacije o najzastupljenijim klasama vatrenog oružja kao i o najzastupljenijim modelima iz pomenutih klasa.
// Nadamo se da će vam boravak na našem sajtu biti zanimljiv i u neku ruku edukativan.
// Dobrodošli!`, `Za sva pitanja i predloge obratite nam se putem mejla na adresu: <br>
// <a href="mailto:oruzje-info@gmail.com" class="korisniLinkovi">oruzje-info@gmail.com</a>`, `<a href="https://www.mod.gov.rs" class="korisniLinkovi">Ministarstvo odbrane</a> <br>
// <a href="http://www.mup.gov.rs/wps/portal/sr/" class="korisniLinkovi">Ministarstvo unutrašnjih poslova</a> <br>
// <a href="https://specijalne-jedinice.com/" class="korisniLinkovi">Specijalne-Jedinice.com</a><br>
// <a href="https://www.zastava-arms.rs/" class="korisniLinkovi">Zastava Oružje</a>`];
// let sadrzajNaslovnaNasloviEng = ["About us", "Info", "Links"];
// let sadrzajNaslovnaEng = [``]
// function language(a){
//     let i = 0;
//     let srbNav = ["Naslovna", "Automatske puske", "Automati", "Snajperske puske", "Oruzje za podrsku", "Pistolji"];
//     let engNav = ["Home", "Assault rifles", "Submachine guns", "Sniper rifles", "Support weapons", "Pistols"];
//     if(a == 0){
//         for (i = 0; i< navItem.length; i++) {
//             navItem[i].innerHTML = srbNav[i];
//         }
//         // while(i < navItem.length){
//         //     navItem[i].innerHTML = srbNav[i];
//         //     i++;
//         // }
        
//         for (i = 0; i< naslovi.length; i++) {
//             naslovi[i].innerHTML = sadrzajNaslovnaNasloviSrb[i];
//         }
//         // while(i < naslovi.length)
//         // {
//         //     naslovi[i].innerHTML = sadrzajNaslovnaNasloviSrb[i];
//         //     i++;
//         // }
//     }
//     else {
//         for (i = 0; i< navItem.length; i++) {
//             navItem[i].innerHTML = engNav[i];
//         }
//         // while(i < navItem.length){
//         //     navItem[i].innerHTML = engNav[i];
//         //     i++;
//         // }
//         for (i = 0; i< naslovi.length; i++) {
//             naslovi[i].innerHTML = sadrzajNaslovnaNasloviEng[i];
//         }
//         // while(i < naslovi.length)
//         // {
//         //     naslovi[i].innerHTML = sadrzajNaslovnaNasloviEng[i];
//         //     i++;
//         // }
//     }
// }

let i = 0;
let pics = document.getElementsByClassName("template");
while(i < pics.length){
    pics[i].title = "Kliknite za uvecanje";
    i++;
}

let ball = document.getElementById('ball');
let frame = document.getElementById('frame');
let check = document.getElementById('check');
let body = document.getElementsByTagName('body')[0];
let header = document.getElementsByTagName('header')[0];
let sadrzaj = document.getElementsByClassName('sadrzaj');
let footer = document.getElementsByTagName('footer')[0];
let optMenu = document.getElementById('optionsMenu');
let korisniLinkovi = document.getElementsByClassName('korisniLinkovi');
let content = document.getElementsByClassName('content');
let logo = document.getElementById('logo');
let menuIcon = document.getElementById('menuIcon');
let socialImg = document.getElementsByClassName('socialImg');
let socialImgSrcB = ["slike/fejsbuk black.png", "slike/instagram black.png", "slike/ptica black.png", "slike/jubito black.png"];
let socialImgSrcW = ["slike/fejsbuk.png", "slike/instagram.png", "slike/ptica.png", "slike/jubito.png"];
let hr = document.getElementsByTagName('hr');
let bannerSadrzaj = document.getElementById('bannerSadrzaj');
let bannerList = document.getElementsByClassName('bannerList');
function modeChange(){
    if(check.checked !== true){
        ball.style.left = "1px";
        frame.style.backgroundColor = "rgba(150,150,150,0.9)";
        frame.style.borderColor = "black";
        ball.style.backgroundColor = "black";
        body.style.background = "url('slike/pozadina.jpg')";
        header.style.backgroundColor = "rgba(150,150,150,0.9)";
        footer.style.backgroundColor = "rgba(150,150,150,0.9)";
        ball.innerHTML = "D";
        ball.style.color = "white";
        optMenu.style.backgroundColor = "rgba(150,150,150)";
        optMenu.style.borderColor = "rgba(150,150,150)";
        optMenu.style.color = "black";
        hamburgerMenu.style.backgroundColor = "rgb(150,150,150)";
        hamburger.src = "slike/hamburger black.png";
        bannerSadrzaj.style.backgroundColor = "rgba(150,150,150,0.9)";
        bannerSadrzaj.style.color = "black";
        bannerHREF.style.color = "black";
        for (let p = 0; p < sadrzaj.length; p++) {
           sadrzaj[p].style.backgroundColor = "rgba(150,150,150,0.9)";
           sadrzaj[p].style.color = "black";
        }
        for (let j = 0; j < navItem.length; j++) {
            navItem[j].style.color = "black";   
            navItem[j].style.borderColor = "black";  
        }

       for (let k = 0; k < content.length; k++) {
           content[k].style.color = "black";
       }
       menuIcon.src = "slike/pngegg.png"
       for (let m = 0; m < socialImg.length; m++) {
        socialImg[m].src = socialImgSrcB[m]; 
        for (let n = 0; n < korisniLinkovi.length; n++) {
           korisniLinkovi[n].style.color = "black";
            
        }      
        for (let q = 0; q < hr.length; q++) {
            hr[q].style.borderColor = "rgb(100,100,100)"; 
        }
        logo.style.color = "black";
    }
    }
    else{
        ball.style.left = "15px";
        frame.style.backgroundColor = "rgba(50,50,50,0.95)";
        frame.style.borderColor = "white";
        ball.style.backgroundColor = "white";
        body.style.background = "url('slike/urb.jpg')";
        header.style.backgroundColor = "rgba(50,50,50,0.95)";
        footer.style.backgroundColor = "rgba(50,50,50,0.95)";
        ball.innerHTML = "L";
        ball.style.color = "black";
        optMenu.style.backgroundColor = "rgba(50,50,50)";
        optMenu.style.borderColor = "rgba(50,50,50)";
        optMenu.style.color = "white";
        hamburgerMenu.style.backgroundColor = "rgb(50,50,50)";
        hamburger.src = "slike/hamburger white.png";
        bannerSadrzaj.style.backgroundColor = "rgba(50,50,50,0.95)";
        bannerSadrzaj.style.color = "white";
        bannerHREF.style.color = "white";
        for (let p = 0; p < sadrzaj.length; p++) {
            sadrzaj[p].style.backgroundColor = "rgba(50,50,50,0.95)";
            sadrzaj[p].style.color = "white";
         }
        for (let j = 0; j < navItem.length; j++) {
            navItem[j].style.color = "white";
            navItem[j].style.borderColor = "white";    
        }
        for (let k = 0; k < content.length; k++) {
            content[k].style.color = "white";
        }
        menuIcon.src = "slike/dropdown bela.png";
        for (let m = 0; m < socialImg.length; m++) {
            socialImg[m].src = socialImgSrcW[m];       
        }
        for (let n = 0; n < korisniLinkovi.length; n++) {
            korisniLinkovi[n].style.color = "white";
         }  
         for (let q = 0; q < hr.length; q++) {
            hr[q].style.borderColor = "white"; 
        }
        logo.style.color = "white";
    }
}

function dropDown(){
    // let optMenu = document.getElementById('optionsMenu');
   optMenu.style.display = (optMenu.style.display === "block") ? 'none' : 'block';
}
// menuIcon.onclick = () => {dropDown();}
let bannerHREF = document.getElementById('bannerLink');
function bannerImgSrb(){
    let banner = document.getElementById('banner');
    let slike = ['slike/banner.jpg', 'slike/banner1.jpg', 'slike/banner2.jpg', 'slike/banner3.jpg','slike/banner4.jpg'];
    let bannerNaslov = document.getElementById('bannerNaslov');
    let bannerTitleSrb = ['AUTOMATSKE PUŠKE', 'AUTOMATI', 'SNAJPERSKE PUŠKE', "ORUŽJE ZA PODRŠKU", 'PIŠTOLJI'];
    let bannerLink = ['automatskePuske.html','automati.html', 'snajperi.html', 'oruzjeZaPodrsku.html', 'pistolji.html'];
    i++;
    if(i > slike.length){i = 1};
    banner.src = slike[i - 1];
    bannerNaslov.innerHTML = bannerTitleSrb[i - 1];
    bannerHREF.href = bannerLink[i - 1];
    setTimeout(bannerImgSrb,2200);
}
function bannerImgEng(){
    let banner = document.getElementById('banner');
    let slike = ['slike/banner.jpg', 'slike/banner1.jpg', 'slike/banner2.jpg', 'slike/banner3.jpg','slike/banner4.jpg'];
    let bannerNaslov = document.getElementById('bannerNaslov');
    let bannerTitleEng = ['ASSAULT RIFLES', 'SUBMACHINE GUNS', 'SNIPER RIFLES', "SUPPORT WEAPONS", 'HANDGUNS'];
    let bannerLink = ['automatskePuske-eng.html','automati-eng.html', 'snajperi-eng.html', 'oruzjeZaPodrsku-eng.html', 'pistolji-eng.html'];
    i++;
    if(i > slike.length){i = 1};
    banner.src = slike[i - 1];
    bannerNaslov.innerHTML = bannerTitleEng[i - 1];
    bannerHREF.href = bannerLink[i - 1];
    setTimeout(bannerImgEng,2200);
}
let bannerPicContent = document.getElementById('bannerPicContent');
let scrollToTop = document.getElementById('scrollToTop');
window.onscroll = function() {scrollVisibility()}; 
body.onscroll = () => {scrollVisibility()};
// function bannerPicVisibility(){
//         if(document.documentElement.scrollTop >270){
//             bannerPicContent.style.display = "none";
//         }
//         else{
//             bannerPicContent.style.display = "flex";
//         }
    
// }

function scrollVisibility(){
    if(document.documentElement.scrollTop > 200){
        scrollToTop.style.visibility = "visible";
    }
    else{
        scrollToTop.style.visibility = "hidden";
    }
}

scrollToTop.onclick = () => {window.scrollTo({top : 0, behavior: 'smooth'})};
// scroll = () =>  {
//     window.scrollTo({top : 0, behavior: 'smooth'});
// }
let hamburger = document.getElementById('hamburger');
let hamburgerMenu = document.getElementById('hamburgerMenu');
function hamburgerToggle(){
    if(hamburgerMenu.style.display == 'flex'){
        hamburgerMenu.style.display = 'none';
    }
    else{
        hamburgerMenu.style.display = 'flex';
    }
}
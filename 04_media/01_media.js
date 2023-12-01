'use strict';

let vedioBox = document.getElementsByClassName('main_media_box');
let vedioContainer = document.getElementsByClassName('main_media_container');
let vedioTitle = document.getElementsByTagName('p');



let vedioAR = [
    {
        title : '[쿠키런: 킹덤] 공식 OST \'너를 찾을게\' MV',
        img : '../img/vedio0.jpg',
        link : '<iframe src="https://www.youtube.com/embed/tFLz40XFwkQ?si=RIj3bAuUkX-NPp1f" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
     {
        title : '쿠키들의 7주년 감사 인사! 🥳 | 쿠키런: 오븐브레이크 |',
        img : '../img/vedio1.jpg',
        link : '<iframe src="https://www.youtube.com/embed/-lGi-AmE-rY?si=EndFg25Yb_TTCK1L" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
     {
        title : 'The Ocean: 샤벳상어의 꿈 - 제니스 (쿠키런: 오븐브레이크 OST the Ocean 공식 뮤직비디오)',
        img : '../img/vedio2.jpg',
        link : '<iframe src="https://www.youtube.com/embed/cY3HxEcwwus?si=_zBq1_QEtfPSXSR8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
     {
        title : '응원 (Go For It!) - 제이레빗 (쿠키런 OST 공식 뮤직비디오)',
        img : '../img/vedio3.jpg',
        link : '<iframe src="https://www.youtube.com/embed/FUW3m4IDwEI?si=nV-FYlzvZJYk8Qtb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
     {
        title : '쿠키와 도전! 💦 용감한 쿠키와 함께하는 용감한 스트레칭! 💪',
        img : '../img/vedio4.jpg',
        link : '<iframe src="https://www.youtube.com/embed/co3VZKpdlDs?si=JH_0JC0DKG7-jBVS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
     {
        title : 'I Want You Every Day - JUDY (쿠키런 OST 공식 뮤직비디오)',
        img : '../img/vedio5.jpg',
        link : '<iframe src="https://www.youtube.com/embed/G73WTqiaXXk?si=dtN2ooRV3Cf7A6NC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
]

for ( let i = 0 ; i < vedioBox.length ; i++ ) {
    let vedioImg = vedioBox[i].getElementsByTagName('img');
    let vedioTitle = vedioBox[i].getElementsByTagName('p');
    vedioImg[0].setAttribute('src',`${vedioAR[i].img}`);
    vedioTitle[0].textContent = vedioAR[i].title;
    vedioBox[i].innerHTML += `${vedioAR[i].link}`
    console.log(vedioBox[i].innerHTML)
}

let vedioBG = document.querySelector('.vedio_bg');
let openVedio;

vedioContainer[0].addEventListener('click',(event)=>{
    const eventOJ = event.target.closest('.main_media_box')
    console.log(eventOJ.children);
    if(vedioContainer[0].contains(eventOJ)){
        openVedio = eventOJ.children[2];
        vedioBG.classList.remove('hidden');
        eventOJ.children[2].style.visibility = "initial";
    }
})
vedioBG.addEventListener('click',(event)=>{
    openVedio.style.visibility = "hidden";
    vedioBG.classList.add('hidden');
    
})

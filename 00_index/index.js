'use strict';
let indexBox = document.getElementById('indexBox');
let backBtn = document.getElementById('backBtn');
let lastSlideBtn, lastSlideBtn2;
let itemNum;

indexWrite();

// 인덱스 작성
function indexWrite (){
    indexBox.innerHTML=`<div id="headBottom" class="header_bottom">
    <div class="container">
        <div class="header_left">
            <img src="./img/update1_mini.jpg" alt="">
            <div>
                <p>업데이트 정보센터</p>
                <p>2023.11.21<br>ver.1.2.382 업데이트 </p>
            </div>
        </div>
        <img src="./img/index_logo.png" alt="">
        <div class="header_right">
            <div onclick="loginWrite(event)" class="dev_login">Devsisters<br>로그인</div>
            <div onclick="loginWrite(event)" class="kakao_login">Kakao <br>로그인</div>
        </div>
    </div>
    </div>
    <main id="main">
    <div class="img_box container">
        <div class="event_slide">
            <div>
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-pause"></i>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="event_slide_img">
            </div>
            <div class="event_slide_btn">
                <div>
                </div>
            </div>
        </div>
        <div class="shop_slide">
            <img src="./img/cookierunstore.jpg" alt="">
            <p>주간의 인기 상품</p>
            <div class="shop_slide_img">
            </div>
            <lu class="shop_slide_bth">
                <li onclick="mainShopSlideBtn(event)">0</li>
                <li onclick="mainShopSlideBtn(event)">1</li>
                <li onclick="mainShopSlideBtn(event)">2</li>
                <li onclick="mainShopSlideBtn(event)">3</li>
                <li onclick="mainShopSlideBtn(event)">4</li>
            </lu>
        </div>

    </div>
    <hr>
    <div class="main_info container">
        <div>
            <h3>쿠키런 킹덤<br>새소식</h3>
            <div>새소식 보러가기 <i class="fa-solid fa-square-caret-right"></i></div>
        </div>
        <div>
            <div class="info_slide">
                <div>
                    <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/54e1ec2f-823d-4945-f54c-c2c31236ed00/format=webp" alt="">
                    <p>새소식</p>
                    <p>쿠키 세상의 새로운 소식을 만나보세요!</p>
                </div>
                <div>
                    <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e3cec218-533b-4c5b-54b1-b8cd0ff19c00/format=webp" alt="">
                    <p>게임 정보</p>
                    <p>다양한 쿠키들과 짜릿한 액션을 즐겨보세요!</p>
                </div>
                <div>
                    <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4780ff10-2546-42bd-3e01-aafad5678100/format=avif" alt="">
                    <p>커뮤니티</p>
                    <p>유저분들의 생각과 의견을 공유해주세요!</p>
                </div>
                <div>
                    <p>미디어</p>
                    <p>게임 밖 쿠키들의 이야기를 들어보세요!</p>
                </div>
                <div>
                    <p>SHOP</p>
                    <p>쿠키들의 다양한 상품들을 만나보세요!</p>
                </div>
                <div>
                    <p>고객센터</p>
                    <p>유저의 이야기를 직접 전달해주세요!</p>
                </div>
            </div>
        </div>
    </div>
    </main>`;

//(스크립트) nav 백그라운드 이미지
let header = document.querySelector("header");
fetch("http://localhost:3000/headerImg")
.then(response=>response.json())
.then(json => 
    header.style.backgroundImage=`url(${json[0][Math.floor(Math.random()*json[0].length)]})`
)

//(스크립트) nav 쿠키 gif
let headerCookie = document.querySelector("#header_cookie");
fetch("http://localhost:3000/cookieGIF")
.then(response=>response.json())
.then(json => 
    headerCookie.setAttribute('src',`${json[0][Math.floor(Math.random()*json[0].length)]}`)
)

//(스크립트) main 슬라이드 이미지
// 슬라이드 버튼 & 이미지 생성
fetch("http://localhost:3000/eventImg")
.then(response=>response.json())
.then(json => {
    let eventSlide = document.getElementsByClassName('event_slide'),
     eventSlideImg = eventSlide[0].getElementsByClassName('event_slide_img'),
     eventSlideBtn = eventSlide[0].getElementsByClassName('event_slide_btn');

    eventSlideImg[0].innerHTML = `<img src="${json[0][0][0]}" alt="${json[0][0][1]}">`;
    for (let i = 0 ; i < json[0].length; i++){
        eventSlideBtn[0].children[0].innerHTML += `<span class="mainSlideBtn" onclick="eventslideBtn(event)">${json[0][i][1]}</span>`
    }

})

//(스크립트) main 우측 제품 슬라이드 이미지
fetch("http://localhost:3000/product")
.then(response=>response.json())
.then(json => {
    let shopSlideImg = document.getElementsByClassName('shop_slide_img');
        for (let i = 0 , t; i < json[0].length-1; i++){
            for (let j = i+1 ; j < json[0].length ; j++) {
                if ( json[0][i].price > json[0][j].price){
                    t = json[0][i];
                    json[0][i] = json[0][j];
                    json[0][j] = t;
                }
            }
        }
    for (let i = 0 ; i < 5 ; i++){
        shopSlideImg[0].innerHTML += `<div><img src="${json[0][i].img[0]}" alt="${json[0][i].title}"><p class="item_title">${json[0][i].title}</p></div>`
    }
    let mainSlideBtn = document.getElementsByClassName('mainSlideBtn');
lastSlideBtn = mainSlideBtn[0];
lastSlideBtn.style.opacity="1";
})

//(스크립트) main 우측 제품 슬라이드 버튼
let shopSlideBtn = document.getElementsByClassName('shop_slide_bth');
lastSlideBtn2=shopSlideBtn[0].children[0];
lastSlideBtn2.style.opacity="1";
lastSlideBtn2.style.width="30px";

//(이벤트) nav 스크롤에따라 진하기 
{
window.addEventListener('scroll',()=>{
    if (parseInt(window.scrollY) || navBg.style.visibility == "initial") {
        nav.style.backgroundColor="#2b2b37ff";
    } else {
        nav.style.backgroundColor="#2b2b3750";
    }
});
}

//(이벤트) nav 마우스 진입시 서브메뉴 펼치기
let nav = document.querySelector("nav");
let subLi = document.querySelectorAll(".sub_li");
nav.addEventListener('mouseenter',()=>{
    navBg.style.visibility="initial";
    nav.style.backgroundColor="#2b2b37ff";
    for (let a of subLi) a.style.visibility="initial";
});
let navBg = document.querySelector("#nav_bg");
navBg.addEventListener('mouseout',()=>{
    navBg.style.visibility="hidden";
    for (let a of subLi) a.style.visibility="hidden";
    if (parseInt(window.scrollY) ) {
        nav.style.backgroundColor="#2b2b37ff";
    } else {
        nav.style.backgroundColor="#2b2b3750";
    }
});

}
// 인덱스 메인 슬라이드 이미지 버튼 작동 함수
function eventslideBtn(event){
    let eventSlide = document.getElementsByClassName('event_slide');
    let eventSlideImg = eventSlide[0].getElementsByClassName('event_slide_img');
    fetch("http://localhost:3000/eventImg")
    .then(response=>response.json())
    .then(json => {
    if(event.target.tagName == 'SPAN'){
        lastSlideBtn.style.opacity = "0.7";
        event.target.style.opacity = "1";
        lastSlideBtn = event.target;
        for(let i of json[0]) {if( i[1] == lastSlideBtn.innerText) eventSlideImg[0].children[0].src=`${i[0]}`;}
    }
})
}
// 인덱스 상품 슬라이드 이미지 버튼 작동 함수
function mainShopSlideBtn(event){
    let shopSlideImg = document.getElementsByClassName('shop_slide_img');
    if(event.target != lastSlideBtn2){
        if (event.target.tagName == "LI"){
            lastSlideBtn2.style.opacity="0.3";
            event.target.style.opacity="1";
            event.target.style.width="30px";
            lastSlideBtn2.style.width="13px";
            lastSlideBtn2=event.target;
            shopSlideImg[0].style.transform=`translateX(-${event.target.innerText*20}%)`;
        }
    }
}

/*                    ▲▲▲▲  문석  ▲▲▲▲                    */ 
/*                    ▼▼▼▼  민지  ▼▼▼▼                    */ 

// 민지 쿠키소개 페이지 전환
let selectedAR = [ ];

function cookieinfoWrite(event){
    if(event.stopPropagation())event.stopPropagation();
    let headBottom = document.getElementById('headBottom')
    headBottom.classList.add("subPage")
    headBottom.innerHTML=`<div>
        <ul>
            <li onclick="cookieinfoWrite(event)">쿠키 소개</li>
            <li>게임 소개</li>
            <li>게임 월드 소개</li>
        </ul>
    </div>`;
        main.innerHTML = `
    </div><h3>쿠키소개</h3><div class="main_option_mj">
        <img class="selected" onclick="allTagSelect(event)" id="allTag" src="./img/tag_all.png" alt="올">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e6cc601e-19ee-421b-e936-9cdd20eaf100/public" alt="에픽">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/dc7567c4-7d16-4017-52c2-4586e7112500/public" alt="스페셜">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/fb2bbed1-186c-4edf-1741-7edb8cdf7100/public" alt="레전더리">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/ef97da70-b550-428a-c03c-ed4db59a9300/public" alt="슈퍼에픽">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b80b67b8-dc5c-49e3-07ca-f1673e459100/public" alt="에이션트">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/9ea3ad41-1df7-4b8e-0e52-3c1f9ac48400/public" alt="드래곤">
    </div> <div class="main_list"></div>`;
    let mainList = document.getElementsByClassName('main_list');
    fetch("http://localhost:3000/cookieData")
    .then(response=>response.json())
    .then(json => {
    for (let i = 0; i < json[0].length; i++) {
        mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${json[0][i].img}" alt="${json[0][i].name}"><div class="main_list_item_name">${json[0][i].name}</div><div class="main_list_item_type"><img src="${cookieType(json[0][i].type)}" alt="${json[0][i].type}"></div></div>`
    }
})
}
function cookieDetail(event) {
    if(event.stopPropagation())event.stopPropagation();
    let eventOJ = event.target.closest('.main_list_box')
    let cookieName = eventOJ.children[1].innerText;
    let compare;
    fetch("http://localhost:3000/cookieData")
    .then(response=>response.json())
    .then(json => {
    for (let i = 0; i <  json[0].length; i++) {
        if (cookieName ==  json[0][i].name) {
            compare = i;
        }
    }
    main.innerHTML =
        `<h3 class="back_button" onclick="cookieinfoWrite(event)">목록가기</h3>
        <div class="main_info_container"><img src="${ json[0][compare].img}" alt="${ json[0][compare].name}">
        <div class="main_info_pic"></div>
        <div class="main_info_self">
            <div class="grid_box1"><img src="${cookieType( json[0][compare].type)}" alt="${ json[0][compare].type}"></div>
            <div class="grid_box2">${ json[0][compare].name}</div>
            <p class="cookie_self">${ json[0][compare].info}</p>
        </div>
    </div>
    <div class="intro_box">
        <div class="skill_box">
            <p class="skill">스킬</p>
            <img src="${ json[0][compare].skill.skillImg}" alt="${ json[0][compare].skill.skillName}">
            <p class="skill_name">${ json[0][compare].skill.skillName}</p>
            <p class="skill_intro">${ json[0][compare].skill.skillInfo}</p>
        </div>
    </div>`;
})
}
function cookieType(cookieType) {
    switch (cookieType) {
        case "에픽":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e6cc601e-19ee-421b-e936-9cdd20eaf100/public'
        case "레전더리":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/fb2bbed1-186c-4edf-1741-7edb8cdf7100/public'
        case "슈퍼에픽":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/ef97da70-b550-428a-c03c-ed4db59a9300/public'
        case "스페셜":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/dc7567c4-7d16-4017-52c2-4586e7112500/public'
        case "에이션트":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b80b67b8-dc5c-49e3-07ca-f1673e459100/public'
        case "드래곤":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/9ea3ad41-1df7-4b8e-0e52-3c1f9ac48400/public'
    }
}
function allTagSelect(event){
    let mainOptionMj = document.getElementsByClassName('main_option_mj')
    let mainList = document.getElementsByClassName('main_list')
    if(event.target.getAttribute('class')=='selected'){
        selectedAR=[];
        for( let i = 0 ; i < mainOptionMj[0].children.length ; i++) {
            mainOptionMj[0].children[i].classList.remove('selected');
        }
    } else {
        selectedAR=[];
        event.target.classList.add('selected');
        for( let i = 1 ; i < mainOptionMj[0].children.length ; i++) {
            mainOptionMj[0].children[i].classList.remove('selected');
            selectedAR.push(mainOptionMj[0].children[i].alt);
        }
    }
    mainList[0].innerHTML='';
    fetch("http://localhost:3000/cookieData")
    .then(response=>response.json())
    .then(cookieAR => {
        for (let j = 0; j < selectedAR.length; j++) {
            for (let i = 0; i < cookieAR[0].length; i++) {
                if (selectedAR[j] == cookieAR[0][i].type) {
                    mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${cookieAR[0][i].img}" alt="${cookieAR[0][i].name}"><div class="main_list_item_name">${cookieAR[0][i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieAR[0][i].type)}" alt="${cookieAR[0][i].type}"></div></div>`;
                }
            }
    }})
}
function cookieTag(event) {
    let OptTypeImg = event.target;
    let mainList = document.getElementsByClassName('main_list')
    let mainOptionMj = document.getElementsByClassName('main_option_mj')
    let allTag = document.getElementById('allTag');
    if (selectedAR.length==6) {
        selectedAR=[];
        for( let i = 0 ; i < mainOptionMj[0].children.length ; i++) {
            mainOptionMj[0].children[i].classList.remove('selected');
        }
    }
    //선택한 태그에 따라 쿠키 나열하기
    if (OptTypeImg.tagName == "IMG") {
        let typeAlt = OptTypeImg.getAttribute('alt');
        if (selectedAR.indexOf(typeAlt) == -1) {
            selectedAR.push(typeAlt);
        } else {
            selectedAR = selectedAR.filter((a) => a != typeAlt);
        }
        if (selectedAR.length==6) {
            allTag.classList.add('selected');
        } else {
            allTag.classList.remove('selected');
        }
        mainList[0].innerHTML = "";
        // 쿠키타입 클릭 시 opacity 설정
        if (event.target.getAttribute('class') === 'selected') {
            event.target.classList.remove('selected');
        } else {
            event.target.classList.add('selected');
        }
        fetch("http://localhost:3000/cookieData")
        .then(response=>response.json())
        .then(cookieAR => {
        if (typeAlt == "올") {
            for (let i = 0; i < cookieAR[0].length; i++) {
                mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${cookieAR[0][i].img}" alt="${cookieAR[0][i].name}"><div class="main_list_item_name">${cookieAR[0][i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieAR[0][i].type)}" alt="${cookieAR[0][i].type}"></div></div>`;
            }
        } else {
            for (let j = 0; j < selectedAR.length; j++) {
                for (let i = 0; i < cookieAR[0].length; i++) {
                    if (selectedAR[j] == cookieAR[0][i].type) {
                        mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${cookieAR[0][i].img}" alt="${cookieAR[0][i].name}"><div class="main_list_item_name">${cookieAR[0][i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieAR[0][i].type)}" alt="${cookieAR[0][i].type}"></div></div>`;
                    }
                }
            }
        }})
    }
}

/*                    ▲▲▲▲  민지  ▲▲▲▲                    */ 
/*                    ▼▼▼▼  창민  ▼▼▼▼                    */ 

function noticeWrite(event){
    if(event.stopPropagation())event.stopPropagation();
    let headBottom = document.getElementById('headBottom')
    headBottom.classList.add("subPage")
    headBottom.innerHTML=`        <div>
    <ul>
        <li onclick="noticeWrite(event)">공지사항</li>
        <li>업데이트</li>
        <li>이벤트</li>
    </ul>
</div>`;
        main.innerHTML = `        <div class="notice_option">
        <h3>공지사항</h3>
        <div class="notice_option_right">
            <select name="" id="">
                <option value="">제목</option>
                <option value="">내용</option>
                <option value="">제목+내용</option>
            </select>
            <input placeholder="검색어를 입력해주세요.">
            
        </div>
    </div>
    <div class="notice_list">
        <div><a href="#" class = "all">전체</a></div>
        <div><a href="#" class = "notice">공지</a></div>
        <div><a href="#" class = "inspection">점검</a></div>
        <div><a href="#" class = "store">상점</a></div>
        <div><a href="#" class = "event">이벤트</a></div>

    </div>

    <div class="notice_post">

        <a onclick="noticeDetailWrite(event)">
            <div class><span class="notice_icon">공지</span></div>
            <div onclick="noticeDetailWrite(event)" class="notice_subject"><a onclick="noticeDetailWrite(event)">알려진 이슈를 안내해 드립니다.</a></div>
            <div></div>
            <div class="notice_date">2023.11.15</div>
        </a>

        <div><span class="notice_icon">공지</span></div>
        <div class="notice_subject">알려진 이슈를 안내해 드립니다.</div>
        <div></div>
        <div class="notice_date">2023.11.15</div>

        <div><span class="notice_icon">공지</span></div>
        <div class="notice_subject">알려진 이슈를 안내해 드립니다.</div>
        <div></div>
        <div class="notice_date">2023.11.15</div>

        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>

    </div>`;
}
function noticeDetailWrite(event){
    if(event.stopPropagation())event.stopPropagation();
        main.innerHTML = `    <div class="notice_option2">
        <h3>공지사항</h3>
        <div class="notice_header">공지 알려진 이슈를 안내해드립니다. (11/22 수정)
            <div class="notice_date">2023.11.22 09:59
            </div>
        </div>
        <a href ="./01_notice.html" class="back_list">목록가기</a>
        <div class="notice_img22"></div>
        <div href ="../img/cookie1.gif.html"></div>

        <pre>안녕하세요 쿠키런 킹덤입니다.
현재까지 게임 내의 알려진 버그를 안내해 드립니다.

알려진 버그들은 수정 작업이 진행되고 있으며, 해결되면 공지사항을 통해 안내해 드리도록 하겠습니다.


            
알려진 버그 외, 다른 이상 현상을 확인하시는 경우 고객센터를 통해 제보해 주시기 바랍니다.
            
[ 고객센터 바로가기(PC) ] 
            
[ 고객센터 바로가기(Mobile) ]
            
            
            
※ 게임 내 우측 하단 [서비스센터] > [고객센터]를 통해서도 버그를 제보하실 수 있습니다.
            
게임 내에서는 스크린샷을 촬영하여 바로 이미지를 첨부하실 수도 있으며, 버그 제보 시 제보 내용과 관련된 정확한 명칭과
            
현상 설명을 함께 기재해 주시면 문제 확인에 큰 도움이 됩니다.
            
Ex) 퀘스트명, NPC 이름, 지역 이름, 아이템 이름 등
            
            
            
또한, 알려진 버그에 공지된 항목 중, 오류 현상이 아닌 것으로 확인되었거나 
            
각종 업데이트 및 클라이언트 패치로 해결된 오류는 항목에서 제외가 되었음을 안내해 드립니다.
            
            
            
보다 안정적이고 쾌적한 게임 환경을 제공하기 위해 최선을 다하겠습니다.
            
            
            
            
            
항상 감사 드립니다.</pre>
</div>
<div class="notice_side"></div>`;
}
function loginWrite(event){
    if(event.stopPropagation())event.stopPropagation();
    if (!indexBox.contains(document.getElementById('loginBG'))){
    indexBox.innerHTML += `<div id="loginBG" onclick="closelogin(event)"><div class="login-wrapper">
    <h2 id="titleCookie">COOKIERUN</h2>
    <h2 id="titleKakao" style="display:none">KAKAO</h2>
    <pre>
        <ul class="login_list">
            <li class="Nexon" onClick="changeCookie(event)">NEXON로그인</li>
            <li class="Kakao" onClick="changeKakao(event)">KAKAO로그인</li>
        </ul>
        <div id="login">
            <!-- <form method="post" action="서버의url" id="login_form"> -->
                <input class="ID" cltype="text" name="userName" placeholder="ID를 입력해주세요."><br>
                <input class="PW" type="password" name="userPassword" placeholder="Password">
                <label for="remember-check">
                    <input type="checkbox" id="remember-check">로그인 유지
                </label>
                <input class="button" type="submit" value="로그인">
                <div class="logo"><a href="./img/google.svg"></a> <div class="logo1"></div> <div class="logo2"></div>
                <div id="imgCookie" class="notice_img"></div>
                <div id="imgKakao" class="notice_img2" style="display:none"></div>
                <div><span class="list1 span">아이디 찾기</span><span class="list2 span">비밀번호 찾기</span><span class="span">회원가입</span></div>
            </form>
        </div><div>`;
    document.getElementsByClassName('login-wrapper')[0].style.position="fixed";
    document.getElementsByClassName('login-wrapper')[0].style.top="50%";
    document.getElementsByClassName('login-wrapper')[0].style.left="50%";
    document.getElementsByClassName('login-wrapper')[0].style.transform="translate(-50%,-50%)";
    document.getElementById('loginBG').style.position="fixed";
    document.getElementById('loginBG').style.top="0";
    document.getElementById('loginBG').style.zIndex="15";
    document.getElementById('loginBG').style.width="100%"
    document.getElementById('loginBG').style.height="100%"
    document.getElementById('loginBG').style.backgroundColor="#00000090"
    let loginList = document.getElementsByClassName('login_list');
    loginList[0].children[0].style.border="2px solid orange";
    loginList[0].children[0].style.color="orange";
    }
    document.getElementById('loginBG').style.visibility="initial";
}
function changeKakao(event){
    var TitleCookie= document.getElementById("titleCookie");
    var TitleKakao= document.getElementById("titleKakao");
    var ImgCookie = document.getElementById("imgCookie");
    var ImgKakao = document.getElementById("imgKakao");
    let eventOJ = event.target.closest("li");

    let loginList = document.getElementsByClassName('login_list');
    loginList[0].children[0].style.border="2px solid rgb(160, 159, 159)";
    loginList[0].children[0].style.color= "rgb(160, 159, 159)";
    //쿠키런 안보이게
    TitleCookie.style.display="none";
    ImgCookie.style.display="none";
    
    //카카오 보이게
    TitleKakao.style.display="";
    ImgKakao.style.display="";
    eventOJ.style.border="2px solid orange";
    eventOJ.style.color= "orange";
    lastBtn = eventOJ;
}   
function changeCookie(event){
    var TitleCookie= document.getElementById("titleCookie");
    var TitleKakao= document.getElementById("titleKakao");
    var ImgCookie = document.getElementById("imgCookie");
    var ImgKakao = document.getElementById("imgKakao");
    let eventOJ = event.target.closest("li");
    let loginList = document.getElementsByClassName('login_list');
    loginList[0].children[1].style.border="2px solid rgb(160, 159, 159)";
    loginList[0].children[1].style.color= "rgb(160, 159, 159)";
    //쿠키런 보이게
    TitleCookie.style.display="";
    ImgCookie.style.display="";
    
    //카카오 안보이게
    TitleKakao.style.display="none";
    ImgKakao.style.display="none";
    eventOJ.style.border="2px solid orange";
    eventOJ.style.color= "orange";
    lastBtn = eventOJ;
}
function closelogin(event){
    if(event.target==document.getElementById('loginBG')) document.getElementById('loginBG').style.visibility="hidden";
}

/*                    ▲▲▲▲  창민  ▲▲▲▲                    */ 
/*                    ▼▼▼▼  수미  ▼▼▼▼                    */ 
let lastBtn,
     pageNum = 1,
     imgPage = 9;

function shopWrite(event){
    event.stopPropagation();
    headBottom.classList.add("subPage")
    headBottom.innerHTML=`<div>
        <ul>
            <li onclick="shopWrite(event)">온라인 굿즈샵</li>
        </ul>
    </div>`;
        main.innerHTML = `
        <main>
        <div class="main_head">
            <h3>쿠키런 상품</h3>
            <div>
                <p id="total">상품 (총 <span></span>개)</p>
                <ul class="grid_box_sm">
                    <li onclick="gridBoxBtn(event)"></li>
                    <li onclick="gridBoxBtn(event)"></li>
                </ul>
            </div>
        </div>
        <div class="main_option">
            <ul>
                <li onclick="optionBoxOpen(event)">혜택정보</li>
                <li onclick="optionBoxOpen(event)">배송유형</li>
                <li onclick="optionBoxOpen(event)">상품유형</li>
                <li onclick="optionBoxOpen(event)">가격대</li>
            </ul>
            <div class="option_box">
                <div class="option_title">혜택정보
                    <ul>
                        <li onclick="optionBoxListColor(event)">할인상품</li>
                        <li onclick="optionBoxListColor(event)">무료상품</li>
                    </ul>
                </div>
                <div class="option_title">배송유형
                    <ul>
                        <li onclick="optionBoxListColor(event)">오늘출발</li>
                        <li onclick="optionBoxListColor(event)">예약배송</li>
                    </ul>
                </div>
                <div class="option_title">상품유형
                    <ul>
                        <li onclick="optionBoxListColor(event)">예약구매</li>
                    </ul>
                </div>
                <div class="option_title flexBox">가격대 <br>
                    <input type="price" placeholder="2,000"> ~ <input type="price" placeholder="139,000">
                    <div class="application">적용</div>
                </div>
                <div class="option_last">
                    <div class="reset">초기화</div>
                    <div onclick="optionBoxClose(event)" id="option_clickID" class="click">상품보기</div>
                </div>
                <div onclick="optionBoxClose(event)" id="option_closeID" class="option_close">X</div>
            </div>
        </div>
        <div class="list_option">
            <ul>
                <li onclick="ProductARViewDown(event)">인기도순</li>
                <li onclick="ProductARDateDown(event)">최신등록순</li>
                <li onclick="ProductARPriceRise(event)">낮은가격순</li>
                <li onclick="ProductARPriceDown(event)">높은가격순</li>
                <li onclick="ProductARSellDown(event)">판매높은순</li>
            </ul>
        </div>
        <div class="main_item"></div>
        <div class="show_screen"></div>
    </main>`;
    // 인기상품순(디폴트) 첫화면 굵게
    let listOption = document.getElementsByClassName('list_option');
    lastBtn=listOption[0].children[0].children[0];
    fetch("http://localhost:3000/product")
    .then(response=>response.json())
    .then(productAR => {
    listWriter(productAR[0]);
    })
}     
// 옵션 박스 열기
function optionBoxOpen(event){
        let optionBox = document.getElementsByClassName('option_box');
        optionBox[0].style.visibility = "initial";
}
// 옵션 박스 닫기
function optionBoxClose(event){
        let optionBox = document.getElementsByClassName('option_box');
            optionBox[0].style.visibility = "hidden";
}
// 옵션 박스 안에 옵션 선택 시 색상 변경
function optionBoxListColor(event){
        if (event.target.style.backgroundColor == "orange") {
            event.target.style.backgroundColor = "rgb(250, 248, 248)"
        } else {
            event.target.style.backgroundColor = "orange"
        }
}
// 아이템 개수(배열) 9개씩 나타내기, 금액단위 설정 
function listWriter(productAR) {
    let mainItem = document.getElementsByClassName('main_item'),
         showScreen = document.getElementsByClassName('show_screen'),
         itemBox = document.getElementsByClassName('item_sm');
    mainItem[0].innerHTML = '';
    for (let i = 0 + (pageNum - 1) * imgPage; i < imgPage + (pageNum - 1) * imgPage; i++) {
        if (i == productAR.length) break;
        mainItem[0].innerHTML +=
        `<div onclick="shopDetail(event)" class="item_sm">
        <img src="${productAR[i].img[0]}" alt="">
        <p class="item_price">${productAR[i].price.toLocaleString()} 원</p>
        <p class="item_title">${productAR[i].title}</p>
        <p class="item_intro">${productAR[i].intro}</p>
        <div class="icon"><i class="fa-solid fa-neuter"></i></div>
        <div class="icon"><i class="fa-solid fa-plus"></i></div>
        </div>`;
        // 재고 없을 때 이미지 투명도, BEST/SOLDOUT 박스 넣기    
        if (productAR[i].stock == 0) {
            for (let j = 0; j < itemBox[i % imgPage].children.length - 2; j++) {
                itemBox[i % imgPage].children[j].style.opacity = '0.3';
            }
            itemBox[i % imgPage].innerHTML += `<div class="soldout">SOLD OUT</div>`;
        }
        if (productAR[i].sell >= 30) {
            itemBox[i % imgPage].innerHTML += `<div class="best_sm">BEST</div>`;
        }
        //아이템개수 9개 이상 등록시, 자동으로 다음 순번 페이지버튼 생성
        let pageAmount = productAR.length / imgPage
        showScreen[0].innerHTML = ``;
        for (let i = 0; i < pageAmount; i++) {
            showScreen[0].innerHTML += `<div onclick="screenPage(event)">${i + 1}</div>`;
        }
    // 상품 총 갯수 표시
    let total = document.getElementById('total');
    total.children[0].innerText = ` ${productAR.length} `;
    }
}
//페이지 넘어갈 때 보이는 화면 기준점 잡기    
function screenPage(event){
        pageNum = event.target.innerText;
        window.scrollTo(0, 300);
        fetch("http://localhost:3000/product")
        .then(response=>response.json())
        .then(productAR => {
        listWriter(productAR[0]);
        })
}
//아이템목록 누르면 검정 테두리 표시, 첫 화면 9개 배열로 고정표시
function gridBoxBtn(event){
    let gridBoxLi = document.querySelectorAll('.grid_box_sm>li')
    let mainItem = document.getElementsByClassName('main_item');
    if (event.target == gridBoxLi[0]) {
        imgPage = 9;
        mainItem[0].style.gridTemplate = "repeat(3, 500px) / repeat(3, 1fr)";
        gridBoxLi[0].style.border = "4px solid #000"
        gridBoxLi[1].style.border = "4px solid #fff"
    } else {
        imgPage = 6;
        mainItem[0].style.gridTemplate = "repeat(3, 700px) / repeat(2, 1fr)";
        gridBoxLi[0].style.border = "4px solid #fff"
        gridBoxLi[1].style.border = "4px solid #000"
    }
    fetch("http://localhost:3000/product")
    .then(response=>response.json())
    .then(productAR => {
    listWriter(productAR[0]);
    })
}
// 인기도순 작성
function ProductARViewDown(event) {
    fetch("http://localhost:3000/product")
    .then(response=>response.json())
    .then(productAR => {
    for (let i = 0, t; i < productAR[0].length - 1; i++) {
        for (let j = i + 1; j < productAR[0].length; j++) {
            if (productAR[0][i].views < productAR[0][j].views) {
                t = productAR[0][i];
                productAR[0][i] = productAR[0][j];
                productAR[0][j] = t;
            }
        }
    }
    lastBtn.style.fontWeight = 'lighter';
    lastBtn.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    lastBtn=event.target;
})
}
//최신등록순 작성
function ProductARDateDown(event) {
    fetch("http://localhost:3000/product")
    .then(response=>response.json())
    .then(productAR => {
    for (let i = 0, t; i < productAR[0].length - 1; i++) {
        for (let j = i + 1; j < productAR[0].length; j++) {
            if (productAR[0][i].update > productAR[0][j].update) {
                t = productAR[0][i];
                productAR[0][i] = productAR[0][j];
                productAR[0][j] = t;
            }
        }
    }
    listWriter(productAR[0]);
    lastBtn.style.fontWeight = 'lighter';
    lastBtn.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    lastBtn=event.target;
})
}
// 가격 낮은순 작성
function ProductARPriceRise(event) {
    fetch("http://localhost:3000/product")
    .then(response=>response.json())
    .then(productAR => {
    for (let i = 0, t; i < productAR[0].length - 1; i++) {
        for (let j = i + 1; j < productAR[0].length; j++) {
            if (productAR[0][i].price > productAR[0][j].price) {
                t = productAR[0][i];
                productAR[0][i] = productAR[0][j];
                productAR[0][j] = t;
            }
        }
    }
    listWriter(productAR[0]);
    lastBtn.style.fontWeight = 'lighter';
    lastBtn.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    lastBtn=event.target;
    })
}
// 높은 가격순 작성
function ProductARPriceDown(event) {
    fetch("http://localhost:3000/product")
    .then(response=>response.json())
    .then(productAR => {
    for (let i = 0, t; i < productAR[0].length - 1; i++) {
        for (let j = i + 1; j < productAR[0].length; j++) {
            if (productAR[0][i].price < productAR[0][j].price) {
                t = productAR[0][i];
                productAR[0][i] = productAR[0][j];
                productAR[0][j] = t;
            }
        }
    }
    listWriter(productAR[0]);
    lastBtn.style.fontWeight = 'lighter';
    lastBtn.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    lastBtn=event.target;
    })
}
//판매 높은순 작성
function ProductARSellDown(event) {
    fetch("http://localhost:3000/product")
    .then(response=>response.json())
    .then(productAR => {
    for (let i = 0, t; i < productAR[0].length - 1; i++) {
        for (let j = i + 1; j < productAR[0].length; j++) {
            if (productAR[0][i].sell < productAR[0][j].sell) {
                t = productAR[0][i];
                productAR[0][i] = productAR[0][j];
                productAR[0][j] = t;
            }
        }
    }
    listWriter(productAR[0]);
    lastBtn.style.fontWeight = 'lighter';
    lastBtn.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    lastBtn=event.target;
    })
}

/*                    ▲▲▲▲  수미  ▲▲▲▲                    */ 
/*                    ▼▼▼▼  지현  ▼▼▼▼                    */ 

let productPrice; 

function shopDetail(event){
fetch("http://localhost:3000/product")
.then(response=>response.json())
.then(productAR => {
    for(let i=0; i<productAR[0].length;i++){
        if (event.target.closest('.item_sm').children[2].innerText == productAR[0][i].title) {
            itemNum = i;
            break;
        }
    }
    shopItemDetail(itemNum);
})
}
//게시글 작성
function shopItemDetail(itemNum){
    let textpoint = 0, photopoint = 0;
    fetch("http://localhost:3000/product")
    .then(response=>response.json())
    .then(productAR => {
    productPrice=productAR[0][itemNum].price;
    // 포인트 점수 구하기 식
    if(productAR[0][itemNum].textreview == 1) {
        textpoint= 50;
    } 
    if(productAR[0][itemNum].photoreview == 1) {
        photopoint= 100;
    }

    main.innerHTML=`
    <div class="item"><div class="item_leftbox">
                <div class="item_img"></div>
                <div class="item_imgBtn"></div>
            </div>
            <div class="item_rightbox">
                <div class="item_rightbox_info">
                    <div>${productAR[0][itemNum].title}</div>
                    <div>${productAR[0][itemNum].price.toLocaleString()} 원</div>
                </div>
                <div class="item_rightbox_point">
                    <div class="item_rightbox_point_title">
                        <span>쿠키런 스토어 고객을 위한 혜택</span>
                    </div>
                    <div class="item_rightbox_point_max">
                        <div>
                            <span>최대 적립 포인트</span>
                            <div>
                                <span id="maxpoint">${(productAR[0][itemNum].price/100+textpoint+photopoint).toLocaleString()} 원</span>
                                <i class="fa-regular fa-circle-question"></i>
                            </div>
                        </div>
                        <div>
                            <span>└ 기본적립</span> 
                            <div id="basic">${(productAR[0][itemNum].price/100).toLocaleString()} 원</div>
                        </div>
                    </div>
                    <div class="item_rightbox_point_price_tip">
                        <div>
                            <div>TIP. 포인트 더 받는 방법</div>
                            <div><a href="https://nid.naver.com">최대 5% 적립, 무료 시작</a></div>
                            <div><a href="https://nid.naver.com">네이버 현대카드로 결제 시</a></div>
                            <div><a href="https://nid.naver.com/">네이버페이 머니로 결제 시</a></div>
                        </div>
                        <div>
                            <span>+최대 ${(productAR[0][itemNum].price*0.09).toLocaleString()}원</span>
                            <span>${(productAR[0][itemNum].price*0.04).toLocaleString()}원</span>
                            <span>${(productAR[0][itemNum].price*0.05).toLocaleString()}원</span>
                            <span>${(productAR[0][itemNum].price*0.02).toLocaleString()}원</span>
                        </div>
                    </div>
                    <div class="item_rightbox_ads"></div>
                    <div class="item_rightbox_point_card">
                        <span>무이자 할부</span>
                        <span>| 카드 자세히보기</span>
                        <i class="fa-regular fa-circle-question"></i>
                    </div>
                    <div id="pointDetails"></div>
                    <div class="item_rightbox_point_transit">
                        <p>택배배송 | 3,000원<span>&#40;주문시 결제&#41; &#183;</span> CJ 대한통운&#40;오네&#41;</p>
                        <p>30,000원 이상 구매 시 무료&#47;제주, 도서 지역 추가 3,000원</p>
                        <p><a href="#">배송비 절약상품 보기</a></p>
                    </div>
                    <div class="item_rightbox_point_quantity">
                        <div onclick="amountBtnMinus()" style="border: none;">&#45;</div>
                        <input onchange="amountCalc(event)" type="text" id="quantity" name="toBuy" value=1 style="text-align: center; "/>
                        <div onclick="amountBtnPlus()" style="border: none;">&#43;</div>
                    </div>
                    <div class="item_rightbox_point_decision">
                        <div>
                            <div>
                                <span>총 상품 금액</span>
                                <i class="fa-regular fa-circle-question"></i>
                            </div>
                            <div class="item_rightbox_point_decision_total">
                                <span id="totalAmount"></span>
                                <span id="totalPrice"></span>
                            </div>
                        </div>
                        <div>
                            <div onclick="loginWrite(event)" class="btn_1">
                                <i class="fa-solid fa-circle-chevron-right"></i>
                                <span>구매하기</span>
                            </div>
                            <div class="btn_2">
                                <i class="fa-regular fa-comment-dots"></i>
                                <span>톡톡문의</span>
                            </div>
                            <div class="btn_3">
                                <i class="fa-solid fa-heart-circle-plus"></i>
                                <span>찜하기</span>
                            </div>
                            <div class="btn_4">
                                <i class="fa-solid fa-bag-shopping"></i>
                                <span>장바구니</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div class='best'>
                <p>베스트 상품</p>
                <div class="best_items"></div></div>
    `;
    let itemImgBtn = document.getElementsByClassName('item_imgBtn');
    let itemImg = document.getElementsByClassName('item_img');
    let bestitem = document.getElementsByClassName('best_items');

// 토탈 구하기
let totalAmount = document.getElementById('totalAmount');
let totalPrice = document.getElementById('totalPrice');
let quantityBox = document.getElementsByClassName('item_rightbox_point_quantity');
totalAmount.innerText =`${quantityBox[0].children[1].value}개`
totalPrice.innerText= `${((quantityBox[0].children[1].value)*productAR[0][itemNum].price).toLocaleString()}원`
// 제품 이미지 슬라이드
itemImg[0].innerHTML = `<img src="${productAR[0][itemNum].img[0]}" alt="${productAR[0][itemNum].title}">`;
itemImgBtn[0].innerHTML="";
for (let i = 0 ; i < productAR[0][itemNum].img.length; i++){
    itemImgBtn[0].innerHTML +=`<img onclick="shopItemImgChange(event)" src="${productAR[0][itemNum].img[i]}" alt="${productAR[0][itemNum].title}">`;
}
// 베스트 상품
for (let i = 0, t; i < productAR[0].length - 1; i++) {
    for (let j = i + 1; j < productAR[0].length; j++) {
        if (productAR[0][i].sell < productAR[0][j].sell) {
            t = productAR[0][i];
            productAR[0][i] = productAR[0][j];
            productAR[0][j] = t;
        }
    }
}
    for (let i =0 ; i < 4; i++){
    bestitem[0].innerHTML += `<div onclick="itemChangeInPage(event)"><img src="${productAR[0][i].img[0]}" alt="${productAR[0][i].title}"><p>${productAR[0][i].title}</p><p>${productAR[0][i].price.toLocaleString()}</p></div>`;
    }
})}
// 제품 이미지 띄우기
function shopItemImgChange(event){
    let itemImg = document.getElementsByClassName('item_img');
    itemImg[0].children[0].src=`${event.target.getAttribute('src')}`;
}
// 수량 버튼 올리기
function amountBtnPlus(){
    let revisedQunatity = ++document.getElementById('quantity').value;
    document.getElementById('totalAmount').innerText=`${revisedQunatity.toLocaleString()}개`;
    document.getElementById('totalPrice').innerText=`${(revisedQunatity*productPrice).toLocaleString()} 원`;
}
// 수량 버튼 내리기
function amountBtnMinus(){
    if(document.getElementById('quantity').value>1){
        let revisedQunatity = --document.getElementById('quantity').value;
        document.getElementById('totalAmount').innerText=`${revisedQunatity}개`;
        document.getElementById('totalPrice').innerText=`${(revisedQunatity*productPrice).toLocaleString()} 원`;
    }
}
// 수량 input 박스 변경
function amountCalc(event){
    let inputQuantity = event.target.value;
    document.getElementById('totalAmount').innerText=`${inputQuantity}개`;
    document.getElementById('totalPrice').innerText=`${(inputQuantity*productPrice).toLocaleString()} 원`;
}
// 베스트상품 상세페이지로 변경하기
function itemChangeInPage(event) {
    event.target.closest('div').children[1].innerText;
    let itemBox = document.getElementsByClassName('item');
    fetch("http://localhost:3000/product")
    .then(response=>response.json())
    .then(productAR => {

    for(let i=0; i<productAR[0].length;i++){
        if (event.target.closest('div').children[1].innerText == productAR[0][i].title) {
            itemNum = i;
            break;
        }
    }
    productPrice=productAR[0][itemNum].price;
    itemBox[0].innerHTML='';
    shopItemDetail(itemNum);
    window.scrollTo(0,300);
})
}

/*                    ▲▲▲▲  지현  ▲▲▲▲                    */ 
/*                    ▼▼▼▼  승삼  ▼▼▼▼                    */ 

let notistart = 0, notiend = 2;    // 초기화
let nextPageSt = 0, nextPageEnd = 9;                // 초기화
let selcet_option = 10;

function add(event) {
    if(event.stopPropagation())event.stopPropagation();
    comunityWrite(notistart, notiend)
}
/** 공지부분 태그, 내용 채우기 반복문  **/
function comunityWrite(notistart, notiend){
        let headBottom = document.getElementById('headBottom')
        headBottom.classList.add("subPage")
        headBottom.innerHTML=`
    <div>
        <ul>
            <li onclick="comunityWrite(notistart, notiend)">자유게시판</li>
        </ul>
    </div>
    `;
        main.innerHTML = `
        <div class="notice_option">
            <h3>자유 게시판</h3>
            <div class="notice_option_right">
                <select onchange="sortArray(event)" name="sort" id="sort">
                    <option value="10">10개씩 보기</option>
                    <option value="20">20개씩 보기</option>
                    <option value="30">30개씩 보기</option>
                </select>
            </div>
        </div>
        <div class="list_sort">
          <span onclick="listWrite(event)" class="turn_read">리뷰순</span>
          <span onclick="listWrite(event)" class="turn_heart">좋아요순</span>
        </div>
        <div class="content">
          <div class="content_notice">
          </div>
          <div class="free_content">
          </div>
          <div class = "page">
          </div>
        `;
        fetch("http://localhost:3000/noticeboard")
        .then(response=>response.json())
        .then(notiboardAR => {
        let content = main.querySelector('.content');
        for (let i = notistart; i < notiend; i++) {
            content.children[0].innerHTML += `
                <a href="#" class="list_notice">
                    <div class="notice_header">
                        <span class="notice_ss"></span>
                    </div>
                    <div class="notice_subject_ss">${notiboardAR[0][i].notice_subject}</div>
                    <div class="notice_date_ss">${notiboardAR[0][i].notice_date}</div>
                </a>
            `;
        }})
        fetch("http://localhost:3000/freeboard")
        .then(response=>response.json())
        .then(freeboardAR => { 
            articleWrite(freeboardAR[0],nextPageSt, nextPageEnd)
        })
}
// content 부분 태그, 내용 채우기 반복문 
function articleWrite(freeboardAR,start, end){
    let free_content = main.querySelector('.free_content');
    free_content.innerHTML = '';
    for(let i = start ; i < end ; i++){
        free_content.innerHTML += `
            <div onclick="contentEnter(event)" class="list_freeboard">
                <div class="freeboard_subject">${freeboardAR[i].subject}</div>
                <div class="userInfo">${freeboardAR[i].userInfo}</div>
                <div class="heart">${freeboardAR[i].heart}</div>
                <div class="read">${freeboardAR[i].read}</div>
                <div class="freeboard_date">${freeboardAR[i].commentNum}</div> 
            </div>
        `;
    }
    update_page(freeboardAR,selcet_option);
}
function articleWrite2(freeboardAR,start, end){
    let free_content = main.querySelector('.free_content');
    free_content.innerHTML = '';
    for(let i = start ; i < end ; i++){
        free_content.innerHTML += `
            <div onclick="contentEnter(event)" class="list_freeboard">
                <div class="freeboard_subject">${freeboardAR[i].subject}</div>
                <div class="userInfo">${freeboardAR[i].userInfo}</div>
                <div class="heart">${freeboardAR[i].heart}</div>
                <div class="read">${freeboardAR[i].read}</div>
                <div class="freeboard_date">${freeboardAR[i].commentNum}</div> 
            </div>
        `;
    }
}
// read 순 freeboardAR 재 배열 함수
function changeArray(judgement){
    fetch("http://localhost:3000/freeboard")
        .then(response=>response.json())
        .then(freeboardAR => {
    if(judgement == 1/*조회수 수 높은 순*/){
        for(let i=0, temp; i<freeboardAR[0].length-1 ; i++){
            for(let j = i+1 ; j<freeboardAR[0].length ; j++){
                if(freeboardAR[0][i].read < freeboardAR[0][j].read){
                    temp = freeboardAR[0][i];
                    freeboardAR[0][i] = freeboardAR[0][j];
                    freeboardAR[0][j] = temp;
                }
            }
        }
        articleWrite(freeboardAR[0],nextPageSt, nextPageEnd);
    }
    else{
        for(let i=0, temp; i<freeboardAR[0].length-1 ; i++){
            for(let j = i+1 ; j<freeboardAR[0].length ; j++){
                if(freeboardAR[0][i].heart < freeboardAR[0][j].heart){
                    temp = freeboardAR[0][i];
                    freeboardAR[0][i] = freeboardAR[0][j];
                    freeboardAR[0][j] = temp;
                }
            }
        }
        articleWrite(freeboardAR[0],nextPageSt, nextPageEnd)
    }})        
}
// 리뷰순, 좋아요순 감지 후 opacity 변경 및 freeboardAR 재 배열 함수 호출
function listWrite(event){
    let list_sort = document.querySelectorAll('.list_sort');
    let turn = event.target;
    
    if(turn.innerText == "리뷰순"){
        list_sort[0].children[0].style.opacity = 1;
        list_sort[0].children[1].style.opacity = 0.5;
        changeArray(1);
    } else {
        list_sort[0].children[0].style.opacity = 0.5;
        list_sort[0].children[1].style.opacity = 1;
        changeArray(2);
    }
}
/* HTML 삭제 후 alticle 삽입 */
function insert_alticle(index){
    main.innerHTML = `
    <div class="notice_option">
    <h3>자유 게시판</h3>
    <spen onclick="comunityWrite(notistart, notiend)" class="backList">목록가기</spen>
</div>

<section class = "data">
    <div class = "title">
        <p></p>
        <div class = "user_name"></div>
        <div class = "alticle_date"></div>
    </div>
    <div class="alticle">
        <pre></pre>
    </div>
    <div class="alticle_like">
        <button onclick="addHeart(event)" type="button"></button>
    </div>
    <div class = "comment">
        <h3>댓글</h3>
        <div class="comment_logout">
            <p>로그인 후 댓글을 남길 수 있습니다.</p>
            <button>로그인</button>
        </div>
        <ul class="comment_list_ss">                      
        </ul>
    </div>
</section>

<section class = "info">
    <div class="user_icon">
        <div class="user_thumb">
            <button type="button"><img src="" alt=""></button>  
        </div>
        <div class="user_info"></div>
    </div>
    <div class="comment_num">
      <span>댓글</span>
      <span></span>
    </div>
    <div class="like_num">
      <span>좋아요</span>
      <span></span>
    </div> 
    <div class="read_num">
      <span>조회수</span>
      <span></span>
    </div>
    <div class="share">
      <span>공유</span>
      <span></span>
    </div>
</section>
    
    `;
    let title = document.getElementsByClassName('title');
    let alticle = document.getElementsByClassName('alticle');
    let alticle_like = document.getElementsByClassName('alticle_like');
    let info = document.getElementsByClassName('info');
    let user_icon = document.getElementsByClassName('user_icon');
    let comment_list_ss = document.getElementsByClassName('comment_list_ss');
    fetch("http://localhost:3000/freeboard")
    .then(response=>response.json())
    .then(freeboardAR => {
        title[0].children[0].innerText = `${freeboardAR[0][index].subject}`;
        title[0].children[1].innerText = `${freeboardAR[0][index].userInfo}`;
        title[0].children[2].innerText = `${freeboardAR[0][index].freeboard_date}`;
        alticle[0].children[0].innerText = `${freeboardAR[0][index].alticle}`;
        alticle_like[0].children[0].innerText = `${freeboardAR[0][index].heart}`;
        info[0].children[1].children[1].innerText = `${freeboardAR[0][index].commentNum}`;
        info[0].children[2].children[1].innerText = `${freeboardAR[0][index].heart}`;
        info[0].children[3].children[1].innerText = `${freeboardAR[0][index].read}`;
    for(let i = 0 ; i < freeboardAR[0][index].content.length ; i++){
        comment_list_ss[0].innerHTML += `                        
    <li class="imglist">
        <img class="commentUserImg" src="" alt="">
        <button type="button" class="commentUser">${freeboardAR[0][index].comment_user_info[i]}</button>
        <p>${freeboardAR[0][index].content[i]}</p> 
    </li>`
    }})
    fetch("http://localhost:3000/user")
    .then(response=>response.json())
    .then(user => { 
        for(let i = 0 ; i < user[0].length ; i++){
            /* 글쓴이 이미지 삽입 */
            if(title[0].children[1].innerText == user[0][i].userInfo){
                user_icon[0].children[0].children[0].children[0].src = user[0][i].userImage;
            }
        }
        /* 댓글 유저 이미지 삽입 */
        for(let i = 0 ; i < comment_list_ss[0].children.length ; i++){
            for(let j = 0 ; j < user[0].length ; j++){
                if(comment_list_ss[0].children[i].children[1].innerText == user[0][j].userInfo){
                    comment_list_ss[0].children[i].children[0].src = user[0][j].userImage;
                }
            }
        }
    })
}
function addHeart(event){
    let likeNum = document.getElementsByClassName('like_num');
    ++event.target.innerText;
    likeNum[0].innerText = `${event.target.innerText}`;
}
/* 게시판 진입 "클릭"이 감지 됐을 때 inner HTML 게시판 상호작용 실행 */
function contentEnter(event){
    let turn = event.target,
         data = turn.innerText;
    let index;
         fetch("http://localhost:3000/freeboard")
         .then(response=>response.json())
         .then(freeboardAR => {
    index = freeboardAR[0].findIndex(item => item.subject === data);
            insert_alticle(index);       // 기존 HTML 삭제 / alticle 양식 추가
         })
}
/* 10개씩, 20개씩, 30개씩 보기 변경 감지, 현재 페이지에서 재 출력 */
function sortArray(event){
    let selcet_option = event.target.value
    let start = 0;
    fetch("http://localhost:3000/freeboard")
    .then(response=>response.json())
    .then(freeboardAR => {
    articleWrite(freeboardAR[0],start, selcet_option);    
    update_page(freeboardAR[0],selcet_option);   
    update_page(freeboardAR[0],selcet_option);    
    })
}
/** 페이지 바꾸기 박스 클릭시 색상 변경 관련 코드  **/
function pageChanging(event){
    let sort = document.getElementById('sort');
    let pageBoxes = document.querySelectorAll('.page span');
    let turn = event.target.innerText;
    for (let i = 0; i < pageBoxes.length; i++) {
        if (pageBoxes[i].innerText == turn) {
            // 클릭한 페이지 박스의 색상 변경
            event.target.classList.add('default');
        } else {
            // 나머지 페이지 박스의 색상 초기화
            pageBoxes[i].classList.remove('default');
        }
    }
    nextPageSt = (turn - 1) * +(sort.value);
    nextPageEnd = nextPageSt + +(sort.value) - 1;
    fetch("http://localhost:3000/freeboard")
    .then(response=>response.json())
    .then(freeboardAR => {
    articleWrite2(freeboardAR[0],nextPageSt, nextPageEnd);

    })
}
/* 페이지 네이션 생성 및 클릭 시 동적 모션 적용 */
function update_page(freeboardAR,selectedOption) {
    let page = document.getElementsByClassName('page');

    page[0].innerHTML = "";
    /* 페이지 네이션 박스 생성 */
    for (let i = 0; i < freeboardAR.length / selectedOption; i++) {
        if (i == 0) {
            page[0].innerHTML += `
                <span onclick="pageChanging(event)" class="default">${i + 1}</span>
            `;
        } else {
            page[0].innerHTML += `
                <span onclick="pageChanging(event)" class="other">${i + 1}</span>
            `;
        }
    }
}

/*                    ▲▲▲▲  승삼  ▲▲▲▲                    */ 
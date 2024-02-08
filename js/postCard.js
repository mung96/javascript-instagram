import { postCardUi } from "./components/postCard/postCardUi.js";

let users = [
    { id: 1, nickName: "보노보노", profileImg: "img/user/profile/bonobonoProfile.jpg", posts:["img/user/post/bonobonoPost1.jpeg","img/user/post/bonobonoPost2.jpeg","img/user/post/bonobonoPost3.jpeg"] },
    { id: 2, nickName: "포로리", profileImg: "img/user/profile/pororiProfile.webp",posts:["img/user/post/pororiPost1.jpeg","img/user/post/pororiPost2.jpeg","img/user/post/pororiPost3.jpeg"] },
    { id: 3, nickName: "너부리", profileImg: "img/user/profile/raccoonProfile.jpeg",posts:["img/user/post/raccoonPost1.jpeg","img/user/post/raccoonPost2.jpeg","img/user/post/raccoonPost3.jpeg"] }
]

function postCardSlide(user) {
    const userPost = document.querySelector(`#postCard${user.id}`);
    const btnPrev = userPost.querySelector(".btnPrev");
    const btnNext = userPost.querySelector(".btnNext");
    const slideImgs = userPost.querySelector(".postCardSlide");

    btnPrev.style.display = "none";
    let imgIndex = 0;
    let position = 0;
    const IMG_WIDTH = 550;

    function handleBtnClick(btn) {
        return function () {
            if (btn === "prev") {
                imgIndex -= 1;
                position += IMG_WIDTH;
            }
            if (btn === "next") {
                imgIndex += 1;
                position -= IMG_WIDTH;
            }
            btnPrev.style.display = (imgIndex === 0) ? "none" : "";
            btnNext.style.display = (imgIndex === 2) ? "none" : "";
            slideImgs.style.transform = `translateX(${position}px)`;
            slideImgs.style.transition = "transform .5s ease-out";
        }
    };
    btnPrev.addEventListener("click", handleBtnClick("prev"));
    btnNext.addEventListener("click", handleBtnClick("next"));
};

function postCardLike(user){
    const userPost = document.querySelector(`#postCard${user.id}`);
    let heartCount = userPost.querySelector(".favorite");
    let heartIconBox = userPost.querySelector(".heartAction");
    let heartIcon = heartIconBox.querySelector("img"); //진짜 이거밖에 방법이 없는건가?
    
    const unLikeIcon = "img/icon/heart.svg";
    const likeIcon = "img/icon/heartLike.svg";
    
    function handleHeartClick(){
        let isLike = true;   
        let count =0; 
        return function(){
            heartIcon.src = isLike? likeIcon:unLikeIcon;
            count = isLike? ++count:--count;
            console.log(count);
            heartCount.textContent= (count===0)? "아직 좋아요가 없습니다.":`좋아요 ${count}개`;
            isLike = !isLike;
        }
    }
    heartIcon.addEventListener("click",handleHeartClick());
};


const postCard = (user) => {
    postCardUi(user);
    postCardSlide(user);
    postCardLike(user);
}

users.map(user => postCard(user));



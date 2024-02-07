import { postCardUi } from "./components/postCard/postCardUi.js";

let users = [
    { id: 1, nickName: "보노보노", profileImg: "img/user/profile/bonobonoProfile.jpg" },
    { id: 2, nickName: "포로리", profileImg: "img/user/profile/pororiProfile.webp" },
    { id: 3, nickName: "너부리", profileImg: "img/user/profile/raccoonProfile.jpeg" }
]
// const postCardContent = document.querySelector("#postCards");

function postCardFeat() {
    const btnPrev = document.querySelector(".btnPrev");
    const btnNext = document.querySelector(".btnNext");
    const slideImgs = document.querySelector(".postCardSlide");
    btnPrev.style.display = "none";
    let imgIndex = 0;
    let position = 0;
    const IMG_WIDTH = 550;
    console.log(1);

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

    function slide() {
        btnPrev.addEventListener("click", handleBtnClick("prev"));
        btnNext.addEventListener("click", handleBtnClick("next"));
    }
    slide()
};


const postCard = () => {
    users.map(user => postCardUi(user));
    postCardFeat();
}

postCard();



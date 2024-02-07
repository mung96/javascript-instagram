(() => {
    const postCards = document.querySelector('#postCards')

    let user =  { id: 1, nickName: "보노보노", profileImg: "img/user/profile/bonobonoProfile.jpg" }

    function makeTopLeft(user){
        const topLeft = document.createElement('div');
        topLeft.classList.add("postCardTopLeft");
        const profile = document.createElement('div');
        profile.classList.add("postCardProfile");
        topLeft.appendChild(profile);
        const profileImg = document.createElement('img');
        profileImg.src = user.profileImg;
        profile.appendChild(profileImg);
        const nickName = document.createElement('span');
        profile.classList.add("postCardNickName");
        nickName.textContent = user.nickName;
        topLeft.appendChild(nickName);
        const timeLog = document.createElement('span');
        timeLog.textContent = "1일"; //todo: 날짜부분 업데이트되도록 변경해야함.
        topLeft.appendChild(timeLog);

        return topLeft;
    }
    
    function makeTopRight(){
        const topRight = document.createElement('div');
        topRight.classList.add("postCardTopRight");
        const moreIcon = document.createElement('div');
        moreIcon.classList.add("postCardMoreIcon");
        topRight.appendChild(moreIcon);
        const moreIconImg = document.createElement('img');
        moreIcon.appendChild(moreIconImg);
        return topRight;
    }
    
    function makeTop(user){
        const top = document.createElement('div');
        top.classList.add("postCardTop");
        top.appendChild(makeTopLeft(user));
        top.appendChild(makeTopRight());
        return top
    }

    
    const postCardUi = (user) => {
        const postCard = document.createElement('div');
        postCard.classList.add("postCard");
        postCard.appendChild(makeTop(user));
        postCards.appendChild(postCard);
        console.log(4);
    }

    postCardUi(user);
})()
    
   
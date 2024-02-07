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
    
    const makeTop = (user) => {
        const top = document.createElement('div');
        top.classList.add("postCardTop");
        top.appendChild(makeTopLeft(user));
        top.appendChild(makeTopRight());
        return top
    }

    const makeContent = () =>{
        const content = document.createElement('div');
        content.classList.add("postCardContent");

        const slide = document.createElement('div');
        slide.classList.add("postCardSlide");
        content.appendChild(slide);

        const slideImg1 = document.createElement('img');
        slideImg1.src = "img/user/post/bonobonoPost1.jpeg";
        const slideImg2 = document.createElement('img');
        slideImg2.src = "img/user/post/bonobonoPost2.jpeg"
        const slideImg3 = document.createElement('img');
        slideImg3.src = "img/user/post/bonobonoPost3.jpeg"

        slide.appendChild(slideImg1);
        slide.appendChild(slideImg2);
        slide.appendChild(slideImg3);

        //버튼부분
        const btnNext = document.createElement('button');
        btnNext.classList.add("btnNext");
        btnNext.textContent = "▶";
        const btnPrev = document.createElement('button');
        btnPrev.classList.add("btnPrev");
        btnPrev.textContent = "◀";
        content.appendChild(btnNext);
        content.appendChild(btnPrev);
        return content; 
    }

    function bottomIconsLeft(){
        const bottomIconsLeft = document.createElement('div');
        bottomIconsLeft.classList.add("postCardBottomIconsLeft");
        
        for(let i=0;i<3;i++){
            const IconBox = document.createElement('div');
            IconBox.classList.add("postCardBottomIconBox");
            const IconImg = document.createElement('img');
            IconImg.src = "img/icon/heart.svg";
            IconBox.appendChild(IconImg);
            bottomIconsLeft.appendChild(IconBox);
        }
        return bottomIconsLeft;
    }

    function bottomIconsRight(){
        const bottomIconsRight = document.createElement('div');
        bottomIconsRight.classList.add("postCardBottomIconsRight");
  
        const IconBox = document.createElement('div');
        IconBox.classList.add("postCardBottomIconBox");
        const IconImg = document.createElement('img');
        IconImg.src = "img/icon/bookmark.svg";
        IconBox.appendChild(IconImg);
        bottomIconsRight.appendChild(IconBox);
        
        return bottomIconsRight;
    }

    function makeBottomIcons(){
        const bottomIcons = document.createElement('div');
        bottomIcons.classList.add("postCardBottomIcons")

        bottomIcons.appendChild(bottomIconsLeft());
        bottomIcons.appendChild(bottomIconsRight());
        return bottomIcons;
    }

    function makeBottomContents(user){
    
        //닉네임이랑 게시글 부분
        const bottomTexts = document.createElement('div'); 
        bottomTexts.classList.add("postCardBottomText");

        const nickName = document.createElement('span');
        nickName.classList.add("postCardBottomNickName");
        nickName.textContent = user.nickName;
        
        const body = document.createElement('span');
        body.classList.add("postCardBottomBody");
        body.textContent = "안녕하세요.감사해요.잘있어요.다시만나요.";

        bottomTexts.appendChild(nickName);
        bottomTexts.appendChild(body);

        //


        return bottomTexts
    }

    const makeBottom = (user) => {
        const bottom = document.createElement('div');
        bottom.classList.add("postCardBottom");
        bottom.appendChild(makeBottomIcons());
        
        //좋아요 갯수
        const favoriteCount = document.createElement('span');
        favoriteCount.textContent="좋아요 66개";
        bottom.appendChild(favoriteCount);

        //닉네임, 내용
        bottom.appendChild(makeBottomContents(user));
        
        //댓글보기
        const seeComment = document.createElement('span');
        seeComment.classList.add("postCardBottomSeeComment");
        seeComment.textContent="댓글보기";
        bottom.appendChild(seeComment);

        //댓글달기
        const writeComment = document.createElement('input');
        writeComment.placeholder="댓글달기...";
        seeComment.classList.add("postCardBottomWriteComment");
        bottom.appendChild(writeComment);
        return bottom;
    }
    
    const postCardUi = (user) => {
        const postCard = document.createElement('div');
        postCard.classList.add("postCard");

        postCard.appendChild(makeTop(user));
        postCard.appendChild(makeContent());
        postCard.appendChild(makeBottom(user));

        postCards.appendChild(postCard);
    }

    postCardUi(user);
})()
    
   
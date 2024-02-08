const leftIcons = [
    {id:1,name:"heart",iconImg:"img/icon/heart.svg"},
    {id:2,name:"comment",iconImg:"img/icon/comment.svg"},
    {id:3,name:"send",iconImg:"img/icon/send.svg"}
];

const rightIcons = [
    {id:1,name:"bookmark",iconImg:"img/icon/bookmark.svg"}
];



function bottomIconsLeft(){
    const bottomIconsLeft = document.createElement('div');
    bottomIconsLeft.classList.add("postCardBottomIconsLeft");
    
    leftIcons.forEach((icon)=>{
        const IconBox = document.createElement('div');
        IconBox.classList.add("postCardBottomIconBox",`${icon.name}Action`);
        const IconImg = document.createElement('img');
        IconImg.src = icon.iconImg;
        IconBox.appendChild(IconImg);
        bottomIconsLeft.appendChild(IconBox);
    })
    return bottomIconsLeft;
}

function bottomIconsRight(){
    const bottomIconsRight = document.createElement('div');
    bottomIconsRight.classList.add("postCardBottomIconsRight");

    rightIcons.forEach((icon)=>{
        const IconBox = document.createElement('div');
        IconBox.classList.add("postCardBottomIconBox",`${icon.name}Action`);
        const IconImg = document.createElement('img');
        IconImg.src = icon.iconImg;
        IconBox.appendChild(IconImg);
        bottomIconsRight.appendChild(IconBox);
    })

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

    return bottomTexts
}

export const makeBottom = (user) => {
    const bottom = document.createElement('div');
    bottom.classList.add("postCardBottom");
    bottom.appendChild(makeBottomIcons());
    
    //좋아요 갯수
    const favoriteCount = document.createElement('span');
    favoriteCount.classList.add("favorite");
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
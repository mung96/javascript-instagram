

const storyProfile = document.quarySelector("storyfeed_item_profile")
const Clicks = getAll('storyfeed_item_profile')



function clickStory(){
    const selectedStoryElement = storycolor[0];

    if(!check){
      storycolor.style.border = "2px solid rainbow";
    }
    else{
      storycolor.style.border = "2px solid gray";
    }
    Clicks.forEach((profile) => {
        button.addEventListener('click', clicked);
    })
}

/*
function init () {
    storyClick.addEventListener("click", buttonClickHandler);
   
}
*/

function clickLike(){
    if(!check){
      heart.src="img/icon_Heart.svg";
    }
    else{
      heart.src="img/icon_RedHeart.png";
      /*click 여러번으로 상태 바뀌지 않으니까 T/F check 필요 x */
    }
}


/*이걸 css랑 html에는 어떻게 적용할지?*/


init();

/*story 사진 클릭시 무지개색에서 회색으로 바뀌게끔*/